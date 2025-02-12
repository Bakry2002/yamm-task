import { Toaster } from '@/components/ui/sonner';
import { Geist } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Yamm Task',
    description: 'Yamm Task is a task that aim to test the developer skills',
    icons: {
        icon: '/favicon.svg',
    },
};

interface Props {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
    return (
        <html
            className={cn(geistSans.className, 'antialiased')}
            suppressHydrationWarning
        >
            <body>
                <NextTopLoader showSpinner={false} />
                <Toaster />
                {children}
            </body>
        </html>
    );
}
