import { cn } from "@/lib/utils";      // ✱ any tiny `classnames` helper you use
import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>

/**
 * Re-usable pill-shaped badge.
 *
 * Pass extra Tailwind classes via `className`
 * (e.g. the bg-red-500 text-white coming from your CATEGORY_STYLES map).
 */
export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        // ---------------- base style ----------------
        "inline-flex items-center justify-center",
        "rounded-full px-3 py-[2px]",
        "text-sm font-medium leading-none",
        "transition-colors",

        // ------------- focus / dark mode -------------
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "dark:focus:ring-offset-gray-950",

        className // <-- consumer-supplied colour classes
      )}
      {...props}
    />
  );
}
export default Badge;
