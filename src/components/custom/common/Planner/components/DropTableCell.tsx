import { FC, useEffect, useRef, useState } from "react";
import { TableCell } from "@/components/ui/Table/table";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { cn } from "@/lib/utils";

interface DropTableCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  resourceId: string;
  columnIndex: number;
}

const DropTableCell: FC<DropTableCellProps> = ({
  children,
  resourceId,
  columnIndex,

  ...props
}) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const [isOver, setIsOver] = useState(false);
  useEffect(() => {
    const element = ref.current!;

    return dropTargetForElements({
      element,
      getData: () => {
        return { resourceId: resourceId, columnIndex: columnIndex };
      },
      onDragEnter: () => setIsOver(true),
      onDragLeave: () => setIsOver(false),
      onDrop: () => {
        setIsOver(false);
      },
    });
  }, [columnIndex, resourceId]);
  return (
    <TableCell
      className={cn(
        "border bg-background",
        isOver ? "bg-primary-foreground" : "bg-background"
      )}
      ref={ref}
      {...props}
    >
      <div className="grid grid-flow-row grid-cols-2 gap-2">{children}</div>
    </TableCell>
  );
};

export default DropTableCell;
