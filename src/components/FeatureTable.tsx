import React from "react";
import { Check, Minus } from "lucide-react";
import PlaceholderChip from "./PlaceholderChip";
import { PendingCell, GreenCell } from "./PendingBadge";

type CellValue = string | "check" | "dash" | React.ReactNode;

interface PendingConfig {
  allTiers?: boolean;
  tierIndices?: number[];
}

interface FeatureRow {
  label: string;
  values: CellValue[];
  pending?: PendingConfig;
  green?: PendingConfig;
  indent?: boolean;
  subHeader?: boolean;
}

interface FeatureGroup {
  title: string;
  rows: FeatureRow[];
}

const groups: FeatureGroup[] = [
  {
    title: "Infrastructure",
    rows: [
      { label: "Number of locations", values: ["1 location", "2 locations/3 locations (Add-on)", "3 locations +", "3 locations +"] },
      { label: "Number of POS total", values: ["4 POS", "8 POS/12 POS (Add-on)", "Unlimited POS + mobile POS included", "Unlimited POS + mobile POS included"] },
      { label: "Number of ticket included total", values: ["15,000", "25,000", "40,000", "75,000+"] },
      { label: "Number of extra ticket if cinema choose selling online through cinetixx", values: ["1,000", "2,000", "6,000", "n/a"] },
      { label: "Commission per ticket above threshold", values: ["", "", "", ""], subHeader: true },
      { label: "Offline", values: ["€0.105", "€0.095", "€0.880", "dash"], indent: true },
      { label: "Online", values: ["€0.105", "€0.095", "€0.880", "dash"], indent: true },
      { label: "API commission per ticket", values: ["0.11-0.15", "0.11-0.15", "0.11-0.15", "dash"], indent: true },
    ],
  },
  {
    title: "Features",
    rows: [
      { label: "OTC sales", values: ["check", "check", "check", "check"] },
      { label: "TSE", values: ["check", "check", "check", "check"] },
      { label: "Program planning", values: ["check", "check", "check", "check"] },
    ],
  },
  {
    title: "Operations",
    rows: [
      { label: "Concessions / Inventory management", values: ["Concessions", "Concessions + Basic inventory management", "Concessions + advanced inventory management", "Concessions + advanced inventory management"] },
      { label: "Online Sales", values: ["check", "check", "check", "check"] },
    ],
  },
  {
    title: "Insights",
    rows: [
      { label: "Reporting", values: ["Basic internal reporting", "Better internal reporting", "Best internal reporting", "Group level reporting & analytics"] },
    ],
  },
  {
    title: "Payments",
    rows: [
      { label: "Payment provider", values: ["Y-Pay", "API for non Y-Pay", "API for non Y-Pay", "API for non Y-Pay, custom API Integration"] },
    ],
  },
  {
    title: "Marketing",
    rows: [
      { label: "Marketing tools", values: ["Discounting", "Discounting, Vouchers, Newsletter", "Discounting, Vouchers and loyalty items, Newsletter", "Discounting, Vouchers and loyalty items, Newsletter"], green: { tierIndices: [1, 2, 3] } },
    ],
  },
  {
    title: "Integrations",
    rows: [
      { label: "Online Ticketing / Additional Sales Channels", values: ["Kinoheld", "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de", "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de", "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de, full API + custom integrations"] },
      { label: "Services providers API", values: ["König Filmdispo, One Cinema TMS, DATEV API, Acardo", "König Filmdispo, One Cinema TMS, DATEV API, Acardo", "König Filmdispo, One Cinema TMS, DATEV API, Acardo", "König Filmdispo, One Cinema TMS, DATEV API, Acardo"] },
      { label: "Loyalty & Voucher / Discount Programs API", values: ["None", "AG Kino-Gild, zmyle", "AG Kino-Gild, zmyle", "AG Kino-Gild, zmyle, full API + custom integrations"] },
    ],
  },
  {
    title: "Support & SLA",
    rows: [
      { label: "Customer support", values: ["Handling Bugs, B2B support extra paid", "B2B support included 2nd level", "B2B support on the weekends", "Dedicated customer support manager, onboarding and implementation support"] },
      {
        label: "SLA & priority incident handling",
        values: [
          <>Basic SLA (<PlaceholderChip>[XX]%</PlaceholderChip>), business hours support</>,
          <>Enhanced SLA (<PlaceholderChip>[YYY]%</PlaceholderChip>), extended support hours</>,
          <>Advanced SLA (<PlaceholderChip>[ZZZ]%</PlaceholderChip>, weekend support)</>,
          <>Advanced SLA (<PlaceholderChip>[XXX]%</PlaceholderChip>, weekend support)</>,
        ],
      },
      {
        label: "Response time",
        values: [
          <><div>P0: 4h</div><div>P1: 6h</div><div>P2: 8h</div></>,
          <><div>P0: 2h</div><div>P1: 4h</div><div>P2: 6h</div></>,
          <><div>P0: 1h</div><div>P1: 2h</div><div>P2: 4h</div></>,
          <><div>P0: 15 min</div><div>P1: 30 min</div><div>P2: 2h</div></>,
        ],
      },
      {
        label: "Resolution time",
        values: [
          "Best-effort basis (no resolution time commitment)",
          <><div>P0: 24h</div><div>P1: 48h</div></>,
          <><div>P0: 8–12h</div><div>P1: 24h</div></>,
          <><div>P0: immediate workaround / few hours</div><div>P1: 4–8h</div><div>P2: 24h</div></>,
        ],
      },
      { label: "Advanced user management & security", values: ["dash", "dash", "dash", "YES"] },
    ],
  },
];
const tierNames = ["Core", "Grow", "Scale", "Strategic partnership"];

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
                    {g.title}
                  </td>
                </tr>
                {g.rows.map((row, ri) => {
                  if (row.subHeader) {
                    return (
                      <tr key={row.label}>
                        <td colSpan={5} className="pt-3 pb-1 px-4 font-medium text-xs text-foreground sticky left-0 bg-background z-10">
                          {row.label}
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={row.label} className={ri % 2 === 0 ? "bg-secondary/30" : ""}>
                      <td className={`py-3 px-4 font-medium text-muted-foreground sticky left-0 bg-inherit z-10 ${row.indent ? "pl-8" : ""}`}>{row.label}</td>
                      {row.values.map((v, vi) => {
                        const isPending = row.pending?.allTiers || row.pending?.tierIndices?.includes(vi);
                        const isGreen = row.green?.allTiers || row.green?.tierIndices?.includes(vi);
                        return (
                          <td key={vi} className="py-3 px-4 text-center">
                            {isPending ? (
                              <PendingCell>{renderCell(v)}</PendingCell>
                            ) : isGreen ? (
                              <GreenCell>{renderCell(v)}</GreenCell>
                            ) : (
                              renderCell(v)
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default FeatureTable;
