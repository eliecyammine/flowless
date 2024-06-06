import Link from 'next/link';

import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';

import { buttonVariants } from '@flowless/ui/button';
import { cn } from '@flowless/ui/cn';

import { ThemeToggle } from '../../others/theme-toggle';
import { LogoWithText } from '../logo';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

/// ---------- || HEADER || ---------- ///

export default function Header() {
  return (
    <header className="relative z-50">
      <div className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed inset-x-0 top-5 mx-4 max-w-[620px] rounded-full border px-2 py-2 backdrop-blur sm:mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:ml-0.5 sm:space-x-0">
            <MobileNav />

            <Link href="/" aria-label="Flowless Home">
              <LogoWithText />
            </Link>
          </div>

          <DesktopNav />

          <div className="flex items-center space-x-1">
            {/* X (Twitter) Link */}
            <Link
              href="https://x.com/flowless_labs"
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'icon',
                }),
                'xs:flex hidden rounded-full',
              )}
              aria-label="X (Formally Twitter)"
            >
              <IconBrandX className="size-5" />
            </Link>

            {/* GitHub Link */}
            <Link
              href="https://github.com/eliecyammine/flowless"
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'icon',
                }),
                'xs:flex hidden rounded-full',
              )}
              aria-label="GitHub"
            >
              <IconBrandGithub className="size-5" />
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
