import { Player } from "@remotion/player";
import type { VideoComp } from "../types";
import { videoRegistry, VIDEO } from "../remotion/registry";
import { Icon } from "./Icon";

export function VideoPlayer({ comp, title, caption }: { comp: VideoComp; title: string; caption?: string }) {
  const entry = videoRegistry[comp];
  if (!entry) return null;
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </span>
        <span className="ml-2 flex items-center gap-2 text-sm font-semibold text-slate-200">
          <Icon name="film" className="text-rose-400" /> {title}
        </span>
      </div>
      <Player
        component={entry.component}
        durationInFrames={entry.durationInFrames}
        fps={VIDEO.fps}
        compositionWidth={VIDEO.width}
        compositionHeight={VIDEO.height}
        style={{ width: "100%" }}
        controls
        loop
        acknowledgeRemotionLicense
      />
      {caption && (
        <figcaption className="bg-slate-900 px-4 py-3 text-sm text-slate-400">{caption}</figcaption>
      )}
    </figure>
  );
}
