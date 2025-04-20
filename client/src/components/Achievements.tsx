import { achievements } from "@/lib/data";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Key Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                  <i className={`${achievement.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-[#1e293b]">{achievement.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
