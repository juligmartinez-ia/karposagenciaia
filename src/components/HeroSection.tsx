import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-black via-deep-black to-azuri-blue/20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#41B3D210_1px,transparent_1px),linear-gradient(to_bottom,#41B3D210_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-exo font-bold text-pure-white mb-6 leading-tight">
            Transforme o atendimento de sua clínica com inteligência artificial e reduza custos de equipe enquanto mantém seus agendamentos ativos 24h por dia
          </h1>
          
          <p className="text-lg md:text-xl text-titanium-gray mb-8 leading-relaxed">
            Sem contratar mais equipe. Sem perder o toque humano. Com automação aplicada ao WhatsApp e Instagram.
          </p>
          
          <Button
            onClick={onOpenModal}
            size="lg"
            className="bg-azuri-blue hover:bg-azuri-blue/90 text-pure-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-[0_10px_40px_-10px_hsl(193_55%_54%/0.5)] hover:shadow-[0_15px_50px_-10px_hsl(193_55%_54%/0.7)] transition-all duration-300 hover:scale-105"
          >
            Quero me candidatar à reunião estratégica
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-sm text-titanium-gray mt-4 italic">
            Vagas limitadas e sujeitas à análise da equipe KARPÓS
          </p>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-16 h-16 border-2 border-azuri-blue/30 rounded-full" />
      </div>
    </section>
  );
};
