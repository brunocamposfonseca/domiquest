import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md bg-[#f0ffe3] px-3 py-2 text-base file:border-0 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-1 focus-visible:ring-[#5FC20E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
