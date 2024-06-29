import { twMerge } from "tailwind-merge";

import Button from "@/components/ui/Button";

type TPickProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "defaultNoAnims";
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Pick = ({ children, className, variant, id, onClick }: TPickProps) => {
  return (
    <Button
      className={twMerge("aspect-square min-w-[130px]", className)}
      id={id}
      onClick={onClick}
      variant={variant}
    >
      <div className="flex aspect-square w-[75%] items-center justify-center rounded-full bg-white">
        {children}
      </div>
    </Button>
  );
};

export default Pick;
