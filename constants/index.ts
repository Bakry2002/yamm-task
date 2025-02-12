import { NavItem } from '@/types';

export const navItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/',
        icon: 'dashboard',
        isActive: false,
        items: [], // Empty array as there are no child items for Dashboard
    },
    {
        title: 'Refund Orders',
        url: '/refund_orders',
        icon: 'ArrowLeftRight',
        isActive: false,
        items: [], // No child items
    },
];
