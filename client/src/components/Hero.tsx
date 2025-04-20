import { useState, useEffect } from "react";
import { personalInfo, roleTitles } from "@/lib/data";
import profilePhoto from "@assets/rajesh profile photo.png";

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Function to simulate typing effect
  const typeText = (text: string, i = 0) => {
    if (i < text.length) {
      setDisplayText(text.substring(0, i + 1));
      setTimeout(() => typeText(text, i + 1), 50); // Adjust typing speed here
    } else {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    const rotateRoles = () => {
      // Start typing animation
      setIsTyping(true);
      setDisplayText("");
      
      // Begin typing the new role
      typeText(roleTitles[currentRoleIndex]);
      
      // Set timeout for the next role
      const nextTimeout = setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => 
          prevIndex === roleTitles.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Longer delay to allow for typing animation
      
      return nextTimeout;
    };
    
    const timeout = rotateRoles();
    return () => clearTimeout(timeout);
  }, [currentRoleIndex]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{personalInfo.name}</h1>
            <div className="h-12 flex items-center">
              <p className="text-xl md:text-2xl font-light mb-6">
                <span 
                  className="inline-block" 
                  style={{ 
                    borderRight: isTyping ? '2px solid #3b82f6' : 'none',
                    animation: isTyping ? 'blink-caret 0.75s step-end infinite' : 'none',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: 'auto'
                  }}
                >
                  {displayText}
                </span>
              </p>
            </div>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl">
              Enabling enterprise-grade innovation through strategic technology leadership and scalable solutions. From cloud architecture to DevOps transformation, I build technology ecosystems that drive measurable business impact with future-proof reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("experience")}
                className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-flex items-center"
              >
                <i className="fas fa-briefcase mr-2"></i> View Experience
              </button>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white text-white font-medium py-2 px-6 rounded-md hover:bg-white hover:text-[#1e293b] transition duration-300 inline-flex items-center"
              >
                <i className="fab fa-linkedin mr-2"></i> Get In Touch
              </a>
              <button
                onClick={() => scrollToSection("about")}
                className="bg-transparent border border-white text-white font-medium py-2 px-6 rounded-md hover:bg-white hover:text-[#1e293b] transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={profilePhoto} 
                alt="Rajesh Goyal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
