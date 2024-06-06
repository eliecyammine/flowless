import Header from '@/components/shared/header';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface LandingLayoutProps {
  children: React.ReactNode;
}

/// ---------- || LANDING LAYOUT || ---------- ///

export default function LandingLayout({ children }: Readonly<LandingLayoutProps>) {
  return (
    <div className="relative overflow-hidden">
      <Header />

      <main className="flex min-h-dvh">{children}</main>
    </div>
  );
}
