import PageContainer from '@/components/layout/page-container';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getRefundOrder } from '@/lib/services/queries';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
    ContactIcon,
    PackageCheckIcon,
    PackageSearchIcon,
    TruckIcon,
    WalletCardsIcon,
} from 'lucide-react';
import { OrderDetailHeading } from './_components/order-detail-heading';
import OrderItemListing from './_components/order-item-list';
import { ProgressCard } from './_components/progress-card';
type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata(props: PageProps) {
    return {
        title: `Order Detail - ${await props.params}`,
    };
}

export default async function Page(props: PageProps) {
    const params = await props.params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['refund_orders', params.id],
        queryFn: () => getRefundOrder(params.id),
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <PageContainer scrollable={false}>
            <div className="flex flex-1 flex-col space-y-8">
                <OrderDetailHeading orderId={params.id} />
                <Separator />

                {/* Progress tracking */}
                <Card className="p-0">
                    <CardHeader className="p-4">
                        <CardTitle>Progress</CardTitle>
                        <CardDescription>Current order status</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <div className="grid grid-cols-1 gap-4 rounded-lg bg-accent p-3 md:grid-cols-3 lg:grid-cols-5">
                            <ProgressCard
                                title="Order Confirming"
                                icon={PackageCheckIcon}
                                value={100}
                                indicatorColor="bg-green-700"
                            />
                            <ProgressCard
                                title="Payment Pending"
                                icon={WalletCardsIcon}
                                value={100}
                                indicatorColor="bg-green-700"
                            />
                            <ProgressCard
                                title="Processing"
                                icon={PackageSearchIcon}
                                value={50}
                                indicatorColor="bg-yellow-500"
                            />
                            <ProgressCard
                                title="Shipping"
                                icon={ContactIcon}
                                value={0}
                            />
                            <ProgressCard
                                title="Delivered"
                                icon={TruckIcon}
                                value={0}
                            />
                        </div>
                    </CardContent>
                </Card>

                <OrderItemListing
                    orderId={params.id}
                    dehydratedState={dehydratedState}
                />
            </div>
        </PageContainer>
    );
}
