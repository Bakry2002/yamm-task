'use client';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { navItems } from '@/constants';
import { ChevronRight, GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Icons } from '../icons';

export const company = {
    name: 'Acme Inc',
    logo: GalleryVerticalEnd,
    plan: 'Enterprise',
};

export default function AppSidebar({}) {
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Sidebar collapsible="icon" className="rtl:right-0">
            <SidebarHeader>
                <div className="flex gap-2 py-2 text-sidebar-accent-foreground">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <company.logo className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight rtl:text-right">
                        <span className="truncate font-semibold">
                            {company.name}
                        </span>
                        <span className="truncate text-xs">{company.plan}</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent className="overflow-x-hidden">
                <SidebarGroup>
                    {/* <SidebarGroupLabel>General</SidebarGroupLabel> */}
                    <SidebarMenu>
                        {navItems.map((item) => {
                            const Icon = item.icon
                                ? Icons[item.icon]
                                : Icons.logo;
                            return item?.items && item?.items?.length > 0 ? (
                                <Collapsible
                                    key={item.title}
                                    asChild
                                    defaultOpen={item.isActive}
                                    className="group/collapsible"
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                tooltip={item.title}
                                                isActive={pathname === item.url}
                                            >
                                                {item.icon && <Icon />}
                                                <span>{item.title}</span>
                                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem
                                                        key={subItem.title}
                                                    >
                                                        <SidebarMenuSubButton
                                                            asChild
                                                            isActive={
                                                                pathname ===
                                                                subItem.url
                                                            }
                                                        >
                                                            <Link
                                                                href={
                                                                    subItem.url
                                                                }
                                                            >
                                                                <span>
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ) : (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.title}
                                        isActive={pathname === item.url}
                                    >
                                        <Link href={item.url}>
                                            <Icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
