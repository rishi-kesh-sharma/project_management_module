import React, { useState } from "react";
import { FilterIcon } from "../icons/commonIcons";
import { Button } from "@/components/ui/Button/button";
export interface ISpeedDialProps {
  children: React.ReactNode[];
  direction: "up" | "down" | "left" | "right";
  itemWidth?: number;
}

const SpeedDial: React.FC<ISpeedDialProps> = ({
  children,
  direction = "up",
  itemWidth = 40,
}) => {
  const [show, setShow] = useState(false);

  const getPosition = (i: number, itemWidth: number) => {
    if (direction == "up") return { top: `${-(i + 1) * itemWidth}px`, left: 0 };
    if (direction == "down")
      return { top: `${(i + 1) * itemWidth}px`, left: 0 };
    if (direction == "left")
      return { left: `${-(i + 1) * itemWidth}px`, top: 0 };
    if (direction == "right")
      return { left: `${(i + 1) * itemWidth}px`, top: 0 };
  };

  const getTransitionDelay = (i: number) => {
    if (show) return { transitionDelay: `${i * 100}ms` };
    else
      return {
        transitionDelay: children && `${(children.length - i - 1) * 100}ms`,
      };
  };

  return (
    <>
      <div className="inline-block relative w-fit h-fit">
        <Button
          onClick={() => setShow((show) => !show)}
          variant={"outline"}
          size={"icon"}
          className={`rounded-full ${show ? "rotate-90" : ""} transition-all`}>
          <FilterIcon />
        </Button>

        <ul
        //  className={!show ? "pointer-events-none" : ""}
        >
          {children.map((item: React.ReactNode, i: number) => (
            <li
              key={i}
              className={`absolute z-20  ${
                show ? "scale-100" : "scale-0"
              } transition duration-300`}
              style={{
                ...getTransitionDelay(i),
                ...getPosition(i, itemWidth),
              }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SpeedDial;
