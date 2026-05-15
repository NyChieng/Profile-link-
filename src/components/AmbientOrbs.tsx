// Pure CSS ambient orbs — no JS animation, no blur filter.
// transform-only keyframes run entirely on the compositor thread.
export default function AmbientOrbs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden
    >
      {/* Top-left warm glow */}
      <div
        className="orb-1 absolute rounded-full"
        style={{
          top: "4%",
          left: "2%",
          width: 640,
          height: 640,
          background:
            "radial-gradient(circle, rgba(201,149,107,0.07) 0%, transparent 62%)",
        }}
      />
      {/* Mid-right glow */}
      <div
        className="orb-2 absolute rounded-full"
        style={{
          top: "46%",
          right: "0",
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(160,110,60,0.055) 0%, transparent 62%)",
        }}
      />
      {/* Bottom-centre glow */}
      <div
        className="orb-3 absolute rounded-full"
        style={{
          top: "74%",
          left: "28%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(201,149,107,0.042) 0%, transparent 62%)",
        }}
      />
    </div>
  );
}
