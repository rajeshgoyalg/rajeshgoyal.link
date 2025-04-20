import { personalInfo } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Driving Change at the Intersection of Tech, Product & Strategy</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With 20+ years of experience spanning digital transformation, product innovation, and scalable platform delivery, 
              I've built and led digital ecosystems for startups, growth-stage companies, and global enterprises.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I specialize in transforming ambiguity into execution. Whether launching new ventures or modernizing legacy systems, 
              I bring a strategic, outcome-driven mindset — partnering with C-level stakeholders, aligning cross-functional teams, 
              and delivering tech solutions that unlock growth and efficiency.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Most recently, I've led digital growth initiatives at Qoala, where I shaped product strategy, scaled B2C digital 
              operations across Southeast Asia, and orchestrated multi-market tech transformations.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
              Specialties: Product Strategy · Tech-Enabled Growth · Digital Operating Models · AI & Automation · Cross-Functional Leadership
            </p>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-700 hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-700">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <a href="https://maps.app.goo.gl/grnodHPG9AmW4vwb9" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                    {personalInfo.location}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-globe"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Social Links</p>
                  <div className="flex space-x-3 mt-1">
                    <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white transition-colors">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Resume</p>
                  <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
