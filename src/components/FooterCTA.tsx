const FooterCTA = ({ onBookDemo }: { onBookDemo: () => void }) => (
  <section
    className="py-20 px-6"
    style={{ background: "linear-gradient(135deg, #1565C0 0%, #1E88E5 100%)" }}
  >
    <div className="container mx-auto text-center max-w-2xl">
      <h2 className="text-3xl font-bold mb-4 text-white">Not sure which plan is right for you?</h2>
      <p className="text-blue-100 mb-8">
        Our team works with cinemas of every size. Let's find your fit.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={onBookDemo}
          className="px-8 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
        >
          Book a Demo
        </button>
        <a
          href="mailto:sprzedaz@cinetixx.pl"
          className="px-8 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white/10 transition-colors"
        >
          Contact Us
        </a>
      </div>
      <div className="text-sm text-blue-100 space-y-1">
        <p>sprzedaz@cinetixx.pl</p>
        <p>+48 571 527 201</p>
      </div>
    </div>
  </section>
);

export default FooterCTA;
