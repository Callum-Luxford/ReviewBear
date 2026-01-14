import HeroContent from "../components/home/HeroContent";

function Home() {
  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-20 pt-20"
      style={{
        backgroundImage:
          "linear-gradient(45deg,rgba(106, 173, 115, 0.5) 0%, rgba(249, 247, 247, 0.5) 30%)",
      }}
    >
      {/* Background full width */}
      {/* <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
      /> */}

      {/* Inner constrained content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4">
        <HeroContent />
      </div>
    </section>
  );
}

export default Home;
