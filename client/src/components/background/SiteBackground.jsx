import { useEffect } from "react";

export default function SiteBackground() {
  useEffect(() => {
    let raf = null;

    const onScroll = () => {
      if (raf) return;

      raf = requestAnimationFrame(() => {
        // Put scroll value on :root so CSS can use it
        document.documentElement.style.setProperty(
          "--rb-scroll",
          `${window.scrollY}px`,
        );
        raf = null;
      });
    };

    // Set initial value
    document.documentElement.style.setProperty(
      "--rb-scroll",
      `${window.scrollY}px`,
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="site-bg" aria-hidden="true" />;
}
