import { Toaster } from '@/components/ui/sonner';
import { Geist } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import ReactQueryProvider from '@/components/providers/react-query-provider';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
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
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
    return (
        <html
            className={cn(geistSans.className, 'antialiased')}
            suppressHydrationWarning
        >
            <body>
                <NextTopLoader showSpinner={false} />
                <Toaster />
                <ReactQueryProvider>
                    <SidebarProvider defaultOpen={defaultOpen}>
                        <AppSidebar />
                        <SidebarInset>
                            <Header />
                            {children}
                        </SidebarInset>
                    </SidebarProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
