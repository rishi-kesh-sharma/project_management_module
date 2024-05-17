interface Props {}
import ProjectDetail from "@/components/page/Projects/ProjectsDetail";

const ProjectDetailPage = (props: Props) => {
  console.log(props);
  return (
    <div>
      <ProjectDetail />
    </div>
  );
};
export default ProjectDetailPage;
