
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Gestão de Inovação",
    description: "Gerir bem a INOVAÇÃO é essencial para alcançar resultados transformadores.",
    icon: "🎯"
  },
  {
    title: "Financiamento FINEP",
    description: "Garantir o tempo necessário para sua inovação gerar resultados.",
    icon: "💡"
  },
  {
    title: "Gestão de Projetos",
    description: "Gerir bem os PROJETOS da empresa é fundamental para se obter resultados.",
    icon: "📊"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NOSSOS SERVIÇOS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Com uma abordagem <span className="font-semibold text-primary">INOVADORA</span> e{" "}
            <span className="font-semibold text-primary">ESTRATÉGICA</span>, nossos serviços
            são projetados para atender às necessidades únicas de sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Button variant="link" className="mt-4 text-primary p-0">
                  Saiba Mais →
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
