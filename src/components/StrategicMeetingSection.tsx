import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

interface StrategicMeetingSectionProps {
  onOpenModal?: () => void;
}

export const StrategicMeetingSection = ({ onOpenModal }: StrategicMeetingSectionProps) => {
  const handleCTA = () => {
    window.open('https://yayforms.link/8gGJGqV', '_blank');
  };
  const benefits = [
    "Diagnóstico real da sua operação atual",
    "Plano de automação personalizado para o seu negócio",
    "Resultados mensuráveis e exemplos reais de aumento de agendamentos",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Sparkles className="h-8 w-8 text-azuri-blue" />
            <h2 className="text-3xl md:text-4xl font-exo font-bold text-foreground text-center">
              Reunião estratégica exclusiva
            </h2>
          </div>
          
          <p className="text-xl text-foreground mb-6 text-center font-medium">
            Reunião estratégica individual para clínicas que desejam escalar com inteligência
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
            Descubra, em uma sessão personalizada de 45 minutos, como transformar o WhatsApp e o Instagram da sua clínica em um sistema inteligente que responde, qualifica e agenda pacientes automaticamente.
          </p>
          
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Check className="h-6 w-6 text-azuri-blue" />
                </div>
                <p className="text-foreground text-lg">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-azuri-blue/10 border-2 border-azuri-blue rounded-2xl p-6 mb-8">
            <p className="text-foreground text-center font-medium leading-relaxed">
              Por ser uma sessão individual, as vagas são limitadas e cada candidatura é analisada para garantir que o encontro gere resultados reais para a clínica selecionada.
            </p>
          </div>
          
          <div className="text-center">
            <Button
              onClick={handleCTA}
              size="lg"
              className="bg-azuri-blue hover:bg-azuri-blue/90 text-pure-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-[0_10px_40px_-10px_hsl(193_55%_54%/0.5)] hover:shadow-[0_15px_50px_-10px_hsl(193_55%_54%/0.7)] transition-all duration-300 hover:scale-105"
            >
              Quero me inscrever para a seleção de vagas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
