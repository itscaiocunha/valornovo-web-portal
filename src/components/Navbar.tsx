
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <img src="/lovable-uploads/8ab4c7a4-ee6f-454f-af54-6d3e8b2d37f8.png" alt="ValorNovo Logo" className="h-8" />
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="nav-link">Home</a>
          <a href="#servicos" className="nav-link">Nossos Serviços</a>
          <a href="#sobre" className="nav-link">Sobre nós</a>
          <a href="#contato" className="nav-link">Contato</a>
          <a href="#podcast" className="nav-link">Podcast ValoNovo®</a>
        </div>

        <Button className="hidden md:flex bg-primary hover:bg-primary/90">
          Fale Conosco
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
