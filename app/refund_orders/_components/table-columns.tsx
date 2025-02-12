'use client';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { truncateString } from '@/lib/utils';
import { Item, RefundOrders } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import Link from 'next/link';
import { OrderDecisionSwitcher } from './order-decision-switcher';
import { TableRowActions } from './table-row-actions';

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
                        width={28}
                        height={28}
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
        size: 100,
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
    // {
    //     size: 100,
    //     accessorKey: 'licensePlate',
    //     header: () => (
    //         <TranslateText
    //             text="License Plate"
    //             translationKey="Dashboard.repairOrders"
    //         />
    //     ),
    //     cell: ({ row }) => {
    //         const licensePlate = row.original.licensePlate || '';

    //         return <LicensePlate licensePlate={licensePlate} />;
    //     },
    // },
    // {
    //     accessorKey: 'ownerName',
    //     header: () => (
    //         <TranslateText
    //             text="Owner Name"
    //             translationKey="Dashboard.repairOrders"
    //         />
    //     ),
    // },
    // {
    //     accessorKey: 'ownerContact',
    //     header: () => (
    //         <TranslateText
    //             text="Contact"
    //             translationKey="Dashboard.repairOrders"
    //         />
    //     ),
    //     cell: ({ row }) => {
    //         const contact = row.original.ownerContact || '';
    //         return <OwnerContactCell contact={contact} />;
    //     },
    // },
    // {
    //     size: 150,
    //     accessorKey: 'estimatedCompletionDate',
    //     header: () => (
    //         <TranslateText
    //             text="Deadline"
    //             translationKey="Dashboard.repairOrders"
    //         />
    //     ),
    //     cell: ({ row }) => {
    //         const date = row.original.estimatedCompletionDate || '';
    //         const locale = useLocale();
    //         const passedDeadline =
    //             date < new Date().toISOString() &&
    //             (row.original.status === RepairOrderStatus.Pending ||
    //                 row.original.status === RepairOrderStatus.InProgress);
    //         return (
    //             <TooltipProvider>
    //                 <Tooltip>
    //                     <TooltipTrigger
    //                         className={cn(passedDeadline && 'text-red-600')}
    //                     >
    //                         {formatDate(date, 'MMM dd, yyyy')}
    //                     </TooltipTrigger>
    //                     <TooltipContent>
    //                         {formatDateToHumanReadable(date, locale)}
    //                     </TooltipContent>
    //                 </Tooltip>
    //             </TooltipProvider>
    //         );
    //     },
    // },
    // {
    //     size: 100,
    //     accessorKey: 'totalCost',
    //     header: () => (
    //         <TranslateText
    //             text="Total Cost"
    //             translationKey="Dashboard.repairOrders"
    //         />
    //     ),
    // },
    // {
    //     size: 100,
    //     accessorKey: 'status',
    //     header: () => (
    //         <TranslateText
    //             text="Status"
    //             translationKey="Dashboard.repairOrders"
    //         />
    //     ),
    //     cell: ({ row }) => {
    //         return (
    //             <OrderStatusSwitcher
    //                 orderId={row.original._id}
    //                 currentStatus={row.original.status}
    //             />
    //         );
    //     },
    // },

    {
        size: 60,
        id: 'actions',

        cell: ({ row }) => <TableRowActions data={row.original} />,
    },
];
