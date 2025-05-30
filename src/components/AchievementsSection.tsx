
import { Award, Users, Coffee, Star } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Represented my university as a delegate at the 2019 National Scientific Week (PIMNAS), showcasing innovative research and collaborative problem-solving on a prestigious academic stage."
    },
    {
      icon: Users,
      title: "Developed and launched web-based solutions used by thousands of users — delivering meaningful improvements in user experience and streamlining digital workflows in real-life projects."
    },
    {
      icon: Coffee,
      title: "Actively share insights on Medium and through my Instagram tech content, covering topics like design, technology, and modern web tools"
    }
  ];

  return (
    <section className="py-20 section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            DELIVERING VALUE
            <br />
            THROUGH <span className="gradient-text">&lt;/&gt; CODE</span>
          </h2>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-8 rounded-2xl border border-border hover:border-neon-green transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-neon-green/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-neon-green/20 transition-colors">
                <achievement.icon size={24} className="text-neon-green" />
              </div>
              <p className="text-lg leading-relaxed">{achievement.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
