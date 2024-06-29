import Button from "@/components/ui/Button";

import useGameMasterStore from "@/utils/store/gameMaster.store";

const PlayAgainButton = () => {
  const playAgain = useGameMasterStore((state) => state.playAgain);

  const handleClick = () => {
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
