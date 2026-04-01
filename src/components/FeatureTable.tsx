import { Check, Minus } from "lucide-react";
import PlaceholderChip from "./PlaceholderChip";

type CellValue = string | "check" | "dash" | React.ReactNode;

interface FeatureRow {
  label: string;
  values: CellValue[];
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
      { label: "Number of POS", values: ["2 POS per location", "5 POS per location", "Unlimited + mobile POS", "Unlimited + mobile POS"] },
    ],
  },
  {
    icon: "🎟️",
    title: "Sales",
    rows: [
      { label: "OTC sales", values: ["check", "check", "check", "check"] },
      { label: "TSE", values: ["check", "check", "check", "check"] },
      {
        label: "Online Sales commission",
        values: [
          <><PlaceholderChip>[Z]%</PlaceholderChip></>,
          <><PlaceholderChip>[Y]%</PlaceholderChip></>,
          <><PlaceholderChip>[X]%</PlaceholderChip></>,
          "Negotiated",
        ],
      },
    ],
  },
  {
    icon: "🍿",
    title: "Operations",
    rows: [
      { label: "Program planning", values: ["check", "check", "check", "check"] },
      { label: "Concessions / Inventory", values: ["Concessions", "Concessions + Basic inv.", "Concessions + Advanced inv.", "Centralized across locations"] },
    ],
  },
  {
    icon: "📊",
    title: "Insights",
    rows: [
      { label: "Reporting", values: ["Basic", "Enhanced", "Advanced", "Group-level analytics"] },
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
    ],
  },
  {
    icon: "📣",
    title: "Marketing",
    rows: [
      { label: "Marketing tools", values: ["Discounting", "Newsletter + Discounting", "Vouchers & Loyalty", "Custom"] },
    ],
  },
  {
    icon: "🔌",
    title: "Integrations",
    rows: [
      { label: "Services providers API", values: ["König Filmdispo, One Cinema TMS", "König Filmdispo, One Cinema TMS, DATEV API", "König Filmdispo, One Cinema TMS, DATEV API, Acardo", "König Filmdispo, One Cinema TMS, DATEV API, Acardo"] },
      { label: "Online Ticketing / Sales Channels", values: ["Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de", "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de", "Kinoheld, CINEAMO, Cinfinity, Cineville, Rausgegangen.de", "All + full API & custom integrations"] },
      { label: "Loyalty & Voucher Programs API", values: ["AG Kino-Gilde (paid)", "AG Kino-Gilde, zmyle", "AG Kino-Gilde, zmyle", "All + full API & custom integrations"] },
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
              <>
                <tr key={g.title}>
                  <td colSpan={5} className="pt-6 pb-2 px-4 font-semibold text-sm text-muted-foreground sticky left-0 bg-background z-10">
                    <span className="mr-2">{g.icon}</span>{g.title}
                  </td>
                </tr>
                {g.rows.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 === 0 ? "bg-secondary/30" : ""}>
                    <td className="py-3 px-4 font-medium text-muted-foreground sticky left-0 bg-inherit z-10">{row.label}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="py-3 px-4 text-center">{renderCell(v)}</td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default FeatureTable;
