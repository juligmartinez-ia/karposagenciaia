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
      {/* Full screen background image with transparency */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-deep-black/50" />

      {/* Centered Content */}
      <div className="relative flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-4xl animate-fade-in-up w-full text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-exo font-bold text-pure-white mb-4 md:mb-6 leading-tight">
            Automatize o atendimento da sua clínica com inteligência artificial, responda pacientes em segundos, 24h por dia, e reduza drasticamente o custo com equipe sem perder nenhum agendamento.
          </h1>
          
          <p className="text-sm md:text-lg lg:text-xl text-pure-white/80 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
            Sem contratar mais equipe. Sem perder o toque humano. Com automação aplicada ao WhatsApp e Instagram.
          </p>
          
          <Button
            onClick={handleCTA}
            size="lg"
            className="bg-azuri-blue hover:bg-azuri-blue/90 text-deep-black font-bold px-6 sm:px-10 py-5 md:py-6 text-sm md:text-base lg:text-lg rounded-2xl shadow-[0_10px_40px_-10px_hsl(193_55%_54%/0.6)] hover:shadow-[0_15px_50px_-10px_hsl(193_55%_54%/0.8)] transition-all duration-300 hover:scale-105"
          >
            Quero me candidatar à reunião estratégica
            <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
          </Button>
          
          <p className="text-xs md:text-sm text-pure-white/70 mt-3 md:mt-4 italic">
            Vagas limitadas e sujeitas à análise da equipe KARPÓS
          </p>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hidden md:block">
        <div className="w-16 h-16 border-2 border-azuri-blue/30 rounded-full" />
      </div>
    </section>
  );
};
