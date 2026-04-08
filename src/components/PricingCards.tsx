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
  "Number of POS total",
  "Number of ticket included total",
  "Commission per offline ticket above threshold",
  "OTC sales",
  "TSE",
  "Program planning",
  "Concessions / Inventory mgmt",
  "Online Sales",
  "Reporting",
  "Payment provider",
  "Marketing tools",
  "Online Ticketing / Sales Channels",
  "Services providers API",
  "Loyalty & Voucher Programs API",
  "Customer support",
  "SLA & priority incident handling",
  "Response time",
  "Resolution time",
  "Advanced user management & security",
];

const checkMark = <Check className="w-4 h-4 text-primary" />;
const dash = <Minus className="w-4 h-4 text-muted-foreground" />;

const PricingCards = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const tiers: TierData[] = [
    {
      name: "Good",
      descriptors: [
        "Highest commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "outlined",
      features: [
        "1 location",
        "4 POS",
        "17,900",
        "€0.100",
        checkMark,
        checkMark,
        checkMark,
        "Concessions",
        checkMark,
        "Basic internal reporting",
        "Y-Pay",
        "Discounting",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        dash,
        dash,
        "Bug handling; B2B support as paid add-on",
        <PendingCell>Basic SLA (<PlaceholderChip>[XX]%</PlaceholderChip>), business hours support</PendingCell>,
        <PendingCell><div>P0: 4h</div><div>P1: 6h</div><div>P2: 8h</div></PendingCell>,
        <PendingCell>Best-effort basis (no resolution time commitment)</PendingCell>,
        dash,
      ],
    },
    {
      name: "Better",
      descriptors: [
        "Medium commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "outlined",
      features: [
        "2 locations/3 locations (Add-on)",
        "8 POS/12 POS (Add-on)",
        "25,000",
        "€0.097",
        checkMark,
        checkMark,
        checkMark,
        "Concessions + Basic inventory mgmt",
        checkMark,
        "Enhanced internal reporting",
        "Y-Pay + API for non-Y-Pay providers",
        <PendingCell>Discounting, Vouchers</PendingCell>,
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "König Filmdispo, One Cinema TMS, DATEV API",
        "AG Kino-Gilde, zmyle",
        "B2B support included (2nd level)",
        <PendingCell>Enhanced SLA (<PlaceholderChip>[YYY]%</PlaceholderChip>), extended support hours</PendingCell>,
        <PendingCell><div>P0: 2h</div><div>P1: 4h</div><div>P2: 6h</div></PendingCell>,
        <PendingCell><div>P0: 24h</div><div>P1: 48h</div></PendingCell>,
        dash,
      ],
    },
    {
      name: "Best",
      descriptors: [
        "Lowest commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "solid",
      features: [
        "3 locations +",
        "Unlimited POS + mobile POS included",
        "70,000",
        "€0.070",
        checkMark,
        checkMark,
        checkMark,
        "Concessions + Advanced inventory mgmt",
        checkMark,
        "Advanced internal reporting",
        "Y-Pay + API for non-Y-Pay providers",
        <PendingCell>Discounting, Vouchers and loyalty items, Newsletter</PendingCell>,
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "AG Kino-Gilde, zmyle",
        "B2B support included (weekends incl.)",
        <PendingCell>Advanced SLA (<PlaceholderChip>[ZZZ]%</PlaceholderChip>), weekend support</PendingCell>,
        <PendingCell><div>P0: 1h</div><div>P1: 2h</div><div>P2: 4h</div></PendingCell>,
        <PendingCell><div>P0: 8–12h</div><div>P1: 24h</div></PendingCell>,
        dash,
      ],
    },
    {
      name: "Enterprise",
      descriptors: [
        "Made to measure / Volume-based discount negotiated per client",
      ],
      cta: "Book a Demo",
      ctaStyle: "solid",
      onCtaClick: onBookDemo,
      features: [
        "3 locations +",
        "Unlimited POS + mobile POS included",
        "70,000+ (recommended starting from 100,000)",
        "Custom (between €0.06–0.07)",
        checkMark,
        checkMark,
        checkMark,
        <PendingCell>Concessions + Centralized inventory across locations</PendingCell>,
        checkMark,
        <PendingCell>Group-level reporting & analytics</PendingCell>,
        "Volume-based discounts, negotiated base fee",
        <PendingCell>Discounting, Vouchers and loyalty items, Newsletter</PendingCell>,
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de + full API & custom integrations",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "AG Kino-Gilde, zmyle + full API & custom integrations",
        "Dedicated CSM + onboarding support",
        <PendingCell>Advanced SLA (<PlaceholderChip>[XXX]%</PlaceholderChip>), weekend support</PendingCell>,
        <PendingCell><div>P0: 15 min</div><div>P1: 30 min</div><div>P2: 2h</div></PendingCell>,
        <PendingCell><div>P0: immediate workaround / few hours</div><div>P1: 4–8h</div><div>P2: 24h</div></PendingCell>,
        <PendingCell>Yes</PendingCell>,
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
