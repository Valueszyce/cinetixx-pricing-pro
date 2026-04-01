const FooterCTA = ({ onBookDemo }: { onBookDemo: () => void }) => (
  <section className="py-20 px-6 border-t border-border">
    <div className="container mx-auto text-center max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
      <p className="text-muted-foreground mb-8">
        Our team works with cinemas of every size. Let's find your fit.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={onBookDemo}
          className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-cinema-red-hover transition-colors"
        >
          Book a Demo
        </button>
        <a
          href="mailto:sprzedaz@cinetixx.pl"
          className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Contact Us
        </a>
      </div>
      <div className="text-sm text-muted-foreground space-y-1">
        <p>sprzedaz@cinetixx.pl</p>
        <p>+48 571 527 201</p>
      </div>
    </div>
  </section>
);

export default FooterCTA;
