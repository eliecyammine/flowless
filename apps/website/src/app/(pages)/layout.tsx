/// ---------- || TYPES & INTERFACES || ---------- ///
import Header from '@/components/shared/header';

interface LandingLayoutProps {
  children: React.ReactNode;
}

/// ---------- || LANDING LAYOUT || ---------- ///

export default function LandingLayout({ children }: Readonly<LandingLayoutProps>) {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <Header />

      <main className="flex-1">{children}</main>
    </div>
  );
}
