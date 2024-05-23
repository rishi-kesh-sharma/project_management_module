import { IProject } from "@/@types";
import Tags from "@/components/custom/Tags/Tags";
import { PeopleIcon, TaskIcon } from "@/components/icons/commonIcons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/card";
import { faker } from "@faker-js/faker";
import { Ellipsis } from "lucide-react";
import React from "react";

export interface IWorkspaceCardProps {
  id: string;
  workspaceName: string;
  projects: IProject[];
  description: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;
  no_of_members: number;
  no_of_projects: number;
}

const WorkspaceCard: React.FC<IWorkspaceCardProps> = ({
  id,
  workspaceName,
  projects,
  description,
  tags,
  created_at,
  updated_at,
  no_of_members,
  no_of_project,
}) => {
  return (
    <Card className="relative">
      <div className="absolute left-[-1rem] top-[-2rem] rounded-full bg-primary h-[3.5rem] w-[3.5rem] text-primary-foreground flex gap-1 items-center justify-center">
        <PeopleIcon className="text-xl" />
        <p>{no_of_members}</p>
      </div>
      <div className="absolute right-[0.3rem] top-[1rem] rounded-full bg-primary/5 text-primary h-12 w-12 p-2 flex items-center justify-center">
        <TaskIcon />
        <p>{no_of_project}</p>
      </div>
      <div className=""></div>
      <CardHeader>
        <CardTitle>{workspaceName}</CardTitle>
        <CardDescription className="">
          {description.length > 50 ? (
            <>
              {description.slice(0, 50)}
              &nbsp;
              <Ellipsis className="inline" />
            </>
          ) : (
            description
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex flex-wrap gap-2 items-center">
          {tags.slice(0, 3).map((tag) => {
            const tagVariant = faker.helpers.arrayElement([
              "primary",
              "dark",
              "red",
              "green",
              "yellow",
              "indigo",
              "purple",
              "pink",
            ]);
            return <Tags variant={tagVariant} value={tag} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkspaceCard;
