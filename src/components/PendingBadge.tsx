const PendingBadge = () => (
  <span
    className="inline-block mt-1 text-[10px] font-medium rounded"
    style={{
      background: "#FEF3C7",
      color: "#92400E",
      padding: "2px 6px",
      borderRadius: "4px",
    }}
  >
    Pending discussion
  </span>
);

export const PendingCell = ({ children }: { children: React.ReactNode }) => (
  <div
    className="rounded px-2 py-1"
    style={{
      background: "rgba(251, 191, 36, 0.15)",
      borderLeft: "2px solid #F59E0B",
    }}
  >
    <div>{children}</div>
    <PendingBadge />
  </div>
);

export default PendingBadge;
