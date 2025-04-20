const Footer = () => {
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
    <footer className="bg-[#0f172a] text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold"
            >
              Rajesh Goyal
            </button>
            <p className="text-gray-400 mt-2">Technology Leader & Engineering Manager</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              Certifications
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Rajesh Goyal. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/rajeshgoyalg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/rajeshgoyalg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/rajeshgoyalg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
