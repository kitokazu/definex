export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
  status: 'active' | 'coming-soon';
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}