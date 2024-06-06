/// ---------- || TYPES & INTERFACES || ---------- ///

interface LandingLayoutProps {
  children: React.ReactNode;
}

/// ---------- || LANDING LAYOUT || ---------- ///

export default function LandingLayout({ children }: Readonly<LandingLayoutProps>) {
  return (
    <>
      <div className="relative overflow-hidden">
        <main className="flex min-h-dvh items-center justify-center overflow-hidden">
          {children}
        </main>
      </div>
    </>
  );
}
