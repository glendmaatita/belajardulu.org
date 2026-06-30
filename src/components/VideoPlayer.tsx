import { Player, type PlayerRef, type CallbackListener } from "@remotion/player";
import { useEffect, useRef } from "react";
import type { VideoComp } from "../types";
import { videoRegistry, VIDEO } from "../remotion/registry";
import { Icon } from "./Icon";

export function VideoPlayer({ comp, title, caption }: { comp: VideoComp; title: string; caption?: string }) {
  const playerRef = useRef<PlayerRef>(null);
  const entry = videoRegistry[comp];
  const lastFrame = entry ? entry.durationInFrames - 1 : 0;

  // Saat video selesai, tahan di frame terakhir (jangan kembali ke detik awal).
  // Remotion Player otomatis mereset ke frame 0 saat berakhir, jadi kita pin
  // ulang frame terakhir: langsung, di frame berikutnya, dan saat terdeteksi reset.
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    let ended = false;
    const pin = () => {
      try {
        player.pause();
        player.seekTo(lastFrame);
      } catch {
        // player belum siap; abaikan
      }
    };
    const onEnded: CallbackListener<"ended"> = () => {
      ended = true;
      pin();
      requestAnimationFrame(pin);
    };
    const onFrame: CallbackListener<"frameupdate"> = (e) => {
      // Jika Remotion melompat balik ke awal setelah selesai (saat TIDAK sedang
      // diputar), kembalikan ke frame terakhir. Saat sedang diputar (replay),
      // jangan diganggu supaya video bisa diputar ulang dari awal.
      if (ended && !player.isPlaying() && e.detail.frame < lastFrame - 1) pin();
    };
    const onPlay: CallbackListener<"play"> = () => {
      ended = false;
      // Jika ditekan play saat tertahan di akhir, putar ulang dari awal.
      if (player.getCurrentFrame() >= lastFrame) player.seekTo(0);
    };
    player.addEventListener("ended", onEnded);
    player.addEventListener("frameupdate", onFrame);
    player.addEventListener("play", onPlay);
    return () => {
      player.removeEventListener("ended", onEnded);
      player.removeEventListener("frameupdate", onFrame);
      player.removeEventListener("play", onPlay);
    };
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
