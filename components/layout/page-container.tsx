'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import React from 'react';

export default function PageContainer({
    children,
    scrollable = true,
    className,
}: {
    children: React.ReactNode;
    scrollable?: boolean;
    className?: string;
}) {
    return (
        <>
            {scrollable ? (
                <ScrollArea>
                    <div
                        className={cn(
                            'className="[family-name:var(--font-geist-sans)]" flex flex-1 p-4 md:px-6',
                            className,
                        )}
                    >
                        {children}
                    </div>
                </ScrollArea>
            ) : (
                <div
                    className={cn(
                        'className="[family-name:var(--font-geist-sans)]" flex flex-1 p-4 md:px-6',
                        className,
                    )}
                >
                    {children}
                </div>
            )}
        </>
    );
}
