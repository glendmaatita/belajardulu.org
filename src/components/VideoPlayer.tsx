import { Player, type PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import type { VideoComp } from "../types";
import { videoRegistry, VIDEO } from "../remotion/registry";
import { Icon } from "./Icon";

export function VideoPlayer({ comp, title, caption }: { comp: VideoComp; title: string; caption?: string }) {
  const playerRef = useRef<PlayerRef>(null);
  const entry = videoRegistry[comp];
  const lastFrame = entry ? entry.durationInFrames - 1 : 0;

  // Saat video selesai, tahan di frame terakhir (jangan kembali ke detik awal).
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    const onEnded = () => {
      player.pause();
      player.seekTo(lastFrame);
    };
    player.addEventListener("ended", onEnded);
    return () => player.removeEventListener("ended", onEnded);
  }, [lastFrame]);

  if (!entry) return null;
  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-line bg-ink shadow-sm">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </span>
        <span className="ml-2 flex items-center gap-2 text-sm font-semibold text-line">
          <Icon name="film" className="text-rose-400" /> {title}
        </span>
      </div>
      <Player
        ref={playerRef}
        component={entry.component}
        durationInFrames={entry.durationInFrames}
        fps={VIDEO.fps}
        compositionWidth={VIDEO.width}
        compositionHeight={VIDEO.height}
        style={{ width: "100%" }}
        controls
        acknowledgeRemotionLicense
      />
      {caption && (
        <figcaption className="bg-ink px-4 py-3 text-sm text-ink-faint">{caption}</figcaption>
      )}
    </figure>
  );
}
