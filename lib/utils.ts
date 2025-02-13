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

export const formatEnum = (enumValue: string) => {
    return enumValue
        .toLowerCase()
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
};
