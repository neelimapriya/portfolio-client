'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { sidebarItems } from '@/navigation/sidebar/sidebar-items';

const findTitle = (pathname: string) => {
  // Remove trailing slash if exists
  const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  for (const group of sidebarItems) {
    for (const item of group.items) {
      // Check main items
      if (item.url === path) {
        return item.title;
      }
      // Check sub items
      if (item.subItems) {
        const subItem = item.subItems.find(sub => sub.url === path);
        if (subItem) {
          return subItem.title;
        }
      }
    }
  }
  
  // Default title based on the last segment of the path
  const segments = path.split('/').filter(Boolean);
  return segments.length > 0 
    ? segments[segments.length - 1].split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    : 'Dashboard';
};

export const Breadcrumb = () => {
  const pathname = usePathname();
  const title = findTitle(pathname);

  return <h1 className="text-base font-medium">{title}</h1>;
};
