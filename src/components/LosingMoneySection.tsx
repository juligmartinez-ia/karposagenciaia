import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, Users, TrendingDown } from "lucide-react";

interface LosingMoneySectionProps {
  onOpenModal?: () => void;
}

export const LosingMoneySection = ({ onOpenModal }: LosingMoneySectionProps) => {
  const handleCTA = () => {
    window.open('https://yayforms.link/8gGJGqV', '_blank');
  };
  const problems = [
    {
      icon: Clock,
      text: "Leads chegam fora do horário comercial e não recebem resposta",
    },
    {
      icon: Users,
      text: "Pacientes em potencial desistem antes de serem atendidos",
    },
    {
      icon: TrendingDown,
      text: "Você não tem clareza sobre quantos agendamentos se perdem",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <AlertCircle className="h-8 w-8 text-azuri-blue" />
            <h2 className="text-3xl md:text-4xl font-exo font-bold text-foreground text-center">
              Você está perdendo dinheiro e não percebe
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
            Se sua clínica ainda depende de atendimento manual no WhatsApp, você está deixando dinheiro na mesa. Enquanto seus anúncios e postagens atraem pacientes, oportunidades de agendamento se perdem todos os dias.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="bg-card-dark text-card-dark-foreground p-6 rounded-2xl shadow-[0_4px_16px_-2px_hsl(0_0%_0%/0.2)] hover:shadow-[0_8px_24px_-2px_hsl(193_55%_54%/0.3)] transition-all duration-300"
                >
                  <Icon className="h-10 w-10 text-azuri-blue mb-4" />
                  <p className="text-sm leading-relaxed">{problem.text}</p>
                </div>
              );
            })}
          </div>
          
          <div className="bg-azuri-blue/10 border border-azuri-blue/30 rounded-2xl p-6 mb-8 shadow-lg">
            <p className="text-foreground leading-relaxed text-center">
              A KARPÓS implementa um sistema de atendimento automatizado que responde, qualifica e agenda pacientes em tempo real, 24 horas por dia, 7 dias por semana, mantendo o toque humano de sua clínica.
            </p>
          </div>
          
          <div className="text-center">
            <Button
              onClick={handleCTA}
              variant="outline"
              size="lg"
              className="border-2 border-azuri-blue text-azuri-blue hover:bg-azuri-blue hover:text-pure-white font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Quero participar do processo de seleção
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
