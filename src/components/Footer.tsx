
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 section-padding border-t border-border">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neon-green rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-bold">HDYT.DEV</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/muh-hidayaat/" target="_blank" className="p-2 hover:text-neon-green transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hidayaat/" target="_blank" className="p-2 hover:text-neon-green transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/hdyt.dev/" target="_blank" className="p-2 hover:text-neon-green transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:muh.hidayaat24@gmail.com?subject=Let's Connect" className="p-2 hover:text-neon-green transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Muhammad Hidayat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
