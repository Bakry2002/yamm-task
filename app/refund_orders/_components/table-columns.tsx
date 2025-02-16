'use client';

import { buttonVariants } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
        size: 30,
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        size: 60,
        accessorKey: 'id',
        header: 'ID',
        cell: ({ row }) => {
            const id = row.getValue('id') as string;
            return (
                <TooltipProvider delayDuration={500}>
                    <Tooltip>
                        <TooltipTrigger>
                            {truncateString(id, 15)}
                        </TooltipTrigger>
                        <TooltipContent>{id}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
    {
        size: 160,
        accessorKey: 'reason',
        header: 'Reason',
        cell: ({ row }) => {
            const reason = row.getValue('reason') as string;
            return <span>{reason}</span>;
        },
    },
    {
        size: 160,
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
        size: 60,
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
        size: 100,
        accessorKey: 'items',
        header: '# of items',
        cell: ({ row }) => {
            const itemsCount = row.original.items.length;
            return (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-sm font-medium">
                    {itemsCount}
                </div>
            );
        },
    },
    {
        size: 100,
        accessorKey: 'decicion',
        header: 'Decision',
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
        size: 60,
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
        size: 30,
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
