import { Checkbox } from '@/components/ui/checkbox';
import { ItemType } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { ImageIcon } from 'lucide-react';

export const columns: ColumnDef<ItemType>[] = [
    {
        size: 30,
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: 'Item Name',
        cell: ({ row }) => (
            <div className="flex items-center font-medium">
                <ImageIcon className="mr-2 h-6 w-6" strokeWidth={1.5} />
                {row.getValue('name')}
            </div>
        ),
    },
    {
        accessorKey: 'quantity',
        header: 'Quantity',
        cell: ({ row }) => <div>{row.getValue('quantity')}</div>,
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => (
            <div>
                {Number(row.getValue('price')).toFixed(2)} <small>SAR</small>
            </div>
        ),
    },
];
