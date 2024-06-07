'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@flowless/ui/cn';

import { headerItems } from '@/config/header.config';

/// ---------- || DESKTOP NAV || ---------- ///

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="mx-8 hidden sm:block">
      <div className="flex items-center space-x-4">
        {headerItems.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className={cn('text-muted-foreground hover:text-foreground/80 text-sm', {
              'text-foreground decoration-primary-foreground underline underline-offset-4':
                pathname === item.path,
              'pointer-events-none opacity-60': item.disabled,
            })}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
