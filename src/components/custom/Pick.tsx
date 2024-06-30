import { forwardRef, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/utils";

const PickVariants = cva(
  "flex items-center justify-center aspect-square min-w-[130px] xl:w-[200px] rounded-full",
  {
    variants: {
      animation: {
        default: "transition-transform duration-150 hover:scale-110",
        none: "",
      },
    },
    defaultVariants: {
      animation: "default",
    },
  },
);

interface IPickProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof PickVariants> {
  children?: ReactNode;
}

const Pick = forwardRef<HTMLButtonElement, IPickProps>(
  ({ children = "pick", animation, className, ...props }, ref) => {
    return (
      <button
        className={cn(PickVariants({ animation, className }))}
        ref={ref}
        {...props}
      >
        <div className="flex aspect-square w-[75%] items-center justify-center rounded-full bg-white shadow-[inset_0px_6px_#BABFD3] xl:shadow-[inset_0px_8px_#BABFD3]">
          {children}
        </div>
      </button>
    );
  },
);

Pick.displayName = "Pick";
export default Pick;
