import { Icons } from '@/components/icons';
import { DecicionType } from '@prisma/client';

export interface NavItem {
    title: string;
    url: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
    isActive?: boolean;
    items?: NavItem[];
}

export interface ItemType {
    name: string;
    id: string;
    created_at: Date;
    updated_at: Date;
    price: number;
    quantity: number;
    refundOrderId: string;
}

export interface RefundOrdersType {
    id: string;
    reason: string;
    store_name: string;
    store_logo: string;
    store_url: string;
    amount: number;
    active: boolean;
    decicion: DecicionType;
    items: ItemType[];
    created_at: Date;
    updated_at: Date;
}
