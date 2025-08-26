import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;