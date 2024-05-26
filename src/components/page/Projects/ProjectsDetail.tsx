import ProjectDetailTable from "./Table";

const projectDetailTabTriggers = [
  {
    id: "tasks",
    label: "Tasks",
  },
  {
    id: "planning",
    label: "Planning",
  },
  {
    id: "resources",
    label: "Resource",
  },
  {
    id: "time-tracking",
    label: "Time Tracking Analysis",
  },
];

const planningTabTriggers = [
  {
    id: "kanban-board",
    label: "Kanban",
  },
  {
    id: "gantt-chart",
    label: "Gantt chart",
  },
];

const resourceTabTriggers = [
  {
    id: "inventories",
    label: "Inventories",
  },
  {
    id: "human-resources",
    label: "Human Resources",
  },
  {
    id: "equipments",
    label: "Equipments",
  },
  {
    id: "budgeting",
    label: "Budgeting",
  },
];
import { useGetWorkspaceQuery } from "@/api/workspace";
import BudgetDetail from "@/components/custom/BudgetTable/BudgetDetail";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import Tabs from "@/components/custom/common/Tabs/TabsWithBottomBorder/Tabs";
import TabWithButtonedTrigger from "@/components/custom/common/Tabs/TabsWithButtonedTrigger/TabsWithButtonedTrigger";
import EquipmentsDetail from "@/components/custom/EquipmentsTable/EquipmentDetail";
import HumanResourceDetail from "@/components/custom/HumanResourceTable/HumanResourceDetail";
import InventoriesDetail from "@/components/custom/InventoriesTable/InventoriesDetail";
import { KanbanBoard } from "@/components/custom/common/Kanban/KanbanBoard";
import { useParams } from "react-router";
import GanttChart from "@/components/custom/common/charts/GanttChart/GanttChart";
import { Helmet } from "react-helmet";
import { useTheme } from "@/components/Providers/Theme/ThemeProvider";
const ProjectDetail = () => {
  const { workspaceId } = useParams();
  const { theme } = useTheme();
  const { data, isLoading } = useGetWorkspaceQuery(workspaceId);
  if (!workspaceId) return "loading";
  if (isLoading || !data) return <Spinner />;
  return (
    <div className="mt-[1rem]">
      <Helmet>
        {theme === "dark" ? (
          <link
            href="https://cdn.syncfusion.com/ej2/material-dark.css"
            rel="stylesheet"
          />
        ) : (
          <link
            href="https://cdn.syncfusion.com/ej2/25.2.3/material.css"
            rel="stylesheet"
          />
        )}
      </Helmet>
      <Tabs
        triggers={projectDetailTabTriggers}
        contents={[
          {
            id: "tasks",
            element: <ProjectDetailTable project={data.projects} />,
          },
          {
            id: "planning",
            element: (
              <TabWithButtonedTrigger
                className={`mt-[1rem]`}
                triggers={planningTabTriggers}
                contents={[
                  {
                    id: "gantt-chart",
                    element: (
                      <div>
                        <h1 className="text-xl font-semibold my-[1.5rem]">
                          {" "}
                          Gantt Chart
                        </h1>
                        <GanttChart />
                      </div>
                    ),
                  },
                  {
                    id: "kanban-board",
                    element: (
                      <div>
                        <h1 className="text-xl font-semibold my-[1.5rem]">
                          Kanban Board
                        </h1>

                        <KanbanBoard />
                      </div>
                    ),
                  },
                ]}
              />
            ),
          },
          {
            id: "resources",
            element: (
              <div className="">
                <TabWithButtonedTrigger
                  className={`mb-0 mt-[0rem]`}
                  triggers={resourceTabTriggers}
                  contents={[
                    {
                      id: "inventories",
                      element: (
                        <div>
                          <InventoriesDetail />
                        </div>
                      ),
                    },
                    {
                      id: "human-resources",
                      element: (
                        <div>
                          <HumanResourceDetail />
                        </div>
                      ),
                    },
                    {
                      id: "equipments",
                      element: (
                        <div>
                          <EquipmentsDetail />
                        </div>
                      ),
                    },

                    {
                      id: "budgeting",
                      element: (
                        <div>
                          <BudgetDetail />
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            ),
          },
          {
            id: "time-tracking",
            element: <div>Time Tracking Analysis</div>,
          },
        ]}
      />
    </div>
  );
};

export default ProjectDetail;
