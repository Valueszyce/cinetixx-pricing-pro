import { useRef, useEffect, useState } from "react";

const addons = [
  {
    icon: "📺",
    title: "Digital Signage",
    description: "Manage promotional content across your screens. Promo rate: from 1 EUR base fee + per-screen rental fee. Hardware rental option available.",
  },
  {
    icon: "👥",
    title: "Staff Scheduling",
    description: "Integrated staff scheduling and management module. 5–10 EUR per person per month.",
  },
  {
    icon: "🌐",
    title: "White-Label Website + Online Ticketing",
    description: "A fully branded website with integrated online ticketing. Earn kickback revenue from on-site advertising. Monthly hosting fee applies — build cost is a separate one-time payment.",
  },
  {
    icon: "🍿",
    title: "Digital Waiter at Cinema Seats",
    description: "Let guests order food and drinks directly from their seats via a digital ordering interface. Pricing on request.",
  },
];

const AddOns = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Enhance your plan with Add-ons</h2>
      <p className="text-muted-foreground text-center mb-10">Available for all tiers. Add only what you need.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {addons.map((a, i) => (
          <AddonCard key={a.title} addon={a} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const AddonCard = ({ addon, index }: { addon: typeof addons[0]; index: number }) => {
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
      className="glass-card p-6 hover:border-primary/40 transition-colors opacity-0"
      style={{
        animation: visible ? `fade-up 0.6s ease-out ${index * 0.1}s forwards` : "none",
      }}
    >
      <div className="text-3xl mb-3">{addon.icon}</div>
      <h3 className="text-lg font-bold mb-2">{addon.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
      <span className="text-sm text-primary font-medium cursor-pointer hover:underline">
        Ask about this add-on →
      </span>
    </div>
  );
};

export default AddOns;
