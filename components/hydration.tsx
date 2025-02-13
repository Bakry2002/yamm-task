import { getRefundOrders } from '@/lib/services/queries';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import React from 'react';
export default async function Hydration({
    children,
}: {
    children: React.ReactNode;
}) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: 2 * 2000, // this sets the cache time to 2 seconds
                staleTime: 5 * 60 * 1000, // this sets the cache time to 5 minutes
            },
        },
    });
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['refund_orders'],
            queryFn: () => getRefundOrders(),
        }),
    ]);
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
}
