import { Card, CardContent } from "@/components/ui/card";
import brigadeiroImage from "@/assets/product-brigadeiros.jpg";
import cakeJarImage from "@/assets/product-cake-jar.jpg";
import trufflesImage from "@/assets/product-truffles.jpg";
import macaronsImage from "@/assets/product-macarons.jpg";

const Products = () => {
  const products = [
    {
      name: "Brigadeiros Gourmet",
      description: "Brigadeiros artesanais com diversos sabores e coberturas especiais",
      image: brigadeiroImage,
      price: "A partir de R$ 2,50"
    },
    {
      name: "Bolo no Pote",
      description: "Deliciosos bolos em camadas servidos em potes individuais",
      image: cakeJarImage,
      price: "A partir de R$ 8,00"
    },
    {
      name: "Trufas Premium",
      description: "Trufas de chocolate belga com recheios cremosos e únicos",
      image: trufflesImage,
      price: "A partir de R$ 4,00"
    },
    {
      name: "Macarons Franceses",
      description: "Delicados macarons com sabores clássicos e especiais",
      image: macaronsImage,
      price: "A partir de R$ 5,00"
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate mb-6">
            Nossos Doces
          </h2>
          <p className="text-xl text-chocolate-light max-w-2xl mx-auto">
            Cada doce é uma obra de arte, preparado com ingredientes selecionados 
            e muito amor em cada detalhe
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-sweet transition-all duration-300 hover:-translate-y-2 border-0 bg-cream">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="font-script text-2xl font-bold text-chocolate">
                    {product.name}
                  </h3>
                  
                  <p className="text-chocolate-light text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sweet-pink font-bold text-lg">
                      {product.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-chocolate-light mb-4">
            Todos os nossos doces são feitos sob encomenda para garantir o máximo de frescor
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-sweet-pink-light rounded-full">
            <span className="text-chocolate font-medium">
              📞 Entre em contato para pedidos personalizados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;