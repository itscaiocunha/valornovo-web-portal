
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <img src="/lovable-uploads/8ab4c7a4-ee6f-454f-af54-6d3e8b2d37f8.png" alt="ValorNovo Logo" className="h-8 mb-4" />
            <p className="text-gray-300 max-w-md">
              Transformando empresas através da inovação estratégica e resultados mensuráveis.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#podcast" className="text-gray-300 hover:text-white transition-colors">Podcast</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Fale Conosco
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-300">
          © 2024 ValorNovo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
