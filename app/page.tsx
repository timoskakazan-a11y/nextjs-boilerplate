export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center p-4">
      <div
        className="
          flex 
          flex-col 
          items-center 
          justify-center 
          p-10 
          md:p-16 
          bg-neutral-950/50
          border 
          border-neutral-800 
          rounded-2xl 
          backdrop-blur-sm 
          animate-float 
          animate-pulse-shadow
        "
      >
        <h1
          className="
            text-6xl 
            md:text-8xl 
            font-bold 
            tracking-widest 
            text-neutral-200
          "
        >
          T&K
        </h1>
        <p className="mt-6 text-sm md:text-base text-neutral-400 tracking-wider">
          Сайт находится в разработке
        </p>
      </div>
    </main>
  );
}
