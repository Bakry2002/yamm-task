'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { RefundOrders } from '@prisma/client';
import { ClipboardList, Edit, MoreHorizontal, ViewIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface TableRowActionsProps {
    data: RefundOrders;
}

export const TableRowActions: React.FC<TableRowActionsProps> = ({ data }) => {
    // const [loading, setLoading] = useState(false);
    // const [open, setOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const router = useRouter();
    // const deleteOrder = useMutation(api.repair_orders.deleteRepairOrder);

    // const onConfirm = async () => {
    //     try {
    //         setLoading(true);
    //         await deleteOrder({ orderId: data._id });
    //         toast.success(t('Order deleted successfully'));
    //     } catch (error) {
    //         console.error(error);
    //         toast.error(t('Something went wrong while deleting the order'));
    //     } finally {
    //         router.refresh();
    //         setLoading(false);
    //         setOpen(false);
    //     }
    // };

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}

                    <DropdownMenuItem onClick={() => setViewOpen(true)}>
                        <ViewIcon className="h-4 w-4" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() =>
                            router.push(`/dashboard/repair_orders/${data.id}`)
                        }
                    >
                        <Edit className="h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem onClick={() => setOpen(true)}>
                        <Trash className="h-4 w-4" />
                        Delete
                    </DropdownMenuItem> */}
                </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={viewOpen} onOpenChange={setViewOpen}>
                <SheetContent className="w-full max-w-full p-0 sm:max-w-[40rem]">
                    <SheetHeader className="space-y-1 border-b px-4 py-3 rtl:text-right">
                        <SheetTitle className="flex items-center gap-x-2 text-2xl rtl:text-right">
                            <Badge
                                variant="secondary"
                                className="rounded-lg bg-slate-200 px-1.5 py-0.5 hover:bg-slate-200"
                            >
                                <ClipboardList
                                    className="size-6 text-muted-foreground"
                                    strokeWidth={1.5}
                                />
                            </Badge>
                            Order Details
                        </SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
};
