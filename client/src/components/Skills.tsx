import { leadershipSkills, architectureSkills, programmingSkills, technologies } from "@/lib/data";

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 font-medium">{name}</span>
      <span className="text-gray-600">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full" 
        style={{ 
          width: `${percentage}%`,
          backgroundColor: name.includes("AWS") ? 'hsl(206 100% 40%)' : 'hsl(222.2 47.4% 46.2%)',
        }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Architecture & System Design
            </h3>
            <div className="space-y-6">
              {architectureSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Programming Frameworks & DB
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
            Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center shadow-sm border border-gray-200 hover:shadow-lg transition duration-300 hover:bg-white transform hover:-translate-y-1"
              >
                <i
                  className={`${tech.icon} text-3xl mb-3 transition-transform duration-300 hover:scale-125`}
                  style={{ color: tech.color }}
                ></i>
                <span className="text-gray-700 text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
