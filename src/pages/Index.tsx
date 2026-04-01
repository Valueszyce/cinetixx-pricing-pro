import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PricingCards from "@/components/PricingCards";
import FeatureTable from "@/components/FeatureTable";
import AddOns from "@/components/AddOns";
import OneTimePayments from "@/components/OneTimePayments";
import FooterCTA from "@/components/FooterCTA";
import DemoModal from "@/components/DemoModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <PricingCards onBookDemo={() => setDemoOpen(true)} />
      <FeatureTable />
      <AddOns />
      <OneTimePayments />
      <FooterCTA onBookDemo={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default Index;
