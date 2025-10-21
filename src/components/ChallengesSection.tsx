import { MessageSquareOff, TrendingDown, Clock, BarChart3 } from "lucide-react";

export const ChallengesSection = () => {
  const challenges = [
    {
      icon: MessageSquareOff,
      title: "Atendimento travado",
      description: "sua equipe não dá conta das mensagens.",
    },
    {
      icon: TrendingDown,
      title: "Vendas perdidas",
      description: "pacientes em potencial desistem antes do agendamento.",
    },
    {
      icon: Clock,
      title: "Respostas lentas",
      description: "o atendimento só acontece no horário comercial.",
    },
    {
      icon: BarChart3,
      title: "Falta de clareza",
      description: "você não sabe de onde vêm seus pacientes nem onde está perdendo oportunidades.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-deep-black to-deep-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-exo font-bold text-pure-white text-center mb-12">
          Você se identifica com alguns desses desafios?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-deep-black to-azuri-blue/10 border border-azuri-blue/20 p-8 rounded-2xl hover:border-azuri-blue/50 transition-all duration-300 hover:scale-105"
              >
                <Icon className="h-12 w-12 text-azuri-blue mb-4" />
                <h3 className="text-xl font-exo font-bold text-pure-white mb-2">
                  {challenge.title}
                </h3>
                <p className="text-titanium-gray leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
