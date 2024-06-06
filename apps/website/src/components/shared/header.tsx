import Link from 'next/link';

import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';

import { buttonVariants } from '@flowless/ui/button';
import { cn } from '@flowless/ui/cn';

import { ThemeToggle } from '../others/theme-toggle';
import DesktopNav from './desktop-nav';
import { LogoWithText } from './logo';
import MobileNav from './mobile-nav';

/// ---------- || HEADER || ---------- ///

export default function Header() {
  return (
    <header className="relative z-50">
      <div className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed inset-x-0 top-5 mx-4 rounded-full border px-2 py-2 backdrop-blur sm:mx-auto sm:max-w-fit">
        <div className="flex items-center justify-between sm:justify-center">
          <div className="flex items-center space-x-2 sm:ml-0.5 sm:space-x-0">
            <MobileNav />

            <LogoWithText />
          </div>

          <DesktopNav />

          <div className="flex items-center space-x-1">
            {/* Twitter Link */}
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
            >
              <IconBrandX className="size-5" />

              <span className="sr-only">{`X (Formally Twitter)`}</span>
            </Link>

            {/* Github Link */}
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
            >
              <IconBrandGithub className="size-5" />

              <span className="sr-only">GitHub</span>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
