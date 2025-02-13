'use client';
import { DataTable as OrderItemsTable } from '@/components/table/data-table';
import { DataTableSkeleton } from '@/components/table/data-table-skeleton';
import { getRefundOrder } from '@/lib/services/queries';
import { DehydratedState, useQuery } from '@tanstack/react-query';
import { columns } from './table-columns';
interface OrderItemListingProps {
    orderId: string;
    dehydratedState: DehydratedState;
}
export default function OrderItemListing({
    orderId,
    dehydratedState,
}: OrderItemListingProps) {
    const { data, error, isLoading } = useQuery({
        queryKey: ['refund_orders', orderId],
        queryFn: () => getRefundOrder(orderId),
    });

    return isLoading ? (
        <DataTableSkeleton columnCount={5} rowCount={10} />
    ) : (
        <OrderItemsTable columns={columns} data={data?.items ?? []} />
    );
}
