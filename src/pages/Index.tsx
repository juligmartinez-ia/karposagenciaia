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
import { ApplicationModal } from "@/components/ApplicationModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <LosingMoneySection onOpenModal={() => setIsModalOpen(true)} />
      <ChallengesSection />
      <StrategicMeetingSection onOpenModal={() => setIsModalOpen(true)} />
      <DiscoverySection />
      <WhyKarposSection />
      <SpecialistSection />
      <ApplicationSection onOpenModal={() => setIsModalOpen(true)} />
      <ClosingSection onOpenModal={() => setIsModalOpen(true)} />
      
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
};

export default Index;
