import { CheckCircle2 } from "lucide-react";

export const DiscoverySection = () => {
  const discoveries = [
    "Como capturar e responder pacientes automaticamente pelo WhatsApp e Instagram",
    "Como reduzir custos de equipe sem perder eficiência",
    "Como visualizar todos os números de atendimento em um painel inteligente",
    "Como garantir a segurança total usando a API oficial do WhatsApp",
    "Como automatizar com empatia e personalização",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-deep-black to-azuri-blue/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-exo font-bold text-pure-white text-center mb-12">
            O que você vai descobrir nesta reunião
          </h2>
          
          <div className="space-y-6">
            {discoveries.map((discovery, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-pure-white/5 backdrop-blur-sm border border-azuri-blue/20 p-6 rounded-2xl hover:border-azuri-blue/50 transition-all duration-300"
              >
                <CheckCircle2 className="h-7 w-7 text-azuri-blue flex-shrink-0 mt-1" />
                <p className="text-pure-white text-lg leading-relaxed">{discovery}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
