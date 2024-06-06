'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@flowless/ui/cn';

import { headerItems } from '@/config/header.config';

/// ---------- || DESKTOP NAV || ---------- ///

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="mx-5 hidden sm:block">
      <div className="flex items-center space-x-3">
        {headerItems.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className={cn(
              'text-muted-foreground hover:text-foreground/80 text-sm',
              {
                'text-foreground': pathname === item.path,
              },
              item.disabled && 'pointer-events-none opacity-60',
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
