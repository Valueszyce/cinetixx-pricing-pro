import logo from "@/assets/cinetixx-logo.svg";

const Navbar = () => (
  <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <img
        src={logo}
        alt="Cinetixx"
        className="h-8"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://cinetixx.pl/assets/img/logos/logo.svg";
        }}
      />
      <a
        href="#pricing"
        className="hidden sm:inline-flex px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-cinema-red-hover transition-colors"
      >
        Get Started
      </a>
    </div>
  </nav>
);

export default Navbar;
