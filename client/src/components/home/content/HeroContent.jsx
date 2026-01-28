import CTAButton from "../../buttons/CtaButton";
import heroImage from "../../../assets/images/qr-image-4.png";
import ParticlesBackground from "../../effects/ParticlesBackground";

function HeroContent() {
  return (
    <section data-glow="tr" className="hero-section section relative z-10">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid-left min-w-0 flex flex-col gap-4 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-20 text-text_clr_1">
            Boost Your Business with More Reviews
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-text_clr_1">
            Collect more positive reviews with QR codes and grow your online
            reputation.
          </p>
          <div className="cta-btns flex gap-2 justify-center md:justify-normal">
            <CTAButton
              to="/signup"
              variant="primary"
              size="md"
              className="md:text-xl"
            >
              Get Started
            </CTAButton>
            <CTAButton
              to="/login"
              variant="secondary"
              size="md"
              className="md:text-xl"
            >
              Business Login
            </CTAButton>
          </div>
        </div>

        <div className="grid-right relative flex justify-center md:mt-40 mt-20">
          <div className="absolute h-full w-full inset-0 pointer-events-none z-0">
            <ParticlesBackground />
          </div>

          <img
            src={heroImage}
            alt="reviewbear flow"
            className="relative z-10 w-full h-auto object-contain animate-float"
          />
        </div>
      </div>
    </section>
  );
}
export default HeroContent;
