import heroImage1 from "../../assets/images/phone-qr-image.png";
import CTAButton from "../buttons/CtaButton.jsx";

function HeroContent() {
  return (
    <div className="hero-section section relative z-10">
      <div className="hero-content grid grid-cols-2 gap-6">
        <div className="grid-left flex flex-col gap-4">
          <h1 className="text-7xl font-bold mt-20 text-text_clr_1">
            Boost Your Business with More Reviews
          </h1>
          <p className="text-2xl font-semibold text-text_clr_1">
            Collect more positive reviews with QR codes and grow your online reputation.
          </p>
          <div className="cta-btns flex gap-2">
            <CTAButton to="/signup" variant="primary" size="xl">
              Get Started
            </CTAButton>
            <CTAButton to="/login" variant="secondary" size="xl">
              Business Login
            </CTAButton>
          </div>
        </div>
        <div className="grid-right">
          {/* <img src={heroImage1} alt="reviewbear flow" className="" /> */}
        </div>
      </div>
    </div>
  );
}
export default HeroContent;
