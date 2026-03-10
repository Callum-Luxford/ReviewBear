import CTAButton from "../../buttons/CtaButton";
import heroImage from "../../../assets/images/phone-qr-scan.png";
import ParticlesBackground from "../../effects/ParticlesBackground";

function HeroContent() {
  return (
    <section className="hero-section py-12 relative isolate z-10 overflow-hidden pt-24 px-4">
      {/* Full-width hero background */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[900px] w-screen -translate-x-1/2 overflow-hidden">
        {/* Large top-center radial atmosphere */}
        <div className="absolute left-1/2 top-[-220px] h-[780px] w-[1280px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(92,76,255,0.16)_0%,rgba(56,40,150,0.10)_34%,rgba(0,0,0,0)_72%)] blur-[120px]" />

        {/* Subtle left cyan atmosphere */}
        <div className="absolute left-[-240px] top-[120px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(0,190,255,0.08)_0%,rgba(0,0,0,0)_72%)] blur-[130px]" />

        {/* Subtle right purple atmosphere */}
        <div className="absolute right-[-240px] top-[90px] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(140,90,255,0.10)_0%,rgba(0,0,0,0)_72%)] blur-[140px]" />

        {/* Very soft section vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,1,20,0.10)_58%,rgba(0,1,20,0.28)_100%)]" />
      </div>

      {/* Hero content */}
      <div className="hero-content relative z-10 grid grid-cols-1 gap-6">
        <div className="grid-left min-w-0 flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-20 text-text_clr_1">
            Boost Your Business with More Reviews
          </h1>

          <p className="text-xl md:text-2xl text-text_clr_1">
            Collect more positive reviews with QR codes and grow your online
            reputation.
          </p>

          <div className="cta-btns flex gap-2 justify-center items-center">
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

        <div className="grid-right relative flex justify-center">
          <div className="relative w-full max-w-[1200px] min-h-[540px] md:min-h-[760px]">
            
            {/* Image + particles share the same centered wrapper */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative w-full max-w-[980px]">
                {/* Particles stage */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse 70% 64% at 50% 52%, black 12%, rgba(0,0,0,0.82) 34%, rgba(0,0,0,0.35) 58%, transparent 100%)",
                    maskImage:
                      "radial-gradient(ellipse 70% 64% at 50% 52%, black 12%, rgba(0,0,0,0.82) 34%, rgba(0,0,0,0.35) 58%, transparent 100%)",
                  }}
                >
                  <ParticlesBackground />
                </div>

                {/* Image */}
                <img
                  src={heroImage}
                  alt="reviewbear flow"
                  className="relative z-10 w-full h-auto object-contain opacity-95"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse 60% 56% at 50% 46%, black 12%, rgba(0,0,0,0.9) 32%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0.15) 66%, transparent 100%)",
                    maskImage:
                      "radial-gradient(ellipse 60% 56% at 50% 46%, black 12%, rgba(0,0,0,0.9) 32%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0.15) 66%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContent;
