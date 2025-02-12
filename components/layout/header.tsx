import { SidebarTrigger } from '../ui/sidebar';

export default async function Header() {
    return (
        <header className="flex h-12 shrink-0 items-center justify-between gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="ltr:-ml-1 rtl:-mr-1" />
            </div>
        </header>
    );
}
