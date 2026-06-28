import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "./Icon";

// ---- shared hooks ----
function useInView<T extends HTMLElement>(): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
}

function useProgress(active: boolean, duration = 900): number {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const k = Math.min(1, (t - start) / duration);
      // easeOutCubic
      setP(1 - Math.pow(1 - k, 3));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, duration]);
  return p;
}

const PALETTE = ["#10b981", "#0ea5e9", "#f59e0b", "#8b5cf6", "#ef4444", "#14b8a6", "#ec4899", "#84cc16"];

function fmt(n: number): string {
  if (Math.abs(n) >= 1_000_000_000) return (n / 1_000_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 }) + " M";
  if (Math.abs(n) >= 1_000_000) return (n / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 }) + " jt";
  if (Math.abs(n) >= 1_000) return (n / 1_000).toLocaleString("id-ID", { maximumFractionDigits: 1 }) + " rb";
  return n.toLocaleString("id-ID", { maximumFractionDigits: 2 });
}

export type ChartDatum = { label: string; value: number; color?: string };

export function Chart({
  variant,
  title,
  unit,
  source,
  note,
  data,
}: {
  variant: "bar" | "line" | "donut" | "area";
  title: string;
  unit?: string;
  source?: string;
  note?: string;
  data: ChartDatum[];
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const p = useProgress(inView);

  const chartIcon: IconName =
    variant === "line" || variant === "area" ? "chart-line" : variant === "donut" ? "chart-pie" : "chart-bar";

  return (
    <figure ref={ref} className="my-6 card p-5">
      <figcaption className="mb-1 flex items-baseline justify-between gap-2">
        <span className="flex items-center gap-2 text-sm font-bold text-ink">
          <Icon name={chartIcon} className="text-brand-500" /> {title}
        </span>
        {unit && <span className="text-xs font-medium text-ink-faint">dalam {unit}</span>}
      </figcaption>
      <div className="mt-3">
        {variant === "bar" && <BarChart data={data} p={p} />}
        {(variant === "line" || variant === "area") && <LineChart data={data} p={p} area={variant === "area"} />}
        {variant === "donut" && <DonutChart data={data} p={p} />}
      </div>
      {note && <p className="mt-3 text-xs leading-relaxed text-ink-faint">{note}</p>}
      {source && <p className="mt-1 text-[11px] italic text-slate-400">Sumber/ilustrasi: {source}</p>}
    </figure>
  );
}

function BarChart({ data, p }: { data: ChartDatum[]; p: number }) {
  const max = Math.max(...data.map((d) => d.value), 0) || 1;
  return (
    <div>
      <div className="flex h-56 items-end gap-2 sm:gap-3">
        {data.map((d, i) => {
          const h = (d.value / max) * 100 * p;
          const color = d.color || PALETTE[i % PALETTE.length];
          return (
            <div key={i} className="flex h-full flex-1 flex-col items-center justify-end">
              <div className="mb-1 text-[11px] font-bold tnum text-ink-soft" style={{ opacity: p }}>
                {fmt(d.value)}
              </div>
              <div
                className="w-full rounded-t-md transition-[height]"
                style={{ height: `${Math.max(h * 0.9, d.value > 0 ? 2 : 0)}%`, background: color, minHeight: d.value > 0 ? 2 : 0 }}
                title={`${d.label}: ${fmt(d.value)}`}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex gap-2 sm:gap-3">
        {data.map((d, i) => (
          <div key={i} className="flex-1 text-center text-[11px] leading-tight text-ink-faint">
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChart({ data, p, area }: { data: ChartDatum[]; p: number; area: boolean }) {
  const W = 600;
  const H = 220;
  const padL = 44;
  const padB = 28;
  const padT = 12;
  const padR = 12;
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(...data.map((d) => d.value), 0);
  const span = max - min || 1;
  const x = (i: number) => padL + (i / (data.length - 1 || 1)) * (W - padL - padR);
  const y = (v: number) => padT + (1 - (v - min) / span) * (H - padT - padB);

  const pts = data.map((d, i) => [x(i), y(d.value)] as const);
  const path = pts.map((pt, i) => `${i === 0 ? "M" : "L"}${pt[0]},${pt[1]}`).join(" ");
  const areaPath = `${path} L${x(data.length - 1)},${H - padB} L${x(0)},${H - padB} Z`;
  const gridY = [0, 0.25, 0.5, 0.75, 1].map((f) => min + f * span);

  // draw animation via dasharray
  const len = 1400;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 240 }}>
      {gridY.map((gv, i) => (
        <g key={i}>
          <line x1={padL} x2={W - padR} y1={y(gv)} y2={y(gv)} stroke="#e2e8f0" strokeWidth={1} />
          <text x={padL - 6} y={y(gv) + 3} textAnchor="end" fontSize={10} fill="#94a3b8">
            {fmt(gv)}
          </text>
        </g>
      ))}
      {area && (
        <path d={areaPath} fill="url(#areaGrad)" opacity={p} />
      )}
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity={0.35} />
          <stop offset="100%" stopColor="#10b981" stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke="#10b981"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeDasharray={len}
        strokeDashoffset={len * (1 - p)}
      />
      {pts.map((pt, i) => (
        <circle key={i} cx={pt[0]} cy={pt[1]} r={3} fill="#10b981" opacity={p > 0.85 ? 1 : 0} />
      ))}
      {data.map((d, i) =>
        i % Math.ceil(data.length / 8) === 0 || i === data.length - 1 ? (
          <text key={i} x={x(i)} y={H - 8} textAnchor="middle" fontSize={10} fill="#94a3b8">
            {d.label}
          </text>
        ) : null
      )}
    </svg>
  );
}

function DonutChart({ data, p }: { data: ChartDatum[]; p: number }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const R = 70;
  const C = 2 * Math.PI * R;
  let acc = 0;
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
      <svg viewBox="0 0 180 180" className="h-44 w-44 -rotate-90">
        {data.map((d, i) => {
          const frac = (d.value / total) * p;
          const dash = frac * C;
          const seg = (
            <circle
              key={i}
              cx={90}
              cy={90}
              r={R}
              fill="none"
              stroke={d.color || PALETTE[i % PALETTE.length]}
              strokeWidth={22}
              strokeDasharray={`${dash} ${C - dash}`}
              strokeDashoffset={-acc * C}
            />
          );
          acc += frac;
          return seg;
        })}
      </svg>
      <ul className="space-y-1.5">
        {data.map((d, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span className="h-3 w-3 rounded-sm" style={{ background: d.color || PALETTE[i % PALETTE.length] }} />
            <span className="text-ink-soft">{d.label}</span>
            <span className="ml-auto pl-3 font-bold tnum text-ink">
              {Math.round((d.value / total) * 100)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---- KPI stat cards with count-up ----
export function StatCards({ items }: { items: { value: string; label: string; sub?: string; color?: string }[] }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <StatCard key={i} {...it} active={inView} delay={i * 120} />
      ))}
    </div>
  );
}

function StatCard({
  value,
  label,
  sub,
  color,
  active,
  delay,
}: {
  value: string;
  label: string;
  sub?: string;
  color?: string;
  active: boolean;
  delay: number;
}) {
  // Try to count up the leading number while keeping prefix/suffix text.
  const m = value.match(/^([^\d-]*)(-?[\d.,]+)(.*)$/);
  const target = m ? Number(m[2].replace(/\./g, "").replace(/,/g, ".")) : NaN;
  const [shown, setShown] = useState(Number.isNaN(target) ? value : (m![1] + "0" + m![3]));

  useEffect(() => {
    if (!active || Number.isNaN(target)) return;
    let raf = 0;
    let start = 0;
    const dur = 1000;
    const tick = (t: number) => {
      if (!start) start = t + delay;
      if (t < start) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      const cur = target * eased;
      const decimals = m![2].includes(",") ? 1 : 0;
      setShown(m![1] + cur.toLocaleString("id-ID", { maximumFractionDigits: decimals }) + m![3]);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, delay]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-2xl font-extrabold tnum" style={{ color: color || "#0f766e" }}>
        {shown}
      </div>
      <div className="mt-1 text-sm font-semibold text-ink">{label}</div>
      {sub && <div className="mt-0.5 text-xs text-ink-faint">{sub}</div>}
    </div>
  );
}
