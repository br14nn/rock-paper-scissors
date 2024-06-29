import { twMerge } from "tailwind-merge";

type TIconScissors = {
  className?: string;
};

const IconScissors = ({ className }: TIconScissors) => {
  return (
    <svg
      className={twMerge("aspect-auto w-[51px] xl:w-[64px]", className)}
      viewBox="0 0 51 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7717 25.4876L19.8333 17.0794C17.3137 16.6648 12.6868 16.5729 8.89782 20.3118C2.92393 26.206 0.504126 38.9377 0 42.0202L15.1822 57C17.9156 56.7682 30.0167 55.1745 41.6781 43.6708C41.8011 43.422 44.6423 41.3517 42.3193 39.0606C41.2103 37.9665 39.3763 37.9875 38.244 39.1045C37.6673 39.6741 36.7709 39.6811 36.2063 39.1245C35.6417 38.568 35.6498 37.6827 36.2265 37.1142L40.3472 33.0485C42.4403 30.9831 40.4672 27.498 37.5443 28.3353L34.1717 31.184C33.5556 31.7135 32.6391 31.6226 32.133 31.0441C31.6097 30.4476 31.7216 29.5423 32.3175 29.0327C44.1009 18.833 42.3798 20.061 49.9619 13.0507C52.7941 10.7236 49.2309 6.60895 46.4401 8.96404L28.1 25.2358C27.5666 25.6835 26.7489 25.6924 26.2246 25.2158C25.6187 24.6993 25.6045 23.9549 26.0008 23.3673L38.7925 3.74728C40.6618 1.24931 36.9827 -1.52544 35.0125 0.992517L16.0998 27.0913C15.644 27.7408 14.7245 27.8907 14.0984 27.436C13.9456 27.3311 13.8157 27.1968 13.7163 27.0412C13.6169 26.8856 13.55 26.7118 13.5196 26.5301C13.4893 26.3484 13.496 26.1625 13.5395 25.9834C13.583 25.8043 13.6623 25.6357 13.7727 25.4876H13.7717Z"
        fill="#3B4262"
      />
    </svg>
  );
};

export default IconScissors;
