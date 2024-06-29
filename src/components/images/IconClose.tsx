import { twMerge } from "tailwind-merge";

type TIconCloseProps = {
  className?: string;
};

const IconClose = ({ className }: TIconCloseProps) => {
  return (
    <svg
      className={twMerge("h-[20px] w-[20px]", className)}
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.25"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.8882 0L19 2.11078L11.6108 9.5L19 16.8892L16.8892 18.999L9.5 11.6108L2.11078 19L0 16.8882L7.38922 9.49901L0 2.11078L2.11078 0L9.5 7.38922L16.8892 0H16.8882Z"
        fill="#3B4262"
      />
    </svg>
  );
};

export default IconClose;
