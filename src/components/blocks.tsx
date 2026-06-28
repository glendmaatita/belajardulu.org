import { lazy, Suspense } from "react";
import type { ContentBlock, JournalLine } from "../types";
import { rupiah } from "../lib/format";
import { Quiz } from "./Quiz";
import { JournalExercise } from "./JournalExercise";
import { CalcExercise } from "./CalcExercise";
import { ClassifyExercise } from "./ClassifyExercise";
import { MatchExercise } from "./MatchExercise";
import { Chart, StatCards } from "./Charts";
import { widgetRegistry } from "./widgets";
import { annotateGlossary } from "../lib/glossary";
import { Icon, type IconName } from "./Icon";

// Code-split Remotion (heavy) so it only loads on lessons that have a video.
const VideoPlayer = lazy(() => import("./VideoPlayer").then((m) => ({ default: m.VideoPlayer })));

export function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return <h3 className="mt-9 mb-3 text-xl font-bold text-ink">{block.text}</h3>;

    case "paragraph":
      return (
        <p
          className="mb-4 leading-relaxed text-ink-soft [&_b]:font-semibold [&_b]:text-ink [&_strong]:font-semibold [&_strong]:text-ink"
          dangerouslySetInnerHTML={{ __html: annotateGlossary(block.html) }}
        />
      );

    case "list":
      return block.ordered ? (
        <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-ink-soft marker:font-semibold marker:text-brand-500">
          {block.items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: annotateGlossary(it) }} />
          ))}
        </ol>
      ) : (
        <ul className="mb-4 ml-5 list-disc space-y-1.5 text-ink-soft">
          {block.items.map((it, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: annotateGlossary(it) }} />
          ))}
        </ul>
      );

    case "callout":
      return <Callout {...block} />;

    case "case":
      return (
        <div className="my-6 overflow-hidden rounded-2xl border-l-4 border-violet-400 bg-violet-50/60">
          <div className="px-5 py-4">
            <div className="mb-1 flex items-center gap-2 text-sm font-bold text-violet-700">
              <Icon name="search" /> {block.title}
            </div>
            <p className="text-sm leading-relaxed text-ink-soft" dangerouslySetInnerHTML={{ __html: annotateGlossary(block.html) }} />
          </div>
        </div>
      );

    case "equation":
      return <EquationStatic assets={block.assets} liabilities={block.liabilities} equity={block.equity} note={block.note} />;

    case "journal":
      return <JournalTable {...block} />;

    case "ledger":
      return <Ledger accounts={block.accounts} />;

    case "table":
      return <DataTable headers={block.headers} rows={block.rows} caption={block.caption} />;

    case "chart":
      return (
        <Chart
          variant={block.variant}
          title={block.title}
          unit={block.unit}
          source={block.source}
          note={block.note}
          data={block.data}
        />
      );

    case "stats":
      return <StatCards items={block.items} />;

    case "takeaways":
      return (
        <div className="my-6 rounded-2xl bg-gradient-to-br from-brand-50 to-emerald-50 p-5">
          <div className="mb-2 flex items-center gap-2 font-bold text-brand-800">
            <Icon name="target" /> Inti Pelajaran
          </div>
          <ul className="space-y-2">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-soft">
                <Icon name="check-circle" className="mt-0.5 shrink-0 text-emerald-500" />
                <span dangerouslySetInnerHTML={{ __html: annotateGlossary(it) }} />
              </li>
            ))}
          </ul>
        </div>
      );

    case "image":
      return <ImageBlock src={block.src} alt={block.alt} caption={block.caption} credit={block.credit} />;

    case "video":
      return (
        <Suspense
          fallback={
            <div className="my-6 grid h-64 place-items-center rounded-2xl border border-slate-200 bg-slate-900 text-sm text-slate-400">
              Memuat video…
            </div>
          }
        >
          <VideoPlayer comp={block.comp} title={block.title} caption={block.caption} />
        </Suspense>
      );

    case "quiz":
      return <Quiz questions={block.questions} />;

    case "journalExercise":
      return (
        <JournalExercise prompt={block.prompt} accounts={block.accounts} answer={block.answer} hint={block.hint} />
      );

    case "calcExercise":
      return (
        <CalcExercise
          prompt={block.prompt}
          answer={block.answer}
          tolerance={block.tolerance}
          prefix={block.prefix}
          suffix={block.suffix}
          solution={block.solution}
          hint={block.hint}
        />
      );

    case "classifyExercise":
      return <ClassifyExercise prompt={block.prompt} buckets={block.buckets} items={block.items} />;

    case "matchExercise":
      return <MatchExercise prompt={block.prompt} pairs={block.pairs} />;

    case "widget": {
      const W = widgetRegistry[block.widget];
      return W ? <W /> : null;
    }

    default:
      return null;
  }
}

const calloutStyles = {
  info: { wrap: "border-sky-300 bg-sky-50", title: "text-sky-700", icon: "info" },
  tip: { wrap: "border-emerald-300 bg-emerald-50", title: "text-emerald-700", icon: "lightbulb" },
  warn: { wrap: "border-amber-300 bg-amber-50", title: "text-amber-700", icon: "warn" },
  key: { wrap: "border-brand-300 bg-brand-50", title: "text-brand-700", icon: "key" },
} as const satisfies Record<string, { wrap: string; title: string; icon: IconName }>;

function ImageBlock({ src, alt, caption, credit }: { src: string; alt: string; caption?: string; credit?: string }) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="mx-auto block max-h-96 w-full object-contain"
        />
      </div>
      {(caption || credit) && (
        <figcaption className="mt-2 text-center text-xs text-ink-faint">
          {caption}
          {credit && <span className="block text-[11px] text-ink-faint/80">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

function Callout({ tone, title, html }: { tone: keyof typeof calloutStyles; title?: string; html: string }) {
  const s = calloutStyles[tone];
  return (
    <div className={`my-5 rounded-xl border-l-4 px-5 py-4 ${s.wrap}`}>
      {title && (
        <div className={`mb-1 flex items-center gap-2 text-sm font-bold ${s.title}`}>
          <Icon name={s.icon} /> {title}
        </div>
      )}
      <div
        className="text-sm leading-relaxed text-ink-soft [&_b]:font-semibold [&_b]:text-ink [&_em]:text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink"
        dangerouslySetInnerHTML={{ __html: annotateGlossary(html) }}
      />
    </div>
  );
}

function JournalTable({ title, date, lines, note }: { title?: string; date?: string; lines: JournalLine[]; note?: string }) {
  const totalD = lines.reduce((s, l) => s + (l.debit || 0), 0);
  const totalC = lines.reduce((s, l) => s + (l.credit || 0), 0);
  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-slate-200">
      {(title || date) && (
        <div className="flex items-center justify-between gap-3 bg-slate-50 px-4 py-2.5">
          <span className="text-sm font-semibold text-ink">{title}</span>
          {date && <span className="shrink-0 rounded-md bg-white px-2 py-0.5 text-xs font-medium text-ink-faint">{date}</span>}
        </div>
      )}
      <table className="w-full text-sm">
        <thead className="text-xs text-ink-faint">
          <tr className="border-b border-slate-100">
            <th className="px-4 py-2 text-left font-semibold">Akun</th>
            <th className="px-4 py-2 text-right font-semibold">Debit</th>
            <th className="px-4 py-2 text-right font-semibold">Kredit</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((l, i) => (
            <tr key={i} className="border-b border-slate-50 last:border-0">
              <td className={`px-4 py-2 ${l.credit ? "pl-10 text-ink-soft" : "font-medium text-ink"}`}>{l.account}</td>
              <td className="px-4 py-2 text-right tnum">{l.debit ? rupiah(l.debit) : ""}</td>
              <td className="px-4 py-2 text-right tnum">{l.credit ? rupiah(l.credit) : ""}</td>
            </tr>
          ))}
          <tr className="border-t-2 border-slate-200 bg-slate-50 font-bold">
            <td className="px-4 py-2 text-xs uppercase text-ink-faint">Total</td>
            <td className="px-4 py-2 text-right tnum">{rupiah(totalD)}</td>
            <td className="px-4 py-2 text-right tnum">{rupiah(totalC)}</td>
          </tr>
        </tbody>
      </table>
      {note && <p className="bg-white px-4 py-3 text-xs leading-relaxed text-ink-faint">{note}</p>}
    </div>
  );
}

function DataTable({ headers, rows, caption }: { headers: string[]; rows: string[][]; caption?: string }) {
  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-slate-200">
      {caption && <div className="bg-slate-50 px-4 py-2 text-xs font-semibold text-ink-faint">{caption}</div>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold text-ink-faint">
              {headers.map((h, i) => (
                <th key={i} className={`px-4 py-2.5 ${i > 0 ? "text-right" : ""}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const isTotal = /total|hpp|harga pokok|barang tersedia/i.test(row[0]);
              return (
                <tr key={ri} className={`border-b border-slate-50 last:border-0 ${isTotal ? "bg-slate-50 font-bold" : ""}`}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-4 py-2.5 ${ci > 0 ? "text-right tnum" : "text-ink-soft"}`}>{cell}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EquationStatic({
  assets,
  liabilities,
  equity,
  note,
}: {
  assets: number;
  liabilities: number;
  equity: number;
  note?: string;
}) {
  return (
    <div className="my-5 card p-4">
      <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:gap-3">
        <EqCell label="ASET" value={assets} color="bg-emerald-100 text-emerald-800" />
        <span className="text-xl font-bold text-ink-faint">=</span>
        <EqCell label="KEWAJIBAN" value={liabilities} color="bg-amber-100 text-amber-800" />
        <span className="text-xl font-bold text-ink-faint">+</span>
        <EqCell label="EKUITAS" value={equity} color="bg-blue-100 text-blue-800" />
      </div>
      {note && <p className="mt-3 text-center text-xs text-ink-faint">{note}</p>}
    </div>
  );
}

function EqCell({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className={`min-w-[110px] rounded-xl px-3 py-2 ${color}`}>
      <div className="text-[11px] font-semibold opacity-70">{label}</div>
      <div className="text-sm font-bold tnum sm:text-base">{rupiah(value)}</div>
    </div>
  );
}

function Ledger({ accounts }: { accounts: { name: string; debits: number[]; credits: number[] }[] }) {
  return (
    <div className="my-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {accounts.map((acc) => {
        const td = acc.debits.reduce((s, n) => s + n, 0);
        const tc = acc.credits.reduce((s, n) => s + n, 0);
        const bal = td - tc;
        return (
          <div key={acc.name} className="overflow-hidden rounded-xl border border-slate-200">
            <div className="bg-slate-800 px-3 py-1.5 text-center text-sm font-bold text-white">{acc.name}</div>
            <div className="grid grid-cols-2 text-xs">
              <div className="border-r border-slate-200">
                <div className="bg-slate-50 px-2 py-1 text-center font-semibold text-emerald-600">Debit</div>
                {acc.debits.length ? (
                  acc.debits.map((n, i) => (
                    <div key={i} className="px-2 py-1 text-right tnum">{rupiah(n)}</div>
                  ))
                ) : (
                  <div className="px-2 py-1 text-center text-slate-300">-</div>
                )}
              </div>
              <div>
                <div className="bg-slate-50 px-2 py-1 text-center font-semibold text-rose-500">Kredit</div>
                {acc.credits.length ? (
                  acc.credits.map((n, i) => (
                    <div key={i} className="px-2 py-1 text-right tnum">{rupiah(n)}</div>
                  ))
                ) : (
                  <div className="px-2 py-1 text-center text-slate-300">-</div>
                )}
              </div>
            </div>
            <div className="border-t border-slate-200 bg-slate-50 px-2 py-1.5 text-center text-xs font-bold">
              Saldo: <span className="tnum">{rupiah(Math.abs(bal))}</span>{" "}
              <span className={bal >= 0 ? "text-emerald-600" : "text-rose-500"}>({bal >= 0 ? "D" : "K"})</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
