import { twMerge } from "tailwind-merge";

import PlayAgainButton from "./PlayAgainButton";
import useGameMasterStore from "@/utils/store/gameMaster.store";

type TWinnerAnnouncerProps = {
  className?: string;
};

const WinnerAnnouncer = ({ className }: TWinnerAnnouncerProps) => {
  const phase = useGameMasterStore((state) => state.phase);
  const currentWinner = useGameMasterStore((state) => state.currentWinner);

  if (phase === "winnerAnnouncingPhase") {
    return (
      <div
        className={twMerge(
          "flex flex-col items-center gap-4 xl:hidden",
          className,
        )}
      >
        <p className="text-5xl font-bold tracking-wide text-white xl:text-6xl">
          {currentWinner === "player" && "YOU WIN"}
          {currentWinner === "house" && "YOU LOSE"}
          {currentWinner === "draw" && "DRAW"}
        </p>
        <PlayAgainButton />
      </div>
    );
  }
};

export default WinnerAnnouncer;
