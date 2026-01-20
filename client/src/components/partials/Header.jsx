import { useState } from "react";
import logo from "../../assets/images/logo-2.png";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import Hamburger from "hamburger-react";
import {
  Spin,
  Squash,
  Divide,
  Fade,
  Turn,
  Sling,
  Twirl,
} from "hamburger-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const MENU_MS = 300;
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [blurReady, setBlurReady] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-24">
      {/* Mobile Nav */}
      <nav
        className={`mobile-nav text-text_clr_1 fixed top-0 right-0 w-2/3 h-full z-40 transform transition-transform duration-300 ease-in-out bg-slate-800  ${menuOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full"}`}
      >
        <div className="mobile-nav-links flex flex-col gap-2 p-4 mt-20">
          <Link
            to="/login"
            variant="secondary"
            size="md"
            className="gradient-text-hover"
            onClick={closeMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            variant="primary"
            size="md"
            className="gradient-text-hover"
            onClick={closeMenu}
          >
            Create Account
          </Link>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-30 bg-black/50 bg-gradient-to-l from-black/60 via-black/40 to-transparent ${menuOpen ? "visible" : "hidden"}`}
        onClick={closeMenu}
      ></div>

      <div className="header-items max-w-[1400px] mx-auto px-4 h-full flex items-center justify-between">
        {/* logo */}
        <a href="/" className="flex items-center gap-1 w-fit">
          <img src={logo} alt="reviewbear-logo" className="h-10 w-auto" />
          <p className="text-xl text-text_clr_1">
            Review<span className="font-semibold text-text_clr_1">Bear</span>
          </p>
        </a>

        <div
          className={`md:hidden z-50 ${menuOpen ? "" : ""}`}
        >
          <Squash
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={24}
            color="#fff"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden nav-links md:flex items-center gap-4 text-text_clr_1">
          <Link
            to="/login"
            variant="secondary"
            size="md"
            className="gradient-text-hover"
          >
            Login
          </Link>
          <Link
            to="/signup"
            variant="primary"
            size="md"
            className="gradient-text-hover"
          >
            Create Account
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
