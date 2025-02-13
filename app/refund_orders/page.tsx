import { Heading } from '@/components/heading';
import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import { RefundOrderListing } from './_components/refund-order-listing';

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

                <RefundOrderListing />
            </div>
        </PageContainer>
    );
}
