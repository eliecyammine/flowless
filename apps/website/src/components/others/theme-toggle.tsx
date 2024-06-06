'use client';

import { IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

import { Button } from '@flowless/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@flowless/ui/dropdown-menu';

/// ---------- || THEME TOGGLE || ---------- ///

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <IconSun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          <IconMoon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="mt-2 space-y-1 rounded-2xl">
        <DropdownMenuItem onClick={() => setTheme('light')} className="rounded-xl">
          <div className="flex flex-row items-center">
            <IconSun className="mr-2 size-3.5" />
            Light
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')} className="rounded-xl">
          <div className="flex flex-row items-center">
            <IconMoon className="mr-2 size-3.5" />
            Dark
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')} className="rounded-xl">
          <div className="flex flex-row items-center">
            <IconDeviceLaptop className="mr-2 size-3.5" />
            System
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
