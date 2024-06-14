import { SidebarItemProps } from "@/@types";

import SidebarCollapsibleMenu from "./SidebarCollapsibleMenu";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMainMenuList = ({ items }: { items: SidebarItemProps[] }) => {
    return (
        <nav className="flex flex-col gap-0 w-full ">
            {items?.map((item: SidebarItemProps) =>
                item.items ? (
                    <SidebarCollapsibleMenu item={item} key={item.link} />
                ) : (
                    item.link && (
                        <SidebarMenuItem child={item} key={item.link} />
                    )
                )
            )}
        </nav>
    )
}

export default SidebarMainMenuList