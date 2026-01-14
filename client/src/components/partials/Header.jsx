import logo from "../../assets/images/reviewbear-logo-1.png";
import CTAButton from "../buttons/CtaButton";

function Header() {
  return (
    <header className="sticky top-0 w-full z-10">
      <div className="header-items max-w-[1400px] mx-auto px-4 py-4 flex justify-between">
        {/* logo */}
        <a href="/" className="flex items-center gap-1 w-fit">
          <img src={logo} alt="reviewbear-logo" className="h-10 w-auto" />
          <p className="font-bold text-xl">
            Review<span className="font-semibold text-text_clr_4">Bear</span>
          </p>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links flex items-center gap-2">
          <CTAButton to="/login" variant="primary" size="md">
            Business Login
          </CTAButton>
          <CTAButton to="/signup" variant="secondary" size="md">
            Create Account
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
export default Header;
