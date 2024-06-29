"use client";

import { useEffect } from "react";

import Pick from "@/components/custom/Pick";
import PlayAgainButton from "@/components/custom/PlayAgainButton";

import useGameMasterStore from "@/utils/store/gameMaster.store";
import IconRock from "../images/IconRock";
import IconPaper from "../images/IconPaper";
import IconScissors from "../images/IconScissors";

const OpponentPickingPhase = () => {
  const {
    phase,
    playerPick,
    opponentPick,
    currentWinner,
    incrementScore,
    resetScore,
    updateCurrentWinner,
    updateOpponentPick,
    updatePhase,
  } = useGameMasterStore();

  useEffect(() => {
    handleOpponentPick();
    handleWinner();
  });

  const handleOpponentPick = () => {
    if (phase === "opponentPickingPhase" && opponentPick === undefined) {
      const randomNum = Math.floor(Math.random() * 3) + 1;

      setTimeout(() => {
        if (randomNum === 1) updateOpponentPick("rock");
        if (randomNum === 2) updateOpponentPick("paper");
        if (randomNum === 3) updateOpponentPick("scissors");
        updatePhase("winnerAnnouncingPhase");
      }, 2000);
    }
  };

  const handleWinner = () => {
    if (phase === "winnerAnnouncingPhase" && currentWinner === undefined) {
      if (playerPick === opponentPick) {
        return updateCurrentWinner("draw");
      }

      if (
        (playerPick === "rock" && opponentPick === "scissors") ||
        (playerPick === "paper" && opponentPick === "rock") ||
        (playerPick === "scissors" && opponentPick === "paper")
      ) {
        incrementScore();
        return updateCurrentWinner("player");
      } else if (
        (playerPick === "rock" && opponentPick === "paper") ||
        (playerPick === "paper" && opponentPick === "scissors") ||
        (playerPick === "scissors" && opponentPick === "rock")
      ) {
        return updateCurrentWinner("house");
      }
    }
  };

  if (phase === "opponentPickingPhase" || phase === "winnerAnnouncingPhase") {
    return (
      <>
        <div className="flex flex-row justify-center gap-12 xl:gap-32">
          <div className="flex flex-col items-center gap-6 xl:flex-col-reverse xl:gap-12">
            {playerPick === "rock" && (
              <Pick
                className="cursor-default bg-rock-gradient xl:w-[300px]"
                animation="none"
                id="rock"
              >
                <IconRock />
              </Pick>
            )}
            {playerPick === "paper" && (
              <Pick
                className="cursor-default bg-paper-gradient xl:w-[300px]"
                animation="none"
                id="paper"
              >
                <IconPaper />
              </Pick>
            )}
            {playerPick === "scissors" && (
              <Pick
                className="cursor-default bg-scissors-gradient xl:w-[300px]"
                animation="none"
                id="scissors"
              >
                <IconScissors />
              </Pick>
            )}
            <p className="text-sm font-medium tracking-widest text-white xl:text-xl">
              YOU PICKED
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 xl:flex-col-reverse xl:gap-12">
            {opponentPick === undefined && (
              <div className="aspect-square w-[130px] rounded-full bg-black/20 xl:w-[300px]" />
            )}
            {opponentPick === "rock" && (
              <Pick
                className="cursor-default bg-rock-gradient xl:w-[300px]"
                animation="none"
                id="rock"
              >
                <IconRock />
              </Pick>
            )}
            {opponentPick === "paper" && (
              <Pick
                className="cursor-default bg-paper-gradient xl:w-[300px]"
                animation="none"
                id="paper"
              >
                <IconPaper />
              </Pick>
            )}
            {opponentPick === "scissors" && (
              <Pick
                className="cursor-default bg-scissors-gradient xl:w-[300px]"
                animation="none"
                id="scissors"
              >
                <IconScissors />
              </Pick>
            )}
            <p className="text-sm font-medium tracking-widest text-white xl:text-xl">
              THE HOUSE PICKED
            </p>
          </div>
        </div>
        {phase === "winnerAnnouncingPhase" && (
          <div className="flex flex-col items-center gap-4 xl:hidden">
            <p className="text-5xl font-bold tracking-wide text-white">
              {currentWinner === "player" && "YOU WIN"}
              {currentWinner === "house" && "YOU LOSE"}
              {currentWinner === "draw" && "DRAW"}
            </p>
            <PlayAgainButton />
          </div>
        )}
      </>
    );
  }
};

export default OpponentPickingPhase;
