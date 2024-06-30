"use client";

import { useEffect } from "react";
import Pick from "./Pick";
import PlayAgainButton from "./PlayAgainButton";
import WinnerAnnouncer from "./WinnerAnnouncer";
import IconRock from "../images/IconRock";
import IconPaper from "../images/IconPaper";
import IconScissors from "../images/IconScissors";
import useGameMasterStore from "@/utils/store/gameMaster.store";

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
        <div className="relative flex flex-row items-center justify-center gap-12 xl:gap-32">
          <div className="flex flex-col items-center gap-6 xl:flex-col-reverse xl:gap-12">
            {playerPick === "rock" && (
              <Pick
                className="shadow-rock cursor-default bg-rock-gradient xl:w-[300px]"
                animation="none"
                id="rock"
              >
                <IconRock className="xl:w-[100px]" />
              </Pick>
            )}
            {playerPick === "paper" && (
              <Pick
                className="shadow-paper cursor-default bg-paper-gradient xl:w-[300px]"
                animation="none"
                id="paper"
              >
                <IconPaper className="xl:w-[100px]" />
              </Pick>
            )}
            {playerPick === "scissors" && (
              <Pick
                className="shadow-scissors cursor-default bg-scissors-gradient xl:w-[300px]"
                animation="none"
                id="scissors"
              >
                <IconScissors className="xl:w-[100px]" />
              </Pick>
            )}
            <p className="text-sm font-medium tracking-widest text-white xl:text-xl">
              YOU PICKED
            </p>
          </div>
          <WinnerAnnouncer className="hidden xl:flex" />
          <div className="flex flex-col items-center gap-6 xl:flex-col-reverse xl:gap-12">
            {opponentPick === undefined && (
              <div className="aspect-square w-[130px] rounded-full bg-black/20 xl:w-[300px]" />
            )}
            {opponentPick === "rock" && (
              <Pick
                className="shadow-rock cursor-default bg-rock-gradient xl:w-[300px]"
                animation="none"
                id="rock"
              >
                <IconRock className="xl:w-[100px]" />
              </Pick>
            )}
            {opponentPick === "paper" && (
              <Pick
                className="shadow-paper cursor-default bg-paper-gradient xl:w-[300px]"
                animation="none"
                id="paper"
              >
                <IconPaper className="xl:w-[100px]" />
              </Pick>
            )}
            {opponentPick === "scissors" && (
              <Pick
                className="shadow-scissors cursor-default bg-scissors-gradient xl:w-[300px]"
                animation="none"
                id="scissors"
              >
                <IconScissors className="xl:w-[100px]" />
              </Pick>
            )}
            <p className="text-sm font-medium tracking-widest text-white xl:text-xl">
              THE HOUSE PICKED
            </p>
          </div>
        </div>
        <WinnerAnnouncer />
      </>
    );
  }
};

export default OpponentPickingPhase;
