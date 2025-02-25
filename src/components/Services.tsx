
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Gestão de Inovação",
    description: "Gerir bem a INOVAÇÃO é essencial para alcançar resultados transformadores.",
    icon: "🎯",
    color: "bg-[#F2FCE2]"
  },
  {
    title: "Financiamento FINEP",
    description: "Garantir o tempo necessário para sua inovação gerar resultados.",
    icon: "💡",
    color: "bg-[#D3E4FD]"
  },
  {
    title: "Gestão de Projetos",
    description: "Gerir bem os PROJETOS da empresa é fundamental para se obter resultados.",
    icon: "📊",
    color: "bg-[#FEF7CD]"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            NOSSOS <span className="text-primary">SERVIÇOS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com uma abordagem <span className="font-semibold text-primary">INOVADORA</span> e{" "}
            <span className="font-semibold text-primary">ESTRATÉGICA</span>, nossos serviços
            são projetados para atender às necessidades únicas de sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.color} border-none hover:shadow-xl transition-all duration-300 group overflow-hidden`}
            >
              <CardContent className="p-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{service.description}</p>
                <Button 
                  variant="link" 
                  className="text-primary font-semibold hover:text-primary/80 p-0 text-lg group"
                >
                  Saiba Mais 
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
