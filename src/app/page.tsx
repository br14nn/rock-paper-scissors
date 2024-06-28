import PlayerPickingPhase from "@/components/custom/PlayerPickingPhase";
import RulesPopupWindow from "@/components/custom/RulesPopupWindow";
import Scoreboard from "@/components/custom/Scoreboard";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-36 bg-radial-gradient p-6">
      <Scoreboard />
      <PlayerPickingPhase />
      <RulesPopupWindow />
    </main>
  );
};

export default Home;
