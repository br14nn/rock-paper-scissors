import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IGameMasterState {
  score: number;
  phase:
    | "playerPickingPhase"
    | "opponentPickingPhase"
    | "winnerAnnouncingPhase";
  playerPick: "rock" | "paper" | "scissors" | undefined;
  opponentPick: "rock" | "paper" | "scissors" | undefined;
  currentWinner: undefined | "player" | "house" | "draw";
  incrementScore: () => void;
  resetScore: () => void;
  updatePhase: (phase: IGameMasterState["phase"]) => void;
  updatePlayerPick: (pick: IGameMasterState["playerPick"]) => void;
  updateOpponentPick: (pick: IGameMasterState["opponentPick"]) => void;
  updateCurrentWinner: (winner: IGameMasterState["currentWinner"]) => void;
  playAgain: () => void;
}

const useGameMasterStore = create<IGameMasterState>()(
  devtools((set) => ({
    score: 0,
    phase: "playerPickingPhase",
    playerPick: undefined,
    opponentPick: undefined,
    currentWinner: undefined,
    incrementScore: () => set((state) => ({ score: state.score + 1 })),
    resetScore: () => set(() => ({ score: 0 })),
    updatePhase: (phase) => set(() => ({ phase: phase })),
    updatePlayerPick: (pick) => set(() => ({ playerPick: pick })),
    updateOpponentPick: (pick) => set(() => ({ opponentPick: pick })),
    updateCurrentWinner: (winner) => set(() => ({ currentWinner: winner })),
    playAgain: () =>
      set(() => ({
        phase: "playerPickingPhase",
        playerPick: undefined,
        opponentPick: undefined,
        currentWinner: undefined,
      })),
  })),
);

export default useGameMasterStore;
