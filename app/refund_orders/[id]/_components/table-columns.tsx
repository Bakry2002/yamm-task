import { ItemType } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { formatDate } from 'date-fns';

export const columns: ColumnDef<ItemType>[] = [
    {
        size: 30,
        accessorKey: 'name',
        header: 'Item Name',
        cell: ({ row }) => (
            <div className="font-medium">{row.getValue('name')}</div>
        ),
    },
    {
        size: 60,
        accessorKey: 'quantity',
        header: 'Quantity',
        cell: ({ row }) => (
            <div className="text-center">{row.getValue('quantity')}</div>
        ),
    },
    {
        size: 60,
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => (
            <div className="text-right">
                ${Number(row.getValue('price')).toFixed(2)}
            </div>
        ),
    },
    {
        size: 200,
        accessorKey: 'created_at',
        header: 'Date',
        cell: ({ row }) => (
            <div className="text-right">
                {formatDate(
                    new Date(row.getValue('created_at')),
                    'MMM dd, yyyy',
                )}
            </div>
        ),
    },
];
