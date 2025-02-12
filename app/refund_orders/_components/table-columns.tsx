'use client';

import { buttonVariants } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn, truncateString } from '@/lib/utils';
import { Item, RefundOrders } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { OrderActiveSwitcher } from './order-active-switcher';
import { OrderDecisionSwitcher } from './order-decision-switcher';

export const columns: ColumnDef<
    RefundOrders & {
        items: Item[];
    }
>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        cell: ({ row }) => {
            const id = row.getValue('id') as string;
            return (
                <TooltipProvider delayDuration={500}>
                    <Tooltip>
                        <TooltipTrigger className="pl-2">
                            {truncateString(id, 10)}
                        </TooltipTrigger>
                        <TooltipContent>{id}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
    {
        accessorKey: 'reason',
        header: 'Reasoon',
        cell: ({ row }) => {
            const reason = row.getValue('reason') as string;
            return (
                <TooltipProvider delayDuration={500}>
                    <Tooltip>
                        <TooltipTrigger className="pl-2">
                            {truncateString(reason, 50)}
                        </TooltipTrigger>
                        <TooltipContent>{reason}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
    {
        accessorKey: 'store_name',
        header: 'Store',
        cell: ({ row }) => {
            const store_name = row.getValue('store_name') as string;
            const store_logo = row.original.store_logo;
            const store_url = row.original.store_url;
            return (
                <div className="flex items-center gap-2">
                    <Image
                        src={store_logo}
                        alt="Store logo"
                        width={20}
                        height={20}
                    />
                    <Link
                        href={store_url}
                        target="_blank"
                        className="transition-colors hover:text-blue-600 hover:underline"
                    >
                        {store_name}
                    </Link>
                </div>
            );
        },
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ row }) => {
            const amount = row.getValue('amount') as string;
            return (
                <span>
                    {amount} <small>SAR</small>
                </span>
            );
        },
    },
    {
        accessorKey: 'items',
        header: 'Items Count',
        cell: ({ row }) => {
            const itemsCount = row.original.items.length;
            return (
                <span>
                    {itemsCount} {itemsCount === 1 ? 'Item' : 'Items'}
                </span>
            );
        },
    },
    {
        size: 60,
        accessorKey: 'decicion',
        header: 'Decicion',
        cell: ({ row }) => {
            return (
                <OrderDecisionSwitcher
                    orderId={row.original.id}
                    currentDecision={row.original.decicion}
                />
            );
        },
    },
    {
        accessorKey: 'active',
        header: 'Active',
        cell: ({ row }) => {
            return (
                <OrderActiveSwitcher
                    orderId={row.original.id}
                    currentValue={row.original.active}
                />
            );
        },
    },

    {
        size: 60,
        id: 'actions',
        cell: ({ row }) => {
            return (
                <TooltipProvider delayDuration={500}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={`/refund_orders/${row.original.id}`}
                                className={cn(
                                    buttonVariants({
                                        variant: 'outline',
                                        size: 'icon',
                                    }),
                                    'h-8 w-8',
                                )}
                            >
                                <ExternalLink className="h-5 w-5" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>Open</span>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
];
