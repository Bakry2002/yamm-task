import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
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
    DownloadIcon,
    HomeIcon,
    PackageCheckIcon,
    PackageSearchIcon,
    TruckIcon,
    UserIcon,
    WalletCardsIcon,
} from 'lucide-react';
import { OrderDetailHeading } from './_components/order-detail-heading';
import OrderItemListing from './_components/order-item-list';
import { ProgressCard } from './_components/progress-card';
type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata(props: PageProps) {
    return {
        title: `Order Detail - ${(await props.params).id}`,
    };
}

export default async function Page(props: PageProps) {
    const params = await props.params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['refund_orders', params.id],
        queryFn: () => getRefundOrder(params.id),
    });
    dehydrate(queryClient);

    return (
        <PageContainer scrollable={false} className="bg-accent">
            <div className="flex flex-1 flex-col space-y-6">
                <div className="flex flex-col gap-y-4">
                    <OrderDetailHeading orderId={params.id} />
                    <Separator />
                </div>

                <div className="relative grid grid-cols-6 gap-6">
                    <div className="col-span-4 flex flex-col gap-y-6">
                        {/* Progress tracking */}
                        <Card className="p-0">
                            <CardHeader className="p-4">
                                <CardTitle>Progress</CardTitle>
                                <CardDescription>
                                    Current order status
                                </CardDescription>
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

                        <OrderItemListing orderId={params.id} />
                    </div>

                    {/* Static data */}
                    <div className="col-span-2 flex flex-col gap-y-3">
                        <Card className="p-0">
                            <CardHeader className="flex w-full flex-row items-center justify-between px-4 py-2">
                                <div className="flex flex-col">
                                    <CardTitle className="text-lg">
                                        Payment
                                    </CardTitle>
                                    <CardDescription>
                                        Final payment amount
                                    </CardDescription>
                                </div>
                                <Button
                                    size={'sm'}
                                    variant="outline"
                                    className="flex h-9 items-center"
                                >
                                    <DownloadIcon className="h-3 w-3" />
                                    Download Invoice
                                </Button>
                            </CardHeader>

                            <CardContent className="rounded-b-lg px-2 py-0 pb-2">
                                <div className="flex flex-col gap-y-1 rounded-lg bg-accent p-3">
                                    <div className="flex w-full items-center justify-between">
                                        <p className="text-sm text-muted-foreground">
                                            Subtotal
                                        </p>
                                        <p className="text-sm font-medium">
                                            300 <small>SAR</small>
                                        </p>
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                        <p className="text-sm text-muted-foreground">
                                            Discount (10%)
                                        </p>
                                        <p className="text-sm font-medium">
                                            - 30 <small>SAR</small>
                                        </p>
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                        <p className="text-sm text-muted-foreground">
                                            Shipping Cost
                                        </p>
                                        <p className="text-sm font-medium">
                                            50 <small>SAR</small>
                                        </p>
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                        <p className="text-sm text-muted-foreground">
                                            Tax (5%)
                                        </p>
                                        <p className="text-sm font-medium">
                                            15 <small>SAR</small>
                                        </p>
                                    </div>

                                    <Separator />

                                    <div className="flex w-full items-center justify-between">
                                        <p className="text-sm text-muted-foreground">
                                            Total
                                        </p>
                                        <p className="text-sm font-medium">
                                            305 <small>SAR</small>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Customer info */}
                        <Card className="p-0">
                            <CardHeader className="flex w-full flex-row items-center justify-between px-4 py-2">
                                <div className="flex flex-col">
                                    <CardTitle className="text-lg">
                                        Customer
                                    </CardTitle>
                                    <CardDescription>
                                        Information details
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent className="rounded-b-lg px-2 py-0 pb-2">
                                <div className="flex flex-col gap-y-2 rounded-lg bg-accent p-3">
                                    <Card className="p-0">
                                        <CardHeader className="px-4 py-2">
                                            <CardTitle className="flex flex-row items-center gap-1 text-sm">
                                                <UserIcon className="size-4" />
                                                General Information
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col gap-y-1 px-6 pb-2 pt-0">
                                            <li className="text-sm text-muted-foreground">
                                                Abdullah Bakry
                                            </li>
                                            <li className="text-sm text-muted-foreground">
                                                abdaullah62@gmail.com
                                            </li>
                                            <li className="text-sm text-muted-foreground">
                                                +20 1140338614
                                            </li>
                                        </CardContent>
                                    </Card>
                                    <Card className="p-0">
                                        <CardHeader className="px-4 py-2">
                                            <CardTitle className="flex flex-row items-center gap-1 text-sm">
                                                <HomeIcon className="size-4" />
                                                Shipping Address
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col gap-y-1 px-6 pb-2 pt-0">
                                            <li className="text-sm text-muted-foreground">
                                                123 Main Street
                                            </li>
                                            <li className="text-sm text-muted-foreground">
                                                Cairo, Egypt
                                            </li>
                                            <li className="text-sm text-muted-foreground">
                                                Postal Code: 12512
                                            </li>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
