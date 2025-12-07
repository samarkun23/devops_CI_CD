import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-red-50 to-green-50 font-sans dark:from-red-950 dark:to-green-950">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="text-5xl mb-8">🎄</div>
        
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="max-w-2xl text-4xl font-bold leading-12 tracking-tight text-red-600 dark:text-red-300">
            Merry Christmas! 🎅
          </h1>
          
          <p className="max-w-2xl text-xl leading-8 text-zinc-700 dark:text-zinc-300">
            Wishing you and all my friends a wonderful Christmas filled with joy, laughter, and cherished moments together.
          </p>
          
          <div className="my-4 text-3xl">🎁 ✨ ❄️</div>
          
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            May this festive season bring you happiness, good health, and beautiful memories with loved ones.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 text-white transition-colors hover:bg-red-700 dark:hover:bg-red-500 md:w-[200px]"
            href="mailto:?subject=Merry%20Christmas&body=Wishing%20you%20a%20wonderful%20Christmas!"
          >
            Share with Friends
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border-2 border-green-600 px-5 text-green-600 transition-colors hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950 md:w-[200px]"
            href="#"
          >
            Holiday Countdown
          </a>
        </div>
      </main>
    </div>
  );
}
