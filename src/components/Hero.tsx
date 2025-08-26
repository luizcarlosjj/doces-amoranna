import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-sweets.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de fazer um pedido dos seus doces artesanais 😊";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Doces artesanais Amoranna" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sweet-pink-light/80 via-cream/90 to-sweet-pink/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-script text-6xl md:text-8xl font-bold text-chocolate mb-6 animate-slide-up">
            Doces Amoranna
          </h1>
          
          <p className="text-xl md:text-2xl text-chocolate-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Doces artesanais feitos com amor, para adoçar seus melhores momentos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              variant="whatsapp" 
              size="hero"
              className="animate-float"
            >
              <MessageCircle className="mr-2" />
              Fazer Pedido no WhatsApp
            </Button>
            
            <Button 
              variant="chocolate" 
              size="hero"
              onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Nossos Doces
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-chocolate-light">
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Artesanal</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Fresh</div>
              <div className="text-sm">Diário</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">♥</div>
              <div className="text-sm">Feito com Amor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;