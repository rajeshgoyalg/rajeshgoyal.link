import { certifications } from "@/lib/data";

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg mr-4">
                  <i className={`${cert.icon} text-2xl text-[#0078d4]`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1e293b]">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                </div>
              </div>
              <div className="mt-auto text-sm text-gray-600">
                <p>Issued: {cert.date}</p>
                <p className="mt-1">
                  Credential ID: {" "}
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {cert.credentialId}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;