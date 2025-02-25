
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold heading-gradient mb-6 leading-tight">
            VALORNOVO® possui um processo simplificado para fazer a Inovação acontecer.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            O processo de inovação VALORNOVO® traz mais assertividade, estratégia e cultura à sua empresa, com
            treinamentos, comitês e metas claras para desenvolver novos faturamentos.
          </p>
          
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            CONHEÇA MAIS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
