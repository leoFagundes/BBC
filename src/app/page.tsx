import AnimatedLogo from "@/components/animated-logo";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <AnimatedLogo />
      <section
        id="hero-container"
        className="flex flex-col items-center gap-3 p-4"
      >
        <h1 className="text-gray-600 font-semibold text-md sm:text-4xl text-center">
          Bem-vindo ao seu Clube Econômico de Café da Manhã!
        </h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hl-vPXPZKE8?si=eJAcvS571B1sTXrr?rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="my-6 shadow-card w-[80%] max-w-[600px] min-w-[300px]"
        ></iframe>
      </section>
    </div>
  );
}
