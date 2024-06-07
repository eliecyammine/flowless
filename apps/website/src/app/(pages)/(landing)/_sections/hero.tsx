import Link from 'next/link';

import { Logo } from '@/components/shared/logo';
import { IconMail } from '@tabler/icons-react';

import { buttonVariants } from '@flowless/ui/button';
import { cn } from '@flowless/ui/cn';

/// ---------- || HERO LOGO || ---------- ///

function HeroLogo() {
  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
      <div className="block md:hidden">
        <Logo width="70px" />
      </div>

      <div className="hidden md:block">
        <Logo width="100px" />
      </div>

      <h2 className="font-logo text-center text-3xl sm:text-4xl md:text-5xl">Flowless</h2>
    </div>
  );
}

/// ---------- || HERO CONTENT || ---------- ///

function HeroContent() {
  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
      <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        Unlock Your <span className="text-primary-foreground">Potential</span>.
      </h2>

      <p className="text-muted-foreground max-w-[530px] text-center sm:max-w-[600px] sm:text-lg md:max-w-[700px] md:text-xl">
        Delivering top-notch{' '}
        <span className="decoration-primary-foreground underline decoration-from-font underline-offset-2">
          software and website solutions
        </span>{' '}
        tailored to clients&apos; needs, along with essential{' '}
        <span className="decoration-primary-foreground underline decoration-from-font underline-offset-2">
          resources and tools
        </span>{' '}
        for developers.
      </p>
    </div>
  );
}

/// ---------- || HERO CTA || ---------- ///

function HeroCTA() {
  return (
    <div className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4">
      <h3 className="text-center text-lg font-medium sm:text-xl md:text-2xl">
        Let&apos;s have a chat
      </h3>

      <Link
        href="mailto:hello@flowless.xyz"
        className={cn(
          buttonVariants({
            variant: 'primary',
            size: 'lg',
          }),
          'flex flex-row items-center gap-1 rounded-full',
        )}
      >
        <IconMail size={18} />

        <span className="font-semibold">Get in touch</span>
      </Link>
    </div>
  );
}

/// ---------- || HERO SECTION || ---------- ///

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12"
    >
      <HeroLogo />

      <HeroContent />

      <HeroCTA />
    </section>
  );
}
