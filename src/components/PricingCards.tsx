import { useRef, useEffect, useState } from "react";
import PlaceholderChip from "./PlaceholderChip";
import { Check, Minus } from "lucide-react";

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
  "OTC sales",
  "TSE",
  "Program planning",
  "Concessions / Inventory mgmt",
  "Online Sales commission",
  "Reporting",
  "Payment provider",
  "Customer support",
  "Marketing tools",
  "Services providers API",
  "Online Ticketing / Sales Channels",
  "Loyalty & Voucher Programs API",
];

const PricingCards = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const tiers: TierData[] = [
    {
      name: "Good",
      descriptors: [
        <><PlaceholderChip>[XXX]</PlaceholderChip> tickets included</>,
        "Highest commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "outlined",
      features: [
        "1 location",
        "2 POS per location",
        { type: "check" },
        { type: "check" },
        { type: "check" },
        "Concessions",
        <><PlaceholderChip>[Z]%</PlaceholderChip> — ticket pool grows when selling online</>,
        "Basic internal reporting",
        "Y-Pay",
        "Bug handling; B2B support as paid add-on",
        "Discounting",
        "König Filmdispo, One Cinema TMS",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "AG Kino-Gilde (additionally paid)",
      ],
    },
    {
      name: "Better",
      descriptors: [
        <><PlaceholderChip>[YYY]</PlaceholderChip> tickets included</>,
        "Medium commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "outlined",
      features: [
        "2 locations",
        "5 POS per location",
        { type: "check" },
        { type: "check" },
        { type: "check" },
        "Concessions + Basic inventory mgmt",
        <><PlaceholderChip>[Y]%</PlaceholderChip> — ticket pool grows when selling online</>,
        "Enhanced internal reporting",
        "Y-Pay + API for non-Y-Pay providers",
        "B2B support included (2nd level)",
        "Newsletter + Discounting",
        "König Filmdispo, One Cinema TMS, DATEV API",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "AG Kino-Gilde, zmyle",
      ],
    },
    {
      name: "Best",
      descriptors: [
        <><PlaceholderChip>[ZZZ]</PlaceholderChip> tickets included</>,
        "Lowest commission per ticket",
      ],
      cta: "Get Started",
      ctaStyle: "solid",
      features: [
        "3+ locations",
        "Unlimited POS + mobile POS",
        { type: "check" },
        { type: "check" },
        { type: "check" },
        "Concessions + Advanced inventory mgmt",
        <><PlaceholderChip>[X]%</PlaceholderChip> — ticket pool grows when selling online</>,
        "Advanced internal reporting",
        "Y-Pay + API for non-Y-Pay providers",
        "B2B support included (weekends incl.)",
        "Vouchers & Loyalty items",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de",
        "AG Kino-Gilde, zmyle",
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
        { type: "check" },
        { type: "check" },
        { type: "check" },
        "Concessions + Centralized inventory across locations",
        "Negotiated — ticket pool grows when selling online",
        "Group-level reporting & analytics",
        "Volume-based discounts, negotiated base fee",
        "Dedicated CSM + onboarding support",
        "Custom",
        "König Filmdispo, One Cinema TMS, DATEV API, Acardo",
        "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de + full API & custom integrations",
        "AG Kino-Gilde, zmyle + full API & custom integrations",
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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="glass-card p-6 flex flex-col opacity-0"
      style={{
        animation: visible ? `fade-up 0.6s ease-out ${index * 0.1}s forwards` : "none",
      }}
    >
      <h3 className="text-2xl font-bold mb-3">{tier.name}</h3>
      <div className="space-y-1 mb-5">
        {tier.descriptors.map((d, i) => (
          <p key={i} className="text-sm text-muted-foreground">{d}</p>
        ))}
      </div>
      <p className="text-sm font-medium text-muted-foreground mb-6">Price on request</p>

      <div className="flex-1 space-y-3 mb-6">
        {tier.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-xs">
            <span className="text-muted-foreground shrink-0 w-24 font-medium">{featureLabels[i]}</span>
            <span className="text-foreground/90">
              {typeof f === "object" && f !== null && "type" in f ? (
                (f as { type: string }).type === "check" ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : (
                  <Minus className="w-4 h-4 text-muted-foreground" />
                )
              ) : (
                f
              )}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={tier.onCtaClick}
        className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${
          tier.ctaStyle === "solid"
            ? "bg-primary text-primary-foreground hover:bg-cinema-red-hover"
            : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        {tier.cta}
      </button>
    </div>
  );
};

export default PricingCards;
