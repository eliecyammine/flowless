'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { IconBrandGithub, IconBrandX } from '@tabler/icons-react';
import { IconMist } from '@tabler/icons-react';

import { Button, buttonVariants } from '@flowless/ui/button';
import { cn } from '@flowless/ui/cn';
import { Sheet, SheetContent, SheetTrigger } from '@flowless/ui/sheet';

import { headerItems } from '@/config/header.config';

import { LogoWithText } from '../logo';

/// ---------- || MOBILE NAV || ---------- ///

export default function MobileNav() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={(o: boolean) => setIsOpen(o)}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="flex rounded-full sm:hidden">
          <IconMist className="size-5" />

          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="m-4 space-y-5 rounded-3xl py-6">
        <Link href="/" className="z-10" aria-label="Flowless Home">
          <LogoWithText />
        </Link>

        <div className="flex flex-col space-y-2">
          {headerItems.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              onClick={() => {
                void router.push(String(item.path));
                setIsOpen(false);
              }}
              className={cn('text-muted-foreground hover:text-foreground/80 text-base', {
                'pointer-events-none opacity-60': item.disabled,
              })}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-1">
          {/* X (Twitter) Link */}
          <Link
            href="https://x.com/flowless_labs"
            target="_blank"
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'icon',
              }),
              'xs:hidden flex rounded-full',
            )}
            aria-label="X (Formally Twitter)"
          >
            <IconBrandX className="size-5" />
          </Link>

          {/* GitHub Link */}
          <Link
            href="https://github.com/flowless-labs/flowless"
            target="_blank"
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'icon',
              }),
              'xs:hidden flex rounded-full',
            )}
            aria-label="GitHub"
          >
            <IconBrandGithub className="size-5" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
