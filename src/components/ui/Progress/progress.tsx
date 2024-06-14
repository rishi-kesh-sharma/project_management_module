import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
  
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-[1.125rem]  w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}>
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary/70 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
    <p className=" absolute top-[50%]  left-[20%] translate-x-[-20%] text-sm translate-y-[-50%] text-foreground z-50">
      {value}
    </p>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
