
import { ExternalLink, Github } from 'lucide-react';
import projectImage1 from '../../public/images/1.jpg'; // Example import, adjust path as needed
import projectImage2 from '../../public/images/2.jpg'; // Example import, adjust path as needed
import projectImage3 from '../../public/images/3.jpg'; // Example import, adjust path as needed
import projectImage4 from '../../public/images/4.jpg'; // Example import, adjust path as needed

const ProjectsSection = () => {
  const projects = [
    {
      title: "Babangdeal.id (E-commerce Platform)",
      description: "Modern e-commerce solution with Go, Redis, and PostgreSQL",
      image: projectImage1,
      tags: ["Go", "Redis", "PostgreSQL", "Docker"],
      featured: true,
      liveLink: "https://babangdeal.id",
    },
    {
      title: "Sipilkada.id (Election Management System (EMS)",
      description: "Collaborative task management with real-time updates",
      image: projectImage2,
      tags: ["Laravel", "Alpine.js"],
      liveLink: "https://demo.sipilkada.id/",
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio with modern design",
      image: projectImage3,
      tags: ["React"],
      github: "https://github.com/muh-hidayaat/"

    },
    {
      title: "Hotelio App",
      description: "is a user-friendly digital platform designed to enhance the guest experience and streamline hotel operations by enabling users to browse and book rooms, check availability in real-time, complete online check-in and check-out, and make secure payments",
      image: projectImage4,
      tags: ["Flutter", "Firebase"],
      github: "https://github.com/muh-hidayaat/hotelio-app"
    }
  ];

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            EXPLORE A FEW HIGHLIGHT
            <br />
            FROM THE <span className="gradient-text">🏗️ PROJECTS</span>
            <br />
            I'VE PASSIONATELY BUILT
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden border border-border hover:border-neon-green transition-all duration-300 hover:scale-105 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <ExternalLink size={20} />
                        </button>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                          <Github size={20} />
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-neon-green/10 text-neon-green rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/muh-hidayaat/" target="_blank" rel="noopener noreferrer">
            <button className="bg-neon-green text-black px-8 py-4 rounded-full font-semibold hover:bg-neon-green/90 transition-all duration-300 hover:scale-105">
              Explore all works
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
