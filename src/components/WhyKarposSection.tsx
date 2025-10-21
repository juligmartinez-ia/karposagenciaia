import { Heart, TrendingUp, Shield, Stethoscope } from "lucide-react";

export const WhyKarposSection = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Tecnologia humanizada",
      description: "IA treinada com a linguagem e valores da sua clínica",
    },
    {
      icon: TrendingUp,
      title: "Resultados reais",
      description: "aumento de agendamentos e redução de custos operacionais",
    },
    {
      icon: Shield,
      title: "Segurança oficial",
      description: "automação com API homologada pela Meta",
    },
    {
      icon: Stethoscope,
      title: "Foco em clínicas",
      description: "criado para a rotina do setor da saúde",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-exo font-bold text-foreground text-center mb-12">
          Por que a solução da KARPÓS funciona
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card hover:bg-card-dark hover:text-card-dark-foreground transition-all duration-300 hover:scale-105 border border-border hover:border-azuri-blue/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-azuri-blue/10 mb-4">
                  <Icon className="h-8 w-8 text-azuri-blue" />
                </div>
                <h3 className="text-xl font-exo font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
