"use client";

import Button from "@/components/ui/Button";

import useGameMasterStore from "@/utils/store/gameMaster.store";

const PlayAgainButton = () => {
  const { currentWinner, resetScore, playAgain } = useGameMasterStore(
    (state) => state,
  );

  const handleClick = () => {
    if (currentWinner === "house") resetScore();
    playAgain();
  };

  return (
    <Button
      className="min-w-[180px] text-dark-text transition-colors duration-150 hover:text-red-500"
      onClick={handleClick}
    >
      PLAY AGAIN
    </Button>
  );
};

export default PlayAgainButton;
