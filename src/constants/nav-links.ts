import {
  Compass,
  House,
  MapPinned,
  UserRound,
  type LucideIcon,
} from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

export const navLinks: NavLink[] = [
  {
    label: 'Início',
    href: '/',
    icon: House,
  },
  {
    label: 'Explorar',
    href: '/explorar',
    icon: Compass,
  },
  {
    label: 'Mapa',
    href: '/mapa',
    icon: MapPinned,
  },
  {
    label: 'Minha Conta',
    href: '/conta',
    icon: UserRound,
  },
];
