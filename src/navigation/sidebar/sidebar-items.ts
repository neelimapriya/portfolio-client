import { AppWindowIcon, CpuIcon, FileTextIcon, Home, type LucideIcon } from 'lucide-react';

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: Home,
      },
      {
        title: 'Projects',
        url: '/dashboard/projects',
        icon: AppWindowIcon,
      },
      {
        title: 'Blogs',
        url: '/dashboard/blogs',
        icon: FileTextIcon,
      },
      {
        title: 'Technology',
        url: '/dashboard/technology',
        icon: CpuIcon,
      },
    ],
  },
];
