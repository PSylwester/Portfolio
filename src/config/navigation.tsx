export interface NavItem {
  label: string;
  link_to: string;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'About', link_to: '/about' },
  { label: 'Projects', link_to: '/projects' },
  { label: 'Contact', link_to: '/contact' },
];
