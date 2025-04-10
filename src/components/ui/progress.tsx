
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
  showValue?: boolean;
  valuePosition?: "inside" | "right";
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indicatorClassName, showValue = false, valuePosition = "right", ...props }, ref) => (
  <div className="relative w-full">
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-primary transition-all",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      >
        {showValue && valuePosition === "inside" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-white">{value}%</span>
          </div>
        )}
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
    {showValue && valuePosition === "right" && (
      <span className="absolute right-0 top-0 -translate-y-1/4 translate-x-full text-xs font-medium pl-1">
        {value}%
      </span>
    )}
  </div>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
