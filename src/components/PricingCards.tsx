import PlaceholderChip from "./PlaceholderChip";
import { Check, Minus } from "lucide-react";
import { PendingCell } from "./PendingBadge";

interface FeatureItem {
  label: string;
  value: React.ReactNode;
  indent?: boolean;
  subHeader?: boolean;
}

interface TierData {
  name: string;
  descriptors: React.ReactNode[];
  price: React.ReactNode;
  cta: string;
  ctaStyle: "outlined" | "solid";
  features: FeatureItem[];
  onCtaClick?: () => void;
}

const checkMark = <Check className="w-4 h-4 text-primary" />;
const dash = <Minus className="w-4 h-4 text-muted-foreground" />;

const buildFeatures = (vals: React.ReactNode[]): FeatureItem[] => {
  const labels: { label: string; indent?: boolean; subHeader?: boolean }[] = [
    { label: "Number of locations" },
    { label: "Number of POS total" },
    { label: "Number of ticket included total" },
    { label: "Number of extra ticket if cinema choose selling online through cinetixx" },
    { label: "Commission per ticket above threshold", subHeader: true },
    { label: "Offline", indent: true },
    { label: "Online", indent: true },
    { label: "API commission per ticket", indent: true },
    { label: "OTC sales" },
    { label: "TSE" },
    { label: "Program planning" },
    { label: "Concessions / Inventory management" },
    { label: "Online Sales" },
    { label: "Reporting" },
    { label: "Payment provider" },
    { label: "Marketing tools" },
    { label: "Online Ticketing / Additional Sales Channels" },
    { label: "Services providers API" },
    { label: "Loyalty & Voucher / Discount Programs API" },
    { label: "Customer support" },
    { label: "SLA & priority incident handling" },
    { label: "Response time" },
    { label: "Resolution time" },
    { label: "Advanced user management & security" },
  ];
  return labels.map((l, i) => ({ ...l, value: vals[i] }));
};

const PricingCards = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const tiers: TierData[] = [
    {
      name: "Core",
      descriptors: [],
      price: "2,449 EUR",
      cta: "Get Started",
      ctaStyle: "outlined",
      features: buildFeatures([
        "1 location",
        "4 POS",
        "15,000",
        "1,000",
        null, // sub-header marker
        "€0.105",
        "€0.105",
        "0.11-0.15",
        checkMark,
        checkMark,
        checkMark,
        "Concessions",
        checkMark,
        "Basic internal reporting",
        "Y-Pay",
      "Discounting",
      "Kinoheld",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "None",
        "Handling Bugs, B2B support extra paid",
        <>Basic SLA (<PlaceholderChip>[XX]%</PlaceholderChip>), business hours support</>,
        <><div>P0: 4h</div><div>P1: 6h</div><div>P2: 8h</div></>,
        "Best-effort basis (no resolution time commitment)",
        dash,
      ]),
    },
    {
      name: "Grow",
      descriptors: [],
      price: "2,949 EUR",
      cta: "Get Started",
      ctaStyle: "outlined",
      features: buildFeatures([
        "2 locations/3 locations (Add-on)",
        "8 POS/12 POS (Add-on)",
        "25,000",
        "2,000",
        null,
        "€0.095",
        "€0.095",
        "0.11-0.15",
        checkMark,
        checkMark,
        checkMark,
        "Concessions + Basic inventory management",
        checkMark,
        "Better internal reporting",
        "API for non Y-Pay",
        "Discounting, Vouchers, Newsletter",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "AG Kino-Gild, zmyle",
        "B2B support included 2nd level",
        <>Enhanced SLA (<PlaceholderChip>[YYY]%</PlaceholderChip>), extended support hours</>,
        <><div>P0: 2h</div><div>P1: 4h</div><div>P2: 6h</div></>,
        <><div>P0: 24h</div><div>P1: 48h</div></>,
        dash,
      ]),
    },
    {
      name: "Scale",
      descriptors: [],
      price: "3,899 EUR",
      cta: "Get Started",
      ctaStyle: "solid",
      features: buildFeatures([
        "3 locations +",
        "Unlimited POS + mobile POS included",
        "40,000",
        "6,000",
        null,
        "€0.880",
        "€0.880",
        "0.11-0.15",
        checkMark,
        checkMark,
        checkMark,
        "Concessions + advanced inventory management",
        checkMark,
        "Best internal reporting",
        "API for non Y-Pay",
        "Discounting, Vouchers and loyalty items, Newsletter",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "AG Kino-Gild, zmyle",
        "B2B support on the weekends",
        <>Advanced SLA (<PlaceholderChip>[ZZZ]%</PlaceholderChip>, weekend support)</>,
        <><div>P0: 1h</div><div>P1: 2h</div><div>P2: 4h</div></>,
        <><div>P0: 8–12h</div><div>P1: 24h</div></>,
        dash,
      ]),
    },
    {
      name: "Strategic partnership",
      descriptors: [],
      price: (
        <>
          <span className="text-base font-normal text-muted-foreground">from </span>
          5,899 EUR
        </>
      ),
      cta: "Book a Demo",
      ctaStyle: "solid",
      onCtaClick: onBookDemo,
      features: buildFeatures([
        "3 locations +",
        "Unlimited POS + mobile POS included",
        "75,000+",
        "n/a",
        null,
        "Custom (between 0,06-0,07)",
        "Custom (between 0,06-0,07)",
        "Custom (between 0,06-0,07)",
        checkMark,
        checkMark,
        checkMark,
        "Concessions + advanced inventory management",
        checkMark,
        "Group level reporting & analytics",
        "API for non Y-Pay, custom API Integration",
        "Discounting, Vouchers and loyalty items, Newsletter",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de, full API + custom integrations",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "AG Kino-Gild, zmyle, full API + custom integrations",
        "Dedicated customer support manager, onboarding and implementation support",
        <>Advanced SLA (<PlaceholderChip>[XXX]%</PlaceholderChip>, weekend support)</>,
        <><div>P0: 15 min</div><div>P1: 30 min</div><div>P2: 2h</div></>,
        <><div>P0: immediate workaround / few hours</div><div>P1: 4–8h</div><div>P2: 24h</div></>,
        "YES",
      ]),
    },
  ];

  return (
    <section id="pricing" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TierCard = ({ tier, index }: { tier: TierData; index: number }) => {
  return (
    <div
      className="glass-card flex flex-col overflow-hidden"
      style={{
        animation: `fade-up 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Blue gradient header */}
      <div
        className="px-6 py-5 flex items-center min-h-[80px]"
        style={{ background: "linear-gradient(135deg, #1565C0 0%, #1E88E5 100%)" }}
      >
        <div>
          <h3 className="text-xl font-bold text-white whitespace-nowrap">{tier.name}</h3>
          {tier.descriptors.map((d, i) => (
            <p key={i} className="text-sm text-blue-100 mt-1">{d}</p>
          ))}
        </div>
      </div>

      <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
        <p className="text-3xl font-bold mb-5" style={{ color: "#1565C0" }}>{tier.price}</p>

        <div className="flex-1 mb-6">
          {tier.features.map((f, i) => {
            if (f.subHeader) {
              return (
                <div key={i} className="pt-3 pb-1 border-b border-border">
                  <span className="block text-xs font-semibold text-foreground">
                    {f.label}
                  </span>
                </div>
              );
            }
            return (
              <div key={i} className={`py-2.5 border-b border-border last:border-b-0 ${f.indent ? "pl-3" : ""}`}>
                <span className="block text-xs font-medium text-muted-foreground mb-0.5">
                  {f.label}
                </span>
                <span className="text-sm text-foreground">{f.value}</span>
              </div>
            );
          })}
        </div>

        <button
          onClick={tier.onCtaClick}
          className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${
            tier.ctaStyle === "solid"
              ? "bg-primary text-primary-foreground hover:opacity-90"
              : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          {tier.cta}
        </button>
      </div>
    </div>
  );
};

export default PricingCards;
