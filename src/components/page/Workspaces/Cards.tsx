/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import WorkspacesCard from "./WorkspaceCard";

const Cards: React.FC = ({ data }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2.5rem]">
      {data?.map((item: any) => {
        return <WorkspacesCard {...item} />;
      })}
    </div>
  );
};

export default Cards;
