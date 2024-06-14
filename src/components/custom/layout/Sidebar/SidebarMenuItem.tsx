import { SidebarItemProps } from '@/@types'
import { buttonVariants } from '@/components/ui/Button/button'
import { useAppSelector } from '@/hooks'
import { cn } from '@/lib/utils'
import { selectIsSidebarExpanded } from '@/redux/features/app/appSlice'
import { Link } from 'react-router-dom'

const SidebarMenuItem = ({ child }: { child: SidebarItemProps }) => {
    const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);
    return (
        <Link
            to={child.link || "/"}
            className={cn(
                buttonVariants({
                    size: "sm",

                    variant: "ghost",
                }),
                "justify-start",
                "no-underline ",
                "hover:no-underline",
                "active::no-underline",
                "flex",
                "gap-2",
                " rounded-none p-4",
                "hover:text-white hover:bg-blue-600"
            )}>
            <div className="text-xl ">
                {child.icon && child.icon}
            </div>
            {isSidebarExpanded && child.label}
        </Link>
    )
}

export default SidebarMenuItem