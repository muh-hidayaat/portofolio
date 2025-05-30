
const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-max">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">👋</span>
            <div>
              <h2 className="text-2xl font-bold">Hello! I'm Hidayat</h2>
              <p className="text-muted-foreground">— a driven and creative Software Developer</p>
            </div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              with <span className="text-neon-green font-semibold">3 YEARS OF EXPERIENCE</span> in the 
              field, I thrive on turning imaginative ideas into digital 
              realities, constantly seeking innovative ways to 
              blend design and technology. I possess a strong 
              foundation in <span className="text-neon-green font-semibold">FRONT-END</span> and <span className="text-neon-green font-semibold">BACK-END</span> 
              development, as well as responsive 
              design and user-centered interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
