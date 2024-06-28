import { twMerge } from "tailwind-merge";

import Button from "@/components/ui/Button";

type TPickProps = {
  children?: React.ReactNode;
  className?: string;
};

const Pick = ({ children, className }: TPickProps) => {
  return (
    <Button className={twMerge("absolute", className)}>
      <div className="flex aspect-square w-[75%] items-center justify-center rounded-full bg-white">
        {children}
      </div>
    </Button>
  );
};

export default Pick;
