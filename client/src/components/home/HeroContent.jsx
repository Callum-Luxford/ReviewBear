import heroImage1 from "../../assets/images/hero-image-1.png";
import CTAButton from "../buttons/CtaButton.jsx";

function HeroContent() {
  return (
    <div className="hero-section section relative z-10">
      <div className="hero-content grid grid-cols-2 gap-6">
        <div className="grid-left flex flex-col gap-4">
          <h1 className="text-7xl font-bold mt-20">Goolge-Compliant Reviews Made Easy</h1>
          <p className="text-2xl font-semibold text-text_clr_3">
            Gather and manage feedback effortlessly while ensuring happy
            customers go to Google.
          </p>
          <div className="cta-btns flex gap-2">
            <CTAButton to="/signup" variant="secondary" size="xl">
              Get Started
            </CTAButton>
            <CTAButton to="/login" variant="primary" size="xl">
              Business Login
            </CTAButton>

            
          </div>
        </div>
        <div className="grid-right">
          <img src={heroImage1} alt="reviewbear flow" className="mt-32" />
        </div>
      </div>
    </div>
  );
}
export default HeroContent;
