const items = [
  {
    icon: "🔧",
    title: "Device Integration",
    description: "Scanners, Kiosk/SCO terminals, digital signage hardware — professional one-time integration.",
  },
  {
    icon: "🔒",
    title: "Access Control Scanner Integration",
    description: "One-time setup for entry scanning and access control systems.",
  },
  {
    icon: "🎓",
    title: "Cinema Academy & Consulting",
    description: "Expert consulting and training for profitable cinema operation.",
  },
  {
    icon: "🌐",
    title: "White-Label Website Build",
    description: "One-time development fee for your branded website with integrated online ticketing. Monthly hosting sold separately as an add-on.",
  },
];

const OneTimePayments = () => (
  <section className="py-16 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">One-time setup services</h2>
      <p className="text-muted-foreground text-center mb-10">Get started right with professional implementation.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.title} className="glass-card-alt p-6">
            <div className="text-2xl mb-3">{item.icon}</div>
            <h3 className="text-base font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
              Pricing on request
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OneTimePayments;
