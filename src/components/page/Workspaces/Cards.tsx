/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import WorkspacesCard from "./WorkspaceCard";
import AddCard from "@/components/custom/common/AddCard/AddCard";
import CreateWorkspaceModalForm from "../Analytics/CreateWorkspaceForm";
import { Button } from "@/components/ui/Button/button";
import { PlusIcon } from "@/components/custom/common/icons/commonIcons";

const Cards: React.FC = ({ data }) => {
  const handleAdd = () => {};
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2.5rem]">
      {data?.map((item: any) => {
        if (!item) {
          return (
            <CreateWorkspaceModalForm
              trigger={
                <Button
                  variant={"outline"}
                  type="button"
                  className="flex gap-1 ml-auto w-full h-full"
                  size={"sm"}>
                
                  <AddCard />
                </Button>
              }
            />
          );
        }
        return <WorkspacesCard {...item} />;
      })}
    </div>
  );
};

export default Cards;
