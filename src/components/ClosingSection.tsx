import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";

interface ClosingSectionProps {
  onOpenModal?: () => void;
}

export const ClosingSection = ({ onOpenModal }: ClosingSectionProps) => {
  const handleCTA = () => {
    window.open('https://yayforms.link/8gGJGqV', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-deep-black via-azuri-blue/20 to-deep-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-azuri-blue/20 mb-6 animate-float">
            <Sprout className="h-10 w-10 text-azuri-blue" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-exo font-bold text-pure-white mb-6">
            Você chegou até aqui por um motivo
          </h2>
          
          <p className="text-lg text-titanium-gray mb-8 leading-relaxed">
            Se sua clínica já investe em marketing, mas ainda perde pacientes por falta de um atendimento rápido, estruturado e inteligente, esta reunião é para você.
          </p>
          
          <p className="text-xl text-pure-white mb-8 font-medium">
            Chegou a hora de automatizar com inteligência e frutificar com a KARPÓS. 🌱
          </p>
          
          <Button
            onClick={handleCTA}
            size="lg"
            className="bg-azuri-blue hover:bg-azuri-blue/90 text-pure-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-[0_10px_40px_-10px_hsl(193_55%_54%/0.5)] hover:shadow-[0_15px_50px_-10px_hsl(193_55%_54%/0.7)] transition-all duration-300 hover:scale-105"
          >
            Quero me candidatar à seleção
          </Button>
        </div>
      </div>
    </section>
  );
};
