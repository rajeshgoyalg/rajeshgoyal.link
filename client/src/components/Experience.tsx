import { workExperience, previousRoles, education } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Work Experience */}
          {workExperience.map((job, index) => (
            <div key={index} className="timeline-container mb-12 relative group">
              <div className="absolute w-4 h-4 rounded-full bg-primary left-[-9px] top-2"></div>
              <div className="mb-3">
                <h3 className="text-xl font-semibold text-[#1e293b]">{job.role}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-medium">
                    <a 
                      href={job.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center"
                    >
                      {job.company}
                      <i className="fas fa-external-link-alt text-xs ml-1"></i>
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm">{job.period}</p>
                </div>
              </div>
              
              {/* Key Metrics - Shown on hover */}
              {job.keyMetrics && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 -translate-y-1">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Impact Metrics:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {job.keyMetrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center">
                        <i className="fas fa-chart-line text-xs mr-2 text-blue-500"></i>
                        <span className="text-sm text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Previous Roles */}
          <div className="timeline-container relative">
            <div className="absolute w-4 h-4 rounded-full bg-primary left-[-9px] top-2"></div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-[#1e293b]">Previous Roles</h3>
              <p className="text-gray-500 text-sm">2004 – 2013</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              {previousRoles.map((role, index) => (
                <li key={index}>
                  <span className="font-medium">
                    {role.role}, {role.company}
                  </span>{" "}
                  ({role.period}): {role.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-[#1e293b] mb-6">Education</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h4 className="text-lg font-medium text-[#1e293b]">{education.degree}</h4>
              <div className="flex justify-between items-center mt-1">
                <p className="text-primary">
                  <a 
                    href={education.institutionUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    {education.institution}
                    <i className="fas fa-external-link-alt text-xs ml-1"></i>
                  </a>
                </p>
                <p className="text-gray-500 text-sm">{education.period}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-container {
          border-left: 2px solid hsl(222.2 47.4% 46.2%);
          padding-left: 20px;
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default Experience;
