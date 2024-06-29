"use client";

import Pick from "./Pick";
import IconPaper from "../images/IconPaper";
import IconScissors from "../images/IconScissors";
import IconRock from "../images/IconRock";

import useGameMasterStore from "@/utils/store/gameMaster.store";
import BgTriangle from "../images/BgTriangle";

const PlayerPickingPhase = () => {
  const { phase, updatePhase, updatePlayerPick } = useGameMasterStore(
    (state) => state,
  );

  const handlePlayerPick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    updatePlayerPick(id as "rock" | "paper" | "scissors");
    updatePhase("opponentPickingPhase");
  };

  if (phase === "playerPickingPhase") {
    return (
      <div className="relative flex items-center justify-center">
        <Pick
          className="absolute -translate-x-[70%] -translate-y-[98px] bg-paper-gradient xl:-translate-x-[75%] xl:-translate-y-[139px]"
          id="paper"
          onClick={handlePlayerPick}
        >
          <IconPaper />
        </Pick>
        <Pick
          className="absolute -translate-y-[98px] translate-x-[70%] bg-scissors-gradient xl:-translate-y-[139px] xl:translate-x-[75%]"
          id="scissors"
          onClick={handlePlayerPick}
        >
          <IconScissors />
        </Pick>
        <Pick
          className="absolute translate-y-[35%] bg-rock-gradient xl:translate-y-[45%]"
          id="rock"
          onClick={handlePlayerPick}
        >
          <IconRock />
        </Pick>
        <BgTriangle />
      </div>
    );
  }
};

export default PlayerPickingPhase;
