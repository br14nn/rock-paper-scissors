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
  updatePhase: (phase: IGameMasterState["phase"]) => void;
  updatePlayerPick: (pick: IGameMasterState["playerPick"]) => void;
  updateOpponentPick: (pick: IGameMasterState["opponentPick"]) => void;
}

const useGameMasterStore = create<IGameMasterState>()(
  devtools((set) => ({
    score: 0,
    phase: "playerPickingPhase",
    playerPick: undefined,
    opponentPick: undefined,
    updatePhase: (phase) => set(() => ({ phase: phase })),
    updatePlayerPick: (pick) => set(() => ({ playerPick: pick })),
    updateOpponentPick: (pick) => set(() => ({ opponentPick: pick })),
  })),
);

export default useGameMasterStore;
