import CTAButton from "../../buttons/CtaButton";
import heroImage from "../../../assets/images/qr-image-4.png";

function HeroContent() {
  return (
    <section className="hero-section section relative z-10">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="grid-left min-w-0 flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mt-20 text-text_clr_1">
            Boost Your Business with More Reviews
          </h1>
          <p className="text-2xl font-semibold text-text_clr_1">
            Collect more positive reviews with QR codes and grow your online
            reputation.
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
        <div className="grid-right flex justify-center">
          <img src={heroImage} alt="reviewbear flow" className=""/>
        </div>
      </div>
    </section>
  );
}
export default HeroContent;
