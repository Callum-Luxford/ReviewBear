import HeroContent from "../components/home/content/HeroContent";
import WhyUs from "../components/home/content/WhyUs";
import BackgroundDiamonds from "../components/background/BackgroundDiamonds";

function Home() {
  return (
    <section className="relative overflow-x-clip">
      <BackgroundDiamonds
        diamondSide="right"
        ticksSide="left"
        showDiamond={true}
        showTicks
        showHlines
        showSlants
        showHlinesTopRight={false}
        showHlinesBottomLeft={true}
      />
      {/* HerSection */}
      <HeroContent />

      {/* WhyUs Section */}
      <WhyUs />
    </section>
  );
}

export default Home;
