import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}. Email: ${formData.email}. Mensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os doces artesanais 😊";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/docesamoranna', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-chocolate-light max-w-2xl mx-auto">
            Estamos aqui para adoçar seus momentos especiais. 
            Entre em contato e faça seu pedido!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-script text-3xl font-bold text-chocolate mb-6">
                Fale Conosco
              </h3>
              
              <div className="space-y-6">
                <Button 
                  onClick={handleWhatsAppClick}
                  variant="whatsapp" 
                  size="lg"
                  className="w-full justify-start"
                >
                  <MessageCircle className="mr-3" />
                  WhatsApp: (11) 99999-9999
                </Button>
                
                <Button 
                  onClick={handleInstagramClick}
                  variant="outline"
                  size="lg"
                  className="w-full justify-start border-sweet-pink text-sweet-pink hover:bg-sweet-pink hover:text-white"
                >
                  <Instagram className="mr-3" />
                  @docesamoranna
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-chocolate-light">
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </div>
              
              <div className="flex items-center space-x-3 text-chocolate-light">
                <Mail className="w-5 h-5" />
                <span>contato@docesamoranna.com.br</span>
              </div>
              
              <div className="flex items-center space-x-3 text-chocolate-light">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP - Entregamos em toda a região</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h4 className="font-semibold text-chocolate mb-3">Horário de Atendimento</h4>
              <div className="space-y-2 text-chocolate-light">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="font-script text-3xl text-chocolate">
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-sweet-pink/30 focus:border-sweet-pink"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="border-sweet-pink/30 focus:border-sweet-pink"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Sua mensagem ou detalhes do pedido..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={4}
                    className="border-sweet-pink/30 focus:border-sweet-pink resize-none"
                  />
                </div>
                
                <Button type="submit" variant="sweet" size="lg" className="w-full">
                  <MessageCircle className="mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;