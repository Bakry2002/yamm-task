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
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '../icons';

export const company = {
    name: 'Yamm',
    logo: '/yamm_logo.svg',
    plan: 'Enterprise',
};

export default function AppSidebar({}) {
    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon" className="rtl:right-0">
            <SidebarHeader>
                <div className="flex gap-2 py-2 text-sidebar-accent-foreground">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg border text-sidebar-primary-foreground">
                        <Image
                            src={company.logo}
                            alt="Company Logo"
                            width={30}
                            height={30}
                        />
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
