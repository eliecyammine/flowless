import Link from 'next/link';

import { Logo } from '@/components/shared/logo';

import { buttonVariants } from '@flowless/ui/button';
import { cn } from '@flowless/ui/cn';

/// ---------- || HERO SECTION || ---------- ///

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="container mx-auto flex max-w-[950px] flex-col items-center space-y-8 py-8 md:py-12 lg:py-24">
        <div className="text-center">
          <div className="flex justify-center">
            <Logo width="100px" />
          </div>
        </div>

        <h2 className="font-logo pb-8 text-center text-3xl sm:text-4xl md:text-5xl">Flowless</h2>

        <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          Unlock Your Potential.
        </h1>

        <p className="text-muted-foreground max-w-[750px] text-center sm:text-lg md:text-xl">
          A flagship product of{' '}
          <Link href="https://x.com/flowless_labs" className="text-emerald-600 hover:underline">
            <span className="text-foreground/85 font-bold">Flowless Labs</span>
          </Link>{' '}
          offering a comprehensive suite of development tools and resources, including the
          open-source{' '}
          <Link href="https://ui.flowless.xyz" className="hover:underline">
            <span className="font-bold text-emerald-600">Flowless UI</span>
          </Link>
          .
        </p>

        <div className="flex w-full items-center justify-center space-x-4 py-4">
          <Link href="/docs" className={cn(buttonVariants(), 'rounded-full')}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
