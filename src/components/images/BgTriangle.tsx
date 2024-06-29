import { twMerge } from "tailwind-merge";

type TBgTriangleProps = {
  className?: string;
};

const BgTriangle = ({ className }: TBgTriangleProps) => {
  return (
    <svg
      className={twMerge(
        "h-[195px] w-[219px] stroke-[20] xl:h-[278px] xl:w-[313px]",
        className,
      )}
      viewBox="0 0 313 278"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path opacity="0.2" d="M156.5 262L300 8H13L156.5 262Z" stroke="black" />
    </svg>
  );
};

export default BgTriangle;
