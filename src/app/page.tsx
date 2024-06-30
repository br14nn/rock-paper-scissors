import OpponentPickingPhase from "@/components/custom/OpponentPickingPhase";
import PlayerPickingPhase from "@/components/custom/PlayerPickingPhase";
import RulesPopupWindow from "@/components/custom/RulesPopupWindow";
import Scoreboard from "@/components/custom/Scoreboard";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-32 bg-radial-gradient p-6 xl:gap-36 xl:p-12">
      <Scoreboard />
      <PlayerPickingPhase />
      <OpponentPickingPhase />
      <RulesPopupWindow />
    </main>
  );
};

export default Home;
