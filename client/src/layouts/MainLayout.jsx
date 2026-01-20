import { Outlet } from "react-router-dom";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import SiteBackground from "../components/background/SiteBackground";

function MainLayout() {
  return (
    <div className="min-h-screen">
      {/* Background */}
      <SiteBackground />

      {/* Header for the layout applies to all sub pages */}
      <Header />

      {/* Main constrained content */}
      <main className="flex-grow max-w-[1400px] mx-auto w-full px-4 pt-24">
        <Outlet />
      </main>

      {/* Footer for the layout applies to all sub pages */}
      <Footer />
    </div>
  );
}

export default MainLayout;
