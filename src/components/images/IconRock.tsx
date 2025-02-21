import { twMerge } from "tailwind-merge";

type TIconRockProps = {
  className?: string;
};

const IconRock = ({ className }: TIconRockProps) => {
  return (
    <svg
      className={twMerge("aspect-square w-[47px] xl:w-[60px]", className)}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.7566 12.1934C44.1157 4.10986 35.0405 4.93559 35.0405 4.93559C31.2106 -1.81904 25.2267 3.07345 25.2267 3.07345C20.6292 -3.54639 14.8658 2.58819 14.8658 2.58819C4.92718 1.51584 5.31247 9.64336 5.31247 9.64336C5.0789 12.2274 6.71288 20.2201 6.71288 20.2201C5.2386 15.6132 2.04151 19.4373 2.04151 19.4373C-1.89122 25.506 1.06831 28.8279 1.06831 28.8279C6.38848 35.0643 17.7255 42.5498 17.7255 42.5498C21.8309 44.9022 20.0941 47 20.0941 47L44.9243 42.8963L45.4942 38.1855C49.2692 26.7671 44.7566 12.1934 44.7566 12.1934Z"
        fill="#3B4262"
      />
    </svg>
  );
};

export default IconRock;
