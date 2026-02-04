"use client";

const PALETTE_COLORS = [
  { name: "RED", color: "#ff004d" },
  { name: "ORANGE", color: "#ffa300" },
  { name: "YELLOW", color: "#ffec27" },
  { name: "GREEN", color: "#00e436" },
  { name: "CYAN", color: "#29adff" },
  { name: "BLUE", color: "#1d2b53" },
  { name: "PURPLE", color: "#7e2553" },
  { name: "PINK", color: "#ff77a8" },
];

function Star({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        ...style,
        animation: `star-twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  );
}

function Scanlines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}

function PixelBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-1">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, #fff1e8 4px, transparent 4px) 0 0,
            linear-gradient(to right, #fff1e8 4px, transparent 4px) 0 100%,
            linear-gradient(to left, #fff1e8 4px, transparent 4px) 100% 0,
            linear-gradient(to left, #fff1e8 4px, transparent 4px) 100% 100%,
            linear-gradient(to bottom, #fff1e8 4px, transparent 4px) 0 0,
            linear-gradient(to bottom, #fff1e8 4px, transparent 4px) 100% 0,
            linear-gradient(to top, #fff1e8 4px, transparent 4px) 0 100%,
            linear-gradient(to top, #fff1e8 4px, transparent 4px) 100% 100%
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "20px 20px",
        }}
      />
      {children}
    </div>
  );
}

export default function Home() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #1d1d1d 0%, #000000 70%)",
        animation: "flicker 8s infinite",
      }}
    >
      {stars.map((star) => (
        <Star key={star.id} style={{ left: star.left, top: star.top }} />
      ))}

      <Scanlines />

      <main className="relative z-10 flex flex-col items-center gap-16 px-4">
        <PixelBorder>
          <div className="px-8 py-6">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl tracking-wider text-center"
              style={{
                fontFamily: "var(--font-pixel), monospace",
                animation: "color-shift 4s linear infinite, glow-pulse 2s ease-in-out infinite",
                textShadow: "4px 4px 0 #1d2b53",
              }}
            >
              warnago.com
            </h1>
          </div>
        </PixelBorder>

        <div className="flex flex-col items-center gap-8">
          <p
            className="text-xs sm:text-sm tracking-widest uppercase"
            style={{
              fontFamily: "var(--font-pixel), monospace",
              color: "#c2c3c7",
            }}
          >
            Color Palette
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4">
            {PALETTE_COLORS.map((item, index) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2"
                style={{
                  animation: `bounce-pixel 1s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-white/20"
                  style={{
                    backgroundColor: item.color,
                    color: item.color,
                    animation: `palette-glow 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.15}s`,
                    boxShadow: `
                      4px 4px 0 rgba(0,0,0,0.5),
                      0 0 20px ${item.color}40
                    `,
                  }}
                />
                <span
                  className="text-[8px] sm:text-[10px] tracking-wide"
                  style={{
                    fontFamily: "var(--font-pixel), monospace",
                    color: item.color,
                    textShadow: `0 0 10px ${item.color}`,
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <p
            className="text-sm sm:text-base tracking-wide"
            style={{
              fontFamily: "var(--font-pixel), monospace",
              color: "#ffec27",
              textShadow: "0 0 10px #ffec27, 2px 2px 0 #1d2b53",
            }}
          >
            COMING SOON
          </p>
          <p
            className="text-[10px] sm:text-xs"
            style={{
              fontFamily: "var(--font-pixel), monospace",
              color: "#5f574f",
              animation: "blink 1s step-end infinite",
            }}
          >
            PRESS START TO WAIT
          </p>
        </div>
      </main>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
        style={{ fontFamily: "var(--font-pixel), monospace" }}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2"
            style={{
              backgroundColor: PALETTE_COLORS[i % PALETTE_COLORS.length].color,
              animation: `bounce-pixel 0.6s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
