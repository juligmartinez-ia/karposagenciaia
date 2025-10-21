import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { LosingMoneySection } from "@/components/LosingMoneySection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { StrategicMeetingSection } from "@/components/StrategicMeetingSection";
import { DiscoverySection } from "@/components/DiscoverySection";
import { WhyKarposSection } from "@/components/WhyKarposSection";
import { SpecialistSection } from "@/components/SpecialistSection";
import { ApplicationSection } from "@/components/ApplicationSection";
import { ClosingSection } from "@/components/ClosingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LosingMoneySection />
      <ChallengesSection />
      <StrategicMeetingSection />
      <DiscoverySection />
      <WhyKarposSection />
      <SpecialistSection />
      <ApplicationSection />
      <ClosingSection />
      <Footer />
    </main>
  );
};

export default Index;
