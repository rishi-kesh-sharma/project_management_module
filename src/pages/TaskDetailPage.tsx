import TaskDetail from "@/components/page/Tasks/TaskDetail";

interface Props {}

const TaskDetailPage = (props: Props) => {
  console.log(props);
  return (
    <div>
      <TaskDetail />
    </div>
  );
};
export default TaskDetailPage;
