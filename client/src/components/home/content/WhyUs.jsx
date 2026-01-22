import HexCard from "../../ui/HexCard";

function WhyUs() {
  return (
    <section className="section">
      <div className="flex flex-col justify-center items-center md:flex-row gap-20 text-text_clr_1">
        <HexCard size={250}>
          <div className="grid gap-2">
            <h1 className="font-bold text-md">Turn Scans into Reviews</h1>
            <p>
              Customers scan → tap → review. Zero friction. Higher completion.
            </p>
          </div>
        </HexCard>
        <HexCard size={250}>
          <div className="grid gap-2">
            <h1 className="font-bold text-md">Works Anywhere</h1>
            <p>
              Table tents, receipts, emails, windows. One QR — many touchpoints.
            </p>
          </div>
        </HexCard>
        <HexCard size={250}>
          <div className="grid gap-2">
            <h1 className="font-bold text-md">Simple Setup</h1>
            <p>Create → print → scan. No apps. No training. No nonsense.</p>
          </div>
        </HexCard>
      </div>
    </section>
  );
}

export default WhyUs;
