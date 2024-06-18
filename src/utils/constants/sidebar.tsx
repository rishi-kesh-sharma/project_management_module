import { IWorkspace, IProject } from "@/api/workspace";
import {
  AnalysticIcon,
  ArchiveIconOutlined,
  BookmarkIconOutlined,
  DotIconFilled,
  OverviewIcon,
  // GoalsIcon,
  // HomeIcon,
  // PlanningIcon,
  // ProgressIcon,
  // TaskIcon,
  // SettingIcon,
  MoneyIconOutlined,
  FolderIconOutlined,
  PeopleIconOutlined,
} from "@/components/custom/common/icons/commonIcons";
import i18n from "@/intl/i18n";

const otherModules = [
  {
    id: "customer-relationship-management",
    label: "CRM",
    icon: <PeopleIconOutlined />,
    items: [
      {
        id: "lead",
        label: "Lead",
      },
      {
        id: "customer",
        label: "Customer ",
      },
      {
        id: "opportunity",
        label: "Opportunity",
      },
      {
        id: "opportunity",
        label: "Opportunity",
      },
    ],
  },
  {
    icon: <MoneyIconOutlined />,
    id: `purchase-management`,
    label: `Purchase`,
    items: [
      {
        id: `orders`,
        label: `Orders`,
      },
      {
        id: `invoices`,
        label: `Invoices`,
      },
      {
        id: `suppliers`,
        label: `Suppliers`,
      },
    ],
  },
];
interface ISidebarItemsProps {
  workspaces: IWorkspace[];
  bookmarks: IProject[];
  archives: IProject[];
}
export const sidebarItems = (injectables: ISidebarItemsProps) => [
  {
    // label: "Dashboard ",
    label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
    link: `/`,
    icon: <OverviewIcon />,
  },
  {
    icon: <FolderIconOutlined />,
    id: `project-management`,
    label: `Project`,
    link: `/project`,
    items: [
      {
        // label: "Dashboard ",
        label: i18n.t("component.sidebar.menu.dashboard", "Dashboard"),
        link: `/`,
        icon: <OverviewIcon />,
      },
      (() => {
        const workspaces = injectables.workspaces;
        const items = workspaces?.slice(0, 3).map((workspace: IWorkspace) => {
          const link = `/workspace/${workspace?.id}`;
          const items = workspace?.projects?.map((project: IProject) => {
            const link = `/project/${project.id}`;
            return {
              link,
              label: project.name,
              icon: <DotIconFilled className="text-[0.6rem]" />,
            };
          });

          return { link, label: workspace.name, items };
        });

        return {
          label: i18n.t("component.sidebar.menu.workspaces", "Workspaces"),
          link: `/workspaces`,
          icon: <AnalysticIcon />,
          items: items && [
            ...items,
            {
              // icon: <DotIconFilled className="text-[0.6rem]" />,
              label: (
                <>
                  <span>View all</span>
                  {/* <Ellipsis /> */}
                </>
              ),
              link: `/workspaces`,
            },
          ],
        };
      })(),

      (() => {
        const bookmarks = injectables?.bookmarks;
        const items = bookmarks?.slice(0, 3)?.map((project: IProject) => {
          const link = `/bookmark/${project.id}`;
          return {
            link,
            label: project.name,
            icon: <DotIconFilled className="text-[0.6rem]" />,
          };
        });

        return {
          label: i18n.t("component.sidebar.menu.bookmarks", "Bookmarks"),
          link: `/bookmarks`,
          icon: <BookmarkIconOutlined />,
          items: items && [
            ...items,
            {
              // icon: <DotIconFilled className="text-[0.6rem]" />,
              label: (
                <>
                  <span>View All</span>
                  {/* <Ellipsis /> */}
                </>
              ),
              link: `/bookmarks`,
            },
          ],
        };
      })(),
      (() => {
        const archives = injectables?.archives;
        const items = archives?.slice(0, 3)?.map((project: IProject) => {
          const link = `/archive/${project.id}`;
          return {
            link,
            label: project.name,
            icon: <DotIconFilled className="text-[0.6rem]" />,
          };
        });

        return {
          label: i18n.t("component.sidebar.menu.archives", "Archives"),
          link: `/archives`,
          icon: <ArchiveIconOutlined />,
          items: items && [
            ...items,
            {
              // icon: <DotIconFilled className="text-[0.6rem]" />,
              label: (
                <>
                  <span>View All</span>
                  {/* <Ellipsis /> */}
                </>
              ),
              link: `/archives`,
            },
          ],
        };
      })(),
    ],
  },
  ...otherModules,
];
