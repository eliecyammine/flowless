import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '@/components/shared/logo';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface ResourceCardProps {
  url: string;

  imageUrl?: string;

  title: string;
  titleSpan: string;

  description: string;
}

/// ---------- || RESOURCE CARD || ---------- ///

export default function ResourceCard({
  url,
  imageUrl,
  title,
  titleSpan,
  description,
}: ResourceCardProps) {
  return (
    <Link href={url} target="_blank" aria-label={`${title} ${titleSpan}`}>
      <div className="border-border hover:border-primary-foreground group flex h-full flex-col gap-3 rounded-xl border p-2 pb-4">
        <div className="bg-accent/50 flex justify-center rounded-md p-3">
          {imageUrl ? <Image src={imageUrl} alt={title} /> : <Logo width="200" />}
        </div>

        <h3 className="group-hover:text-primary-foreground px-1 text-lg font-medium sm:text-xl md:text-2xl">
          <span>{title}</span> <span className="text-primary-foreground">{titleSpan}</span>
        </h3>

        <p className="text-muted-foreground px-1 text-sm md:text-base">{description}</p>
      </div>
    </Link>
  );
}
