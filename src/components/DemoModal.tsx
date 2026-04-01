import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-card border-border text-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {submitted ? "Thank you!" : "Book a Demo"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {submitted
              ? "We'll be in touch shortly."
              : "Tell us about your cinema and we'll set up a personalized walkthrough."}
          </DialogDescription>
        </DialogHeader>

        {!submitted && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "cinema", label: "Cinema name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "locations", label: "Number of locations", type: "number" },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-sm font-medium mb-1.5">{f.label}</label>
                <input
                  required
                  type={f.type}
                  className="w-full rounded-lg bg-secondary border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                rows={3}
                className="w-full rounded-lg bg-secondary border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-cinema-red-hover transition-colors"
            >
              Submit
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
