import PlayerPickingPhase from "@/components/custom/PlayerPickingPhase";
import Scoreboard from "@/components/custom/Scoreboard";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-radial-gradient p-4">
      <Scoreboard />
      <PlayerPickingPhase />
    </main>
  );
};

export default Home;
