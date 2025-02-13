import { ItemType } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { ImageIcon } from 'lucide-react';

export const columns: ColumnDef<ItemType>[] = [
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
