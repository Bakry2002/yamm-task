import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useChangeRefundOrderDecision } from '@/lib/services/mutations';
import { cn, formatEnum } from '@/lib/utils';
import { DecicionType } from '@prisma/client';

import {
    CircleArrowUpIcon,
    CircleCheckIcon,
    CircleDashedIcon,
    CircleXIcon,
    Loader,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const OrderDecisionSwitcher = ({
    orderId,
    currentDecision,
}: {
    orderId: string;
    currentDecision: DecicionType;
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const { mutateAsync: changeOrderStatus, isPending } =
        useChangeRefundOrderDecision();

    const onDecisionChange = async (decision: DecicionType) => {
        try {
            setIsLoading(true);
            await changeOrderStatus({ id: orderId, newDecision: decision });
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            router.refresh();
        }
    };

    const getDecisionIcon = (status: DecicionType) => {
        switch (status) {
            case 'PENDING':
                return <CircleDashedIcon className="h-4 w-4" />;
            case 'ACCEPTED':
                return <CircleCheckIcon className="h-4 w-4" />;
            case 'REJECTED':
                return <CircleXIcon className="h-4 w-4" />;
            case 'ESCALATED':
                return <CircleArrowUpIcon className="h-4 w-4" />;
            default:
        }
    };

    const getDecisionColor = (decision: string) => {
        if (!decision)
            return 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-400';
        switch (decision) {
            case 'ACCEPTED':
                return 'bg-green-100 text-green-800 hover:bg-green-200 border border-green-400';
            case 'ESCALATED':
                return 'bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-400';
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border border-yellow-400';
            default:
                return 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-400';
        }
    };
    return (
        <Select value={currentDecision} onValueChange={onDecisionChange}>
            <div className="flex w-full items-center gap-2">
                <SelectTrigger
                    className={cn(
                        'size-7 w-[130px] flex-1 justify-start text-left font-medium focus:ring-0 focus:ring-offset-0',
                        getDecisionColor(currentDecision),
                    )}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex flex-1 items-center gap-2 font-medium capitalize">
                            <Loader className="size-3 animate-spin text-muted-foreground" />
                            <p className="font-medium">Loading...</p>
                        </div>
                    ) : (
                        <div className="flex flex-1 items-center gap-2 font-medium capitalize">
                            {getDecisionIcon(currentDecision)}
                            <SelectValue placeholder={currentDecision} />
                        </div>
                    )}
                </SelectTrigger>
            </div>
            <SelectContent>
                {Object.values(DecicionType).map((decicion) => (
                    <SelectItem
                        key={decicion}
                        value={decicion}
                        className="flex flex-row items-center gap-2 font-medium capitalize"
                    >
                        {decicion === 'PENDING'
                            ? 'Not Yet'
                            : formatEnum(decicion)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
