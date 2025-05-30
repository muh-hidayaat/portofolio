
import { Play, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-20">
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                CODING WITH
                <br />
                <span className="gradient-text">HEART ❤️</span>CREATE WITH
                <br />
                <span className="gradient-text">🚀 IMPACT</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Transforming ideas into engaging digital experiences through innovative web development and creative design solutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-neon-green text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 hover:scale-105">
                Get in touch
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-4">
                {/* <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full border-2 border-background"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-green to-neon-purple rounded-full border-2 border-background"></div>
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-green rounded-full border-2 border-background"></div>
                </div> */}
                <div>
                  <div className="text-2xl font-bold">Over 3 years</div>
                  <div className="text-sm text-muted-foreground">of hands-on experience in delivering high-quality web solutions</div>
                  <div className="text-sm text-muted-foreground">using modern technologies.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-green/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 animate-float">
                <img 
                  src="/lovable-uploads/02c1f2e4-561a-4dae-a401-da1131bff2fc.png" 
                  alt="Developer Portrait" 
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
