import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MoveLeft, Dumbbell } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 text-center text-white selection:bg-rose-600/30">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-rose-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 animate-fade-in-up">

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-rose-500/10 p-4 ring-1 ring-rose-500/20">
            <Dumbbell className="h-10 w-10 text-rose-600" />
          </div>
        </div>

        <h1 className="mb-2 text-[150px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-800 md:text-[200px]">
          404
        </h1>

        <h2 className="mb-6 text-2xl font-bold uppercase tracking-widest text-white md:text-3xl">
          Rep Not Found
        </h2>

        <p className="mx-auto mb-8 max-w-[500px] text-zinc-400 md:text-lg">
          It looks like you've wandered off the track. Even the best athletes lose their way sometimes.
          <br />
          <span className="text-zinc-500 text-sm mt-2 block">
            (You tried to access: <code className="bg-zinc-900 px-1 py-0.5 rounded text-rose-500/70">{location.pathname}</code>)
          </span>
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-rose-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-rose-700 hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] active:scale-95"
          >
            <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Link>
        </div>
      </div>

      <div className="fixed bottom-8 text-xs text-zinc-600 uppercase tracking-widest">
        Feel The Burn Gym
      </div>
    </div>
  );
};

export default NotFound;
