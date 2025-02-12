import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useChangeRefundOrderDecision } from '@/lib/services/mutations';
import { cn, formatEnum, getDecisionColor } from '@/lib/utils';
import { DecicionType } from '@prisma/client';

import {
    CircleCheckIcon,
    CircleDotDashedIcon,
    CircleXIcon,
    Loader,
    LoaderIcon,
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
                return <LoaderIcon className="h-4 w-4" />;
            case 'ACCEPTED':
                return <CircleCheckIcon className="h-4 w-4" />;
            case 'REJECTED':
                return <CircleXIcon className="h-4 w-4" />;
            case 'ESCALATED':
                return <CircleDotDashedIcon className="h-4 w-4" />;
            default:
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
                        <Loader className="size-3 flex-1 animate-spin text-muted-foreground" />
                    ) : (
                        <div className="flex flex-1 items-center gap-2">
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
                        className="capitalize"
                    >
                        {formatEnum(decicion)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
