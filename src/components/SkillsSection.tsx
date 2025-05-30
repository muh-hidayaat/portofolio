
import { Code, Palette, Server, Globe, Smartphone, Database } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Front-End Development",
      description: "Modern JavaScript frameworks and libraries for interactive user interfaces.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences with modern design principles."
    },
    {
      icon: Server,
      title: "Back-End Development",
      description: "Server-side development with RESTful APIs and database integration."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications with modern technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Responsive and mobile-first design approaches for all devices."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization for scalable applications."
    }
  ];

  return (
    <section className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            MASTERING A POWERFUL 
            <br />
            RANGE OF <span className="gradient-text">🔥 SKILLS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:border-neon-green group ${
                skill.highlight 
                  ? 'bg-neon-green text-black border-neon-green' 
                  : 'bg-card border-border hover:bg-card/80'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                skill.highlight 
                  ? 'bg-black/10' 
                  : 'bg-neon-green/10'
              }`}>
                <skill.icon size={24} className={skill.highlight ? 'text-black' : 'text-neon-green'} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${skill.highlight ? 'text-black' : 'text-foreground'}`}>
                {skill.title}
              </h3>
              <p className={skill.highlight ? 'text-black/70' : 'text-muted-foreground'}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
