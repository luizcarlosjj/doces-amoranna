import aboutImage from "@/assets/about-baker.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <img 
              src={aboutImage}
              alt="Confeiteira preparando doces artesanais"
              className="rounded-2xl shadow-soft w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-script text-5xl md:text-6xl font-bold text-chocolate mb-8">
              Nossa História
            </h2>
            
            <div className="space-y-4 text-chocolate-light text-lg leading-relaxed">
              <p>
                Na **Doces Amoranna**, cada doce é preparado com carinho e dedicação, 
                seguindo receitas tradicionais que passaram de geração em geração.
              </p>
              
              <p>
                Utilizamos apenas ingredientes frescos e de alta qualidade, 
                garantindo que cada mordida seja uma experiência única e inesquecível.
              </p>
              
              <p>
                Nossos doces são feitos sob encomenda, preservando o sabor caseiro 
                e a textura perfeita que só o preparo artesanal pode oferecer.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-sweet-pink">5+</div>
                <div className="text-chocolate">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                <div className="text-3xl font-bold text-sweet-pink">1000+</div>
                <div className="text-chocolate">Clientes Felizes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;