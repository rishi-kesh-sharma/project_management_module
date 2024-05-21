import { useGetProjectsQuery } from "@/api/project";
import BookmarkTable from "./Table";

const bookmarkDetailTabTriggers = [
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
    label: "Time Tracking",
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
import BudgetDetail from "@/components/custom/BudgetTable/BudgetDetail";
import Tabs from "@/components/custom/common/Tabs/Tabs";
import EquipmentsDetail from "@/components/custom/EquipmentsTable/EquipmentDetail";
import HumanResourceDetail from "@/components/custom/HumanResourceTable/HumanResourceDetail";
import InventoriesDetail from "@/components/custom/InventoriesTable/InventoriesDetail";
import { KanbanBoard } from "@/components/custom/Kanban/KanbanBoard";
import TabWithButtonedTrigger from "@/components/custom/common/TabsWithButtonedTrigger/TabsWithButtonedTrigger";
import Spinner from "@/components/custom/common/Spinner/Spinner";
const BookmarkDetail = () => {
  const { data: projectsData, isLoading } = useGetProjectsQuery();
  const data = projectsData?.[0];
  console.log(data, "project data");
  if (isLoading || !data) return <Spinner/>
  return (
    <div className="my-[2rem]">
      <Tabs
        triggers={bookmarkDetailTabTriggers}
        contents={[
          {
            id: "tasks",
            element: <BookmarkTable tasks={data.tasks} />,
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
                    element: <div>Gantt Chart</div>,
                  },
                  {
                    id: "kanban-board",
                    element: (
                      <div>
                        <h1 className="text-xl font-semibold mb-[1.5rem]">
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
              <TabWithButtonedTrigger
                className={`mt-[1rem]`}
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
            ),
          },
          {
            id: "time-tracking",
            element: <div>Time Tracking tab</div>,
          },
        ]}
      />
    </div>
  );
};

export default BookmarkDetail;
