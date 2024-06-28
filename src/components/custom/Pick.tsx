import { twMerge } from "tailwind-merge";

import Button from "@/components/ui/Button";

type TPickProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Pick = ({ children, className, id, onClick }: TPickProps) => {
  return (
    <Button
      className={twMerge("absolute aspect-square min-w-[130px]", className)}
      id={id}
      onClick={onClick}
    >
      <div className="flex aspect-square w-[75%] items-center justify-center rounded-full bg-white">
        {children}
      </div>
    </Button>
  );
};

export default Pick;
