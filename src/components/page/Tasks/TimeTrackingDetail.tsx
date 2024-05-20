import React from "react";
import TimeTrackingTable from "./TimeTrackingTable";
import { ITask } from "@/@types";

interface ITimeTrackingDetailProps {
  task: ITask;
}
const TimeTrackingDetail: React.FC<ITimeTrackingDetailProps> = ({ task }) => {
  return (
    <div>
      <TimeTrackingTable timeTrackings={task.timeTrackings} />
    </div>
  );
};

export default TimeTrackingDetail;
