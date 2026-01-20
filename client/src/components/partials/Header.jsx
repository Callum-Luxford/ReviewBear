import logo from "../../assets/images/logo-2.png";
import CTAButton from "../buttons/CtaButton";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-24">
      <div className="header-items max-w-[1400px] mx-auto px-4 h-full flex items-center justify-between">
        {/* logo */}
        <a href="/" className="flex items-center gap-1 w-fit">
          <img src={logo} alt="reviewbear-logo" className="h-10 w-auto" />
          <p className="text-xl text-text_clr_1">
            Review<span className="font-semibold text-text_clr_1">Bear</span>
          </p>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links flex items-center gap-2">
          <CTAButton to="/signup" variant="primary" size="md">
            Create Account
          </CTAButton>
          <CTAButton to="/login" variant="secondary" size="md">
            Business Login
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
export default Header;
