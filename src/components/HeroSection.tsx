import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

interface HeroSectionProps {
  onOpenModal?: () => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  const handleCTA = () => {
    window.open('https://yayforms.link/8gGJGqV', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-deep-black overflow-hidden">
      {/* Mobile: Image on top, Desktop: Split layout */}
      <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen">
        {/* Image Section - Top on mobile, Right on desktop */}
        <div className="relative order-1 md:order-2 h-[50vh] md:h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroBackground})`,
            }}
          />
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent via-transparent to-deep-black/80 md:to-deep-black" />
        </div>

        {/* Content Section - Bottom on mobile, Left on desktop */}
        <div className="relative order-2 md:order-1 flex items-center justify-center px-6 py-12 md:py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-exo font-bold text-pure-white mb-6 leading-tight">
              Transforme o atendimento de sua clínica com inteligência artificial e reduza custos de equipe enquanto mantém seus agendamentos ativos 24h por dia
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-pure-white/80 mb-8 leading-relaxed">
              Sem contratar mais equipe. Sem perder o toque humano. Com automação aplicada ao WhatsApp e Instagram.
            </p>
            
            <Button
              onClick={handleCTA}
              size="lg"
              className="bg-azuri-blue hover:bg-azuri-blue/90 text-deep-black font-bold px-6 sm:px-10 py-6 text-base sm:text-lg rounded-2xl shadow-[0_10px_40px_-10px_hsl(193_55%_54%/0.6)] hover:shadow-[0_15px_50px_-10px_hsl(193_55%_54%/0.8)] transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Quero me candidatar à reunião estratégica
              <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
            </Button>
            
            <p className="text-xs md:text-sm text-pure-white/70 mt-4 italic">
              Vagas limitadas e sujeitas à análise da equipe KARPÓS
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <div className="w-16 h-16 border-2 border-azuri-blue/30 rounded-full" />
      </div>
    </section>
  );
};
