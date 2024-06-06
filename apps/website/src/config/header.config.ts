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
    title: 'Resources',

    path: '/resources',

    disabled: false,
  },

  {
    title: 'Blog',

    path: '/blog',

    disabled: true,
  },
];
