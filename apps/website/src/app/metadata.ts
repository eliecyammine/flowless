import type { Metadata } from 'next';

import { DESCRIPTION, DOMAIN, TITLE } from '@/lib/constants/site';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: {
    default: `${TITLE} | ${DESCRIPTION}`,
    template: `%s | ${TITLE}`,
  },

  description: DESCRIPTION,

  metadataBase: new URL(DOMAIN),

  authors: [
    {
      name: 'Flowless Labs',
      url: DOMAIN,
    },
  ],

  creator: 'Flowless Labs',

  applicationName: TITLE,

  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-16x16.png',
    apple: '/favicons/apple-touch-icon.png',
  },

  manifest: `/site.webmanifest`,
};
