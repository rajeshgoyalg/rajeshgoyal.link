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
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a seasoned technology leader with over 20 years of experience driving 
              cloud strategy, platform modernization, and enterprise architecture across 
              industries like Insurtech and digital infrastructure.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My expertise lies in leading large-scale transformation programs, building 
              scalable DevOps cultures, and aligning IT initiatives with strategic business 
              goals. I have a proven track record in modernizing legacy systems, enhancing 
              developer efficiency, and delivering measurable business impact through innovation.
            </p>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-700">{personalInfo.email}</p>
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
                  <p className="text-gray-700">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href={personalInfo.linkedIn} className="text-primary hover:underline">
                    LinkedIn Profile
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
