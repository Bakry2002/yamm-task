'use client';

import { DataTable as RefundOrderTable } from '@/components/table/data-table';
import { DataTableSkeleton } from '@/components/table/data-table-skeleton';
import { getRefundOrders } from '@/lib/services/queries';
import { useQuery } from '@tanstack/react-query';
import { columns } from './table-columns';

export const RefundOrderListing = () => {
    const { data: orders, isLoading } = useQuery({
        queryKey: ['refund_orders'],
        queryFn: () => getRefundOrders(),
    });

    console.log({ orders });

    return isLoading ? (
        <DataTableSkeleton columnCount={5} rowCount={10} />
    ) : (
        <RefundOrderTable columns={columns} data={orders?.data ?? []} />
    );
};
