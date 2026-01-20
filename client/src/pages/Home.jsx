import HeroContent from "../components/home/content/HeroContent";
import BackgroundDiamonds from "../components/background/BackgroundDiamonds";

function Home() {
  return (
    <section className="page-bg bg-section relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-24 pt-24">
      <BackgroundDiamonds
        diamondSide="right"
        ticksSide="left"
        showDiamond
        showTicks
        showHlines
        showSlants
        showHlinesTopRight={false}
        showHlinesBottomLeft={true}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4">
        <HeroContent />
      </div>
    </section>
  );
}

export default Home;
