'use client';
import { DataTable as OrderItemsTable } from '@/components/table/data-table';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
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
    const { data, isLoading } = useQuery({
        queryKey: ['refund_orders', orderId],
        queryFn: () => getRefundOrder(orderId),
    });

    return isLoading ? (
        <div className="flex w-full flex-col space-y-2">
            <Card className="px-0 pt-4">
                <CardContent className="flex flex-col space-y-4">
                    <Skeleton className="h-10 w-[150px] lg:w-full" />
                    <Skeleton className="h-10 w-[150px] lg:w-full" />
                </CardContent>
            </Card>
            <Skeleton className="h-8 w-[150px] items-center justify-center self-center lg:w-[calc(100%-40px)]" />
        </div>
    ) : (
        <OrderItemsTable
            columns={columns}
            data={data?.items ?? []}
            className="relative w-full"
            headerClassName="bg-background"
        />
    );
}
