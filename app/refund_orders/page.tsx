import { Heading } from '@/components/heading';
import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
// import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
// import OrderListingPage from '@/features/repairOrders/components/order-listing';
// import OrderTableAction from '@/features/repairOrders/components/order-table/order-table-action';

export const metadata = {
    title: 'Dashboard: Refund Orders',
};

export default async function Page() {
    return (
        <PageContainer scrollable={false}>
            <div className="flex flex-1 flex-col space-y-4">
                <div className="flex items-start justify-between">
                    <Heading
                        title="Refund Orders"
                        description="Manage all refund orders from here"
                    />
                </div>
                <Separator />
                {/* <OrderTableAction />
                <Suspense
                    fallback={
                        <DataTableSkeleton columnCount={5} rowCount={10} />
                    }
                >
                    <OrderListingPage />
                </Suspense> */}
            </div>
        </PageContainer>
    );
}
