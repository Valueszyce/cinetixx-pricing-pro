import React from "react";
import { Check, Minus } from "lucide-react";
import PlaceholderChip from "./PlaceholderChip";
import { PendingCell } from "./PendingBadge";

type CellValue = string | "check" | "dash" | React.ReactNode;

interface PendingConfig {
  allTiers?: boolean;
  tierIndices?: number[];
}

interface FeatureRow {
  label: string;
  values: CellValue[];
  pending?: PendingConfig;
}

interface FeatureGroup {
  icon: string;
  title: string;
  rows: FeatureRow[];
}

const groups: FeatureGroup[] = [
  {
    icon: "🏢",
    title: "Infrastructure",
    rows: [
      { label: "Number of locations", values: ["1 location", "2 locations", "3+ locations", "3+ locations (volume discount)"] },
      { label: "Number of POS", values: ["3 POS per location", "6 POS per location", "Unlimited + mobile POS", "Unlimited + mobile POS"] },
      { label: "Number of tickets included", values: ["20,000", "30,000", "40,000", "100,000"] },
      { label: "Commission per offline ticket above threshold", values: ["€0.08", "€0.075", "€0.065", "€0.058"] },
    ],
  },
  {
    icon: "🎟️",
    title: "Sales",
    rows: [
      { label: "OTC sales", values: ["check", "check", "check", "check"] },
      { label: "TSE", values: ["check", "check", "check", "check"] },
      { label: "Online Sales", values: ["check", "check", "check", "check"] },
      { label: "Program planning", values: ["check", "check", "check", "check"] },
    ],
  },
  {
    icon: "🍿",
    title: "Operations",
    rows: [
      {
        label: "Concessions / Inventory",
        values: ["Concessions", "Concessions + Basic inv.", "Concessions + Advanced inv.", "Centralized across locations"],
        pending: { tierIndices: [3] },
      },
    ],
  },
  {
    icon: "📊",
    title: "Insights",
    rows: [
      {
        label: "Reporting",
        values: ["Basic", "Enhanced", "Advanced", "Group-level analytics"],
        pending: { tierIndices: [3] },
      },
    ],
  },
  {
    icon: "💳",
    title: "Payments",
    rows: [
      { label: "Payment provider", values: ["Y-Pay", "Y-Pay + API", "Y-Pay + API", "Volume-based, negotiated"] },
    ],
  },
  {
    icon: "🤝",
    title: "Support",
    rows: [
      { label: "Customer support", values: ["Bug handling", "B2B 2nd level", "B2B + weekends", "Dedicated CSM + onboarding"] },
      {
        label: "SLA & priority incident handling",
        values: [
          <>Basic SLA (<PlaceholderChip>[XX]%</PlaceholderChip>), business hours support</>,
          <>Enhanced SLA (<PlaceholderChip>[YYY]%</PlaceholderChip>), extended support hours</>,
          <>Advanced SLA (<PlaceholderChip>[ZZZ]%</PlaceholderChip>), weekend support</>,
          <>Advanced SLA (<PlaceholderChip>[XXX]%</PlaceholderChip>), weekend support</>,
        ],
        pending: { allTiers: true },
      },
      {
        label: "Response time",
        values: [
          <><div>P0: 4h</div><div>P1: 6h</div><div>P2: 8h</div></>,
          <><div>P0: 2h</div><div>P1: 4h</div><div>P2: 6h</div></>,
          <><div>P0: 1h</div><div>P1: 2h</div><div>P2: 4h</div></>,
          <><div>P0: 15 min</div><div>P1: 30 min</div><div>P2: 2h</div></>,
        ],
        pending: { allTiers: true },
      },
      {
        label: "Resolution time",
        values: [
          "Best-effort basis (no resolution time commitment)",
          <><div>P0: 24h</div><div>P1: 48h</div></>,
          <><div>P0: 8–12h</div><div>P1: 24h</div></>,
          <><div>P0: immediate workaround / few hours</div><div>P1: 4–8h</div><div>P2: 24h</div></>,
        ],
        pending: { allTiers: true },
      },
    ],
  },
  {
    icon: "📣",
    title: "Marketing",
    rows: [
      { label: "Marketing tools", values: ["Discounting", "Discounting, Vouchers", "Discounting, Vouchers and loyalty items, Newsletter", "Discounting, Vouchers and loyalty items, Newsletter"] },
    ],
  },
  {
    icon: "🔌",
    title: "Integrations",
    rows: [
      { label: "Services providers API", values: ["dash", "König Filmdispo, One Cinema TMS, DATEV API", "König Filmdispo, One Cinema TMS, DATEV API, Acardo", "König Filmdispo, One Cinema TMS, DATEV API, Acardo"] },
      { label: "Online Ticketing / Sales Channels", values: ["Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de", "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de", "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de", "All + full API & custom integrations"] },
      { label: "Loyalty & Voucher Programs API", values: ["dash", "AG Kino-Gilde, zmyle", "AG Kino-Gilde, zmyle", "All + full API & custom integrations"] },
    ],
  },
  {
    icon: "🔐",
    title: "Security",
    rows: [
      {
        label: "Advanced user management & security",
        values: ["dash", "dash", "dash", "check"],
        pending: { tierIndices: [3] },
      },
    ],
  },
];

const tierNames = ["Good", "Better", "Best", "Enterprise"];

const renderCell = (val: CellValue) => {
  if (val === "check") return <Check className="w-4 h-4 text-primary mx-auto" />;
  if (val === "dash") return <Minus className="w-4 h-4 text-muted-foreground mx-auto" />;
  return <span className="text-xs">{val}</span>;
};

const FeatureTable = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Compare all features</h2>
      <p className="text-muted-foreground text-center mb-10">See exactly what's included in each plan.</p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium text-muted-foreground sticky left-0 bg-background z-10 w-52"></th>
              {tierNames.map((t) => (
                <th key={t} className="py-3 px-4 font-bold text-center">{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((g) => (
              <React.Fragment key={g.title}>
                <tr>
                  <td colSpan={5} className="pt-6 pb-2 px-4 font-semibold text-sm text-muted-foreground sticky left-0 bg-background z-10">
                    <span className="mr-2">{g.icon}</span>{g.title}
                  </td>
                </tr>
                {g.rows.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 === 0 ? "bg-secondary/30" : ""}>
                    <td className="py-3 px-4 font-medium text-muted-foreground sticky left-0 bg-inherit z-10">{row.label}</td>
                    {row.values.map((v, vi) => {
                      const isPending = row.pending?.allTiers || row.pending?.tierIndices?.includes(vi);
                      return (
                        <td key={vi} className="py-3 px-4 text-center">
                          {isPending ? (
                            <PendingCell>{renderCell(v)}</PendingCell>
                          ) : (
                            renderCell(v)
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default FeatureTable;
