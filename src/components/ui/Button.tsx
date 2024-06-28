import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/utils";

const ButtonVariants = cva("flex items-center justify-center w-fit h-fit", {
  variants: {
    variant: {
      paper:
        "w-[130px] aspect-square rounded-full transition-transform duration-150 hover:scale-110",
    },
  },
  defaultVariants: {
    variant: "paper",
  },
});

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <button
        className={cn(ButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
