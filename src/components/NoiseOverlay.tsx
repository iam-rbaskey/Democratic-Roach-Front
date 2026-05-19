"use strict";

export default function NoiseOverlay() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-40 overflow-hidden">
      <div className="absolute inset-[-200%] w-[500%] h-[500%] noise-bg animate-noise" />
    </div>
  );
}
