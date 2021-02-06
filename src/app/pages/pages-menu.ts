import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/forms/home',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'System',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Virtual machines',
        link: '/pages/forms/virtualMachine',
      },
      {
        title: 'Create new',
        link: '/pages/forms/virtualMachine/new'
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/pages/forms/login',
      },
      {
        title: 'Register',
        link: '/pages/forms/register',
      },
    ],
  },
];
