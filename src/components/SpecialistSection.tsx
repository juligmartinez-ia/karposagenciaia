import julianaImage from "@/assets/juliana-martinez.jpg";
import { Quote } from "lucide-react";

export const SpecialistSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-black to-deep-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-exo font-bold text-pure-white text-center mb-12">
          Conheça seu especialista
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-azuri-blue/30 rounded-full blur-2xl animate-pulse" />
                <img
                  src={julianaImage}
                  alt="Juliana Martinez - CEO da Agência KARPÓS"
                  className="relative w-64 h-64 rounded-full object-cover border-4 border-azuri-blue/50 shadow-[0_0_40px_hsl(193_55%_54%/0.3)]"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-pure-white leading-relaxed space-y-4">
                <p>
                  <strong className="text-azuri-blue">Juliana Martinez</strong> é CEO e fundadora da Agência KARPÓS, estrategista digital especializada em crescimento e automação para negócios na área da saúde.
                </p>
                <p>
                  Nos últimos 5 anos, atuou como estrategista em lançamentos e mentorias de profissionais da saúde, conduzindo projetos que ultrapassaram múltiplos 6 dígitos em faturamento.
                </p>
                <p>
                  Sua experiência prática em campanhas, posicionamento e funis de conversão levou a desenvolver um novo modelo de operação para clínicas: o uso da inteligência artificial aplicada ao atendimento e às vendas, com foco em resultados reais, eficiência e humanização.
                </p>
              </div>
              
              <div className="relative bg-azuri-blue/10 border-l-4 border-azuri-blue p-6 rounded-r-2xl">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-azuri-blue/30" />
                <p className="text-pure-white italic text-lg pl-8">
                  "Enquanto você cuida da saúde de seus pacientes, nós cuidamos da saúde de sua operação."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
