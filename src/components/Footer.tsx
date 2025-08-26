import { Instagram, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de conhecer mais sobre os Doces Amoranna 😊";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/docesamoranna', '_blank');
  };

  return (
    <footer className="bg-chocolate text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-script text-4xl font-bold text-sweet-pink mb-4">
              Doces Amoranna
            </h3>
            <p className="text-white/80 leading-relaxed">
              Doces artesanais feitos com amor para adoçar seus melhores momentos.
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#sobre" className="block text-white/80 hover:text-sweet-pink transition-colors">
                Sobre Nós
              </a>
              <a href="#produtos" className="block text-white/80 hover:text-sweet-pink transition-colors">
                Nossos Doces
              </a>
              <a href="#contato" className="block text-white/80 hover:text-sweet-pink transition-colors">
                Contato
              </a>
            </div>
          </div>
          
          {/* Redes Sociais */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4">Siga-nos</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleInstagramClick}
                className="bg-sweet-pink p-3 rounded-full hover:bg-sweet-pink/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-white/60">
            <span>© 2024 Doces Amoranna. Todos os direitos reservados.</span>
            <Heart className="w-4 h-4 text-sweet-pink" />
            <span>Feito com amor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;