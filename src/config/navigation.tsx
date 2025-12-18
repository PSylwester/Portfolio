export interface NavItem {
  label: string;
  link_to: string;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Home', link_to: '/' },
  { label: 'About', link_to: '/about' },
  { label: 'Contact', link_to: '/contact' },
];
