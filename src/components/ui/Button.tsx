import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/utils";

const ButtonVariants = cva("flex items-center justify-center w-fit h-fit", {
  variants: {
    variant: {
      default: "rounded-full transition-transform duration-150 hover:scale-110",
      defaultNoAnims: "rounded-full hover:cursor-default",
      outline:
        "border-2 border-header-outline rounded-md hover:bg-header-outline transition-colors duration-150",
    },
  },
  defaultVariants: {
    variant: "default",
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
