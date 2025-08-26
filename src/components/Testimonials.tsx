import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Os brigadeiros da Amoranna são simplesmente divinos! Encomendem para o aniversário da minha filha e todos ficaram maravilhados com o sabor.",
      rating: 5
    },
    {
      name: "João Santos", 
      text: "Qualidade excepcional! Os bolos no pote são fresquinhos e o atendimento é muito carinhoso. Recomendo de olhos fechados!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "As trufas são um verdadeiro luxo! Sabor refinado e apresentação impecável. Perfeitas para presentear pessoas especiais.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-sweet">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-white mb-6">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior recompensa
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-soft hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-chocolate-light leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-chocolate">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-chocolate-light">
                    Cliente satisfeita
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-medium text-lg">
              ⭐ Mais de 1000 clientes satisfeitos!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;