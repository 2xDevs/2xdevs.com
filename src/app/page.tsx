import Meteors from "~/components/ui/meteors";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 md:text-9xl">
        2xDevs
      </span>
    </main>
  );
}
