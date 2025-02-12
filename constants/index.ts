import { NavItem } from '@/types';
import { DecicionType } from '@prisma/client';

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

export const items = [
    { name: 'Gaming Headset', price: 100, quantity: 1 },
    { name: 'Mousepad', price: 20, quantity: 1 },
    { name: 'Red Dress', price: 75, quantity: 1 },
    { name: 'The Lord of the Rings', price: 15, quantity: 1 },
    { name: 'The Hobbit', price: 10, quantity: 1 },
    { name: 'Milk', price: 5, quantity: 2 },
    { name: 'Bread', price: 3, quantity: 1 },
    { name: 'Laptop', price: 180, quantity: 1 },
    { name: 'Charger', price: 20, quantity: 1 },
    { name: 'Summer Dress', price: 60, quantity: 1 },
    { name: 'Winter Coat', price: 90, quantity: 1 },
    { name: 'Jeans', price: 45, quantity: 1 },
];

export const refundOrders = [
    {
        reason: 'Damaged item received',
        store_name: 'Tech Emporium',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-294_uudf4f.svg',
        store_url: 'https://example.com/tech',
        amount: 150,
        active: true,
        decicion: DecicionType.ACCEPTED,
        items: [items[0], items[1]], // Indices of items from the items array
    },
    {
        reason: 'Incorrect item shipped',
        store_name: 'Fashion Hub',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-294_uudf4f.svg',
        store_url: 'https://example.com/fashion',
        amount: 75,
        active: false,
        decicion: DecicionType.REJECTED,
        items: [items[2]],
    },
    {
        reason: 'Late delivery',
        store_name: 'Bookworm Haven',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-294_uudf4f.svg',
        store_url: 'https://example.com/books',
        amount: 25,
        active: true,
        decicion: DecicionType.ESCALATED,
        items: [items[3], items[4]],
    },
    {
        reason: 'Missing items',
        store_name: 'Grocery Mart',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-294_uudf4f.svg',
        store_url: 'https://example.com/grocery',
        amount: 40,
        active: true,
        decicion: DecicionType.ACCEPTED,
        items: [items[5], items[6]],
    },
    {
        reason: 'Too expensive',
        store_name: 'Grocery Mart',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-294_uudf4f.svg',
        store_url: 'https://example.com/grocery',
        amount: 150,
        active: true,
        decicion: DecicionType.ACCEPTED,
        items: [items[5], items[6]],
    },
    {
        reason: 'Changed my mind',
        store_name: 'Electronics Emporium',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-294_uudf4f.svg',
        store_url: 'https://example.com/electronics',
        amount: 200,
        active: false,
        decicion: DecicionType.REJECTED,
        items: [items[8], items[9]],
    },
    {
        reason: 'Not as expected',
        store_name: 'Electronics Emporium',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-294_uudf4f.svg',
        store_url: 'https://example.com/electronics',
        amount: 75,
        active: true,
        decicion: DecicionType.ESCALATED,
        items: [items[7], items[8]],
    },
    {
        reason: 'Arrived broken',
        store_name: 'Fashion Boutique',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370824/logoipsum-299_tiyzn1.svg',
        store_url: 'https://example.com/fashion',
        amount: 60,
        active: true,
        decicion: DecicionType.ACCEPTED,
        items: [items[9]],
    },
    {
        reason: 'Wrong color',
        store_name: 'Fashion Boutique',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370824/logoipsum-299_tiyzn1.svg',
        store_url: 'https://example.com/fashion',
        amount: 90,
        active: false,
        decicion: DecicionType.REJECTED,
        items: [items[10]],
    },
    {
        reason: 'Too small',
        store_name: 'Fashion Boutique',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-339_g3ps2u.svg',
        store_url: 'https://example.com/fashion',
        amount: 45,
        active: true,
        decicion: DecicionType.ESCALATED,
        items: [items[11]],
    },
    {
        reason: 'Product malfunction',
        store_name: 'Gadget World',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-339_g3ps2u.svg',
        store_url: 'https://example.com/gadgets',
        amount: 250,
        active: true,
        decicion: DecicionType.ESCALATED,
        items: [items[7]], // Laptop
    },
    {
        reason: 'Delivery delay',
        store_name: 'Quick Ship',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-339_g3ps2u.svg',
        store_url: 'https://example.com/quickship',
        amount: 35,
        active: false,
        decicion: DecicionType.REJECTED,
        items: [items[3]], // The Lord of the Rings
    },
    {
        reason: 'Item not as described',
        store_name: 'Home Decor',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370824/logoipsum-338_rjec78.svg',
        store_url: 'https://example.com/homedecor',
        amount: 80,
        active: true,
        decicion: DecicionType.ACCEPTED,
        items: [items[11]], // Jeans
    },
    {
        reason: 'Duplicate order',
        store_name: 'Online Marketplace',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370824/logoipsum-346_bc2ozx.svg',
        store_url: 'https://example.com/onlinemarket',
        amount: 120,
        active: false,
        decicion: DecicionType.REJECTED,
        items: [items[2]], // Red Dress
    },
    {
        reason: 'Wrong item received',
        store_name: 'Sports Central',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370824/logoipsum-327_xnx6zf.svg',
        store_url: 'https://example.com/sportscentral',
        amount: 65,
        active: true,
        decicion: DecicionType.ACCEPTED,
        items: [items[0], items[1]], // Gaming Headset and Mousepad
    },
    {
        reason: 'Unwanted item',
        store_name: 'Music World',
        store_logo:
            'https://res.cloudinary.com/dn1whbvlu/image/upload/v1739370823/logoipsum-340_ndfjeg.svg',
        store_url: 'https://example.com/musicworld',
        amount: 95,
        active: true,
        decicion: DecicionType.ESCALATED,
        items: [items[7]], // Laptop
    },
];
