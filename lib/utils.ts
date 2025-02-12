import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const truncateString = (str: string, num: number) => {
    if (!str || typeof str !== 'string') {
        return '';
    }

    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
};

export const getDecisionColor = (decision: string) => {
    if (!decision)
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-400';
    switch (decision) {
        case 'Completed':
            return 'bg-green-100 text-green-800 hover:bg-green-200 border border-green-400';
        case 'In Progress':
            return 'bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-400';
        case 'Pending':
            return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border border-yellow-400';
        default:
            return 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-400';
    }
};

export const formatEnum = (enumValue: string) => {
    return enumValue
        .toLowerCase()
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
};
