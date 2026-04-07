import PlaceholderChip from "./PlaceholderChip";
import { Check, Minus } from "lucide-react";
import { PendingCell } from "./PendingBadge";

interface TierData {
  name: string;
  descriptors: React.ReactNode[];
  cta: string;
  ctaStyle: "outlined" | "solid";
  features: React.ReactNode[];
  onCtaClick?: () => void;
}

const featureLabels = [
  "Number of locations",
  "Number of POS",
  "Number of tickets included",
  "Commission per offline ticket above threshold",
  "OTC sales",
  "TSE",
  "Online Sales",
  "Program planning",
  "Concessions / Inventory mgmt",
  "Reporting",
  "Payment provider",
  "Customer support",
  "SLA & priority incident handling",
  "Response time",
  "Resolution time",
  "Marketing tools",
  "Services providers API",
  "Online Ticketing / Sales Channels",
  "Loyalty & Voucher Programs API",
  "Advanced user management & security",
];

const checkMark = <Check className="w-4 h-4 text-primary" />;
const dash = <Minus className="w-4 h-4 text-muted-foreground" />;

const PricingCards = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const tiers: TierData[] = [
    {
      name: "Good",
      descriptors: [
        <><span className="font-bold text-white">20,000</span> tickets included</>,
        "Highest commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "outlined",
      features: [
        "1 location",
        "3 POS per location",
        "20,000",
        "€0.08",
        checkMark,
        checkMark,
        checkMark,
        checkMark,
        "Concessions",
        "Basic internal reporting",
        "Y-Pay",
        "Bug handling; B2B support as paid add-on",
        <PendingCell><PlaceholderChip>[XX]%</PlaceholderChip></PendingCell>,
        <PendingCell><PlaceholderChip>[YYY]%</PlaceholderChip></PendingCell>,
        <PendingCell><PlaceholderChip>[ZZZ]%</PlaceholderChip></PendingCell>,
        "Discounting",
        dash,
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        dash,
        <PendingCell>{dash}</PendingCell>,
      ],
    },
    {
      name: "Better",
      descriptors: [
        <><span className="font-bold text-white">30,000</span> tickets included</>,
        "Medium commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "outlined",
      features: [
        "2 locations",
        "6 POS per location",
        "30,000",
        "€0.075",
        checkMark,
        checkMark,
        checkMark,
        checkMark,
        "Concessions + Basic inventory mgmt",
        "Enhanced internal reporting",
        "Y-Pay + API for non-Y-Pay providers",
        "B2B support included (2nd level)",
        <PendingCell><PlaceholderChip>[XX]%</PlaceholderChip></PendingCell>,
        <PendingCell><PlaceholderChip>[YYY]%</PlaceholderChip></PendingCell>,
        <PendingCell><PlaceholderChip>[ZZZ]%</PlaceholderChip></PendingCell>,
        "Discounting, Vouchers",
        "König Filmdispo, One Cinema TMS, DATEV API",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "AG Kino-Gilde, zmyle",
        <PendingCell>{dash}</PendingCell>,
      ],
    },
    {
      name: "Best",
      descriptors: [
        <><span className="font-bold text-white">40,000</span> tickets included</>,
        "Lowest commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "solid",
      features: [
        "3+ locations",
        "Unlimited POS + mobile POS",
        "40,000",
        "€0.065",
        checkMark,
        checkMark,
        checkMark,
        checkMark,
        "Concessions + Advanced inventory mgmt",
        "Advanced internal reporting",
        "Y-Pay + API for non-Y-Pay providers",
        "B2B support included (weekends incl.)",
        <PendingCell><PlaceholderChip>[XX]%</PlaceholderChip></PendingCell>,
        <PendingCell><PlaceholderChip>[YYY]%</PlaceholderChip></PendingCell>,
        <PendingCell><PlaceholderChip>[ZZZ]%</PlaceholderChip></PendingCell>,
        "Discounting, Vouchers and loyalty items, Newsletter",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "AG Kino-Gilde, zmyle",
        <PendingCell>{dash}</PendingCell>,
      ],
    },
    {
      name: "Enterprise",
      descriptors: [
        "Made to measure",
        "Volume-based discount negotiated per client",
      ],
      cta: "Book a Demo",
      ctaStyle: "solid",
      onCtaClick: onBookDemo,
      features: [
        "3+ locations (volume discount)",
        "Unlimited POS + mobile POS",
        "100,000",
        "€0.058",
        checkMark,
        checkMark,
        checkMark,
        checkMark,
        <PendingCell>Concessions + Centralized inventory across locations</PendingCell>,
        <PendingCell>Group-level reporting & analytics</PendingCell>,
        "Volume-based discounts, negotiated base fee",
        "Dedicated CSM + onboarding support",
        <PendingCell><PlaceholderChip>[XX]%</PlaceholderChip></PendingCell>,
        <PendingCell><PlaceholderChip>[YYY]%</PlaceholderChip></PendingCell>,
        <PendingCell><PlaceholderChip>[ZZZ]%</PlaceholderChip></PendingCell>,
        "Discounting, Vouchers and loyalty items, Newsletter",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de + full API & custom integrations",
        "AG Kino-Gilde, zmyle + full API & custom integrations",
        <PendingCell>{dash}</PendingCell>,
      ],
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
        className="px-6 py-5"
        style={{ background: "linear-gradient(135deg, #1565C0 0%, #1E88E5 100%)" }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        {tier.descriptors.map((d, i) => (
          <p key={i} className="text-sm text-blue-100">{d}</p>
        ))}
      </div>

      <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
        <p className="text-sm font-medium text-muted-foreground mb-5">Price on request</p>

        <div className="flex-1 mb-6">
          {tier.features.map((f, i) => (
            <div key={i} className="py-2.5 border-b border-border last:border-b-0">
              <span className="block text-xs font-medium text-muted-foreground mb-0.5">
                {featureLabels[i]}
              </span>
              <span className="text-sm text-foreground">{f}</span>
            </div>
          ))}
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
