interface HeaderItems {
  title: string;

  path: string;

  disabled?: boolean;
}

export const headerItems: HeaderItems[] = [
  {
    title: 'Services',

    path: '/services',

    disabled: true,
  },

  {
    title: 'Components',

    path: '/components',

    disabled: false,
  },

  {
    title: 'Starters',

    path: '/starters',

    disabled: true,
  },

  {
    title: 'Docs',

    path: '/docs',

    disabled: true,
  },

  {
    title: 'Blog',

    path: '/blog',

    disabled: true,
  },
];
