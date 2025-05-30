
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 section-padding bg-gradient-to-br from-background to-card/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            LET'S WORK
            <br />
            T<span className="gradient-text">😊</span>GETHER
          </h2>
          <button className="group bg-neon-green text-black px-12 py-6 rounded-full font-semibold text-xl hover:bg-neon-green/90 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto animate-glow">
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
