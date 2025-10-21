import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";

interface ApplicationSectionProps {
  onOpenModal: () => void;
}

export const ApplicationSection = ({ onOpenModal }: ApplicationSectionProps) => {
  const bonuses = [
    "Mapeamento completo do funil de atendimento da sua clínica",
    "Checklist de automação inteligente para WhatsApp e Instagram",
    "Plano de ação personalizado para melhorar o atendimento e aumentar agendamentos",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-exo font-bold text-foreground text-center mb-6">
            Candidate sua clínica para a reunião estratégica
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
            As vagas são limitadas e analisadas individualmente. Preencha o formulário para participar da próxima rodada de reuniões e receba um diagnóstico personalizado de sua operação.
          </p>
          
          <div className="bg-gradient-to-br from-azuri-blue/10 to-azuri-blue/5 border border-azuri-blue/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="h-8 w-8 text-azuri-blue" />
              <h3 className="text-2xl font-exo font-bold text-foreground">
                Bônus exclusivos
              </h3>
            </div>
            
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <p className="text-foreground text-lg">{bonus}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="bg-azuri-blue hover:bg-azuri-blue/90 text-pure-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-[0_10px_40px_-10px_hsl(193_55%_54%/0.5)] hover:shadow-[0_15px_50px_-10px_hsl(193_55%_54%/0.7)] transition-all duration-300 hover:scale-105"
            >
              Quero me candidatar agora à seleção da KARPÓS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
