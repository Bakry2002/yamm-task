'use client';
import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    CornerUpLeft,
    MapPinnedIcon,
    PencilLineIcon,
    Trash2Icon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface OrderDetailHeadingProps {
    orderId: string;
}
export const OrderDetailHeading = ({ orderId }: OrderDetailHeadingProps) => {
    const router = useRouter();
    return (
        <div className="flex w-full items-start justify-between">
            <div className="flex items-center gap-4">
                <TooltipProvider delayDuration={500}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 border"
                                onClick={() => router.back()}
                            >
                                <CornerUpLeft className="h-4 w-4" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Go Back</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold tracking-tight">
                        {`# ${orderId}`}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Orders <span>/</span> Orders Details<span>/</span>{' '}
                        {orderId} - 13 Feb, 2025 AT 12:00 PM
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Button
                    size={'sm'}
                    className="flex h-9 items-center border border-destructive bg-red-100 text-destructive hover:bg-red-200"
                >
                    <Trash2Icon className="h-3 w-3" />
                    Delete Order
                </Button>
                <Button
                    size={'sm'}
                    variant="outline"
                    className="flex h-9 items-center"
                >
                    <MapPinnedIcon className="h-3 w-3" />
                    Track Order
                </Button>
                <Button
                    size={'sm'}
                    className="flex h-9 items-center border-none"
                >
                    <PencilLineIcon className="h-3 w-3" />
                    Edit Order
                </Button>
            </div>
        </div>
    );
};
