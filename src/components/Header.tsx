
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neon-green rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-bold">HDYT.DEV</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-neon-green transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-neon-green transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-neon-green transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-neon-green transition-colors">
              Contact
            </button>
            <button className="bg-neon-green text-black px-6 py-2 rounded-full font-semibold hover:bg-neon-green/90 transition-colors">
              Hire me
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-neon-green transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-neon-green transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-neon-green transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-neon-green transition-colors">
                Contact
              </button>
              <button className="bg-neon-green text-black px-6 py-2 rounded-full font-semibold hover:bg-neon-green/90 transition-colors w-fit">
                Hire me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
