import { useState } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary"
          >
            RG
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Certifications
            </button>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <i className="fas fa-sun text-yellow-500"></i>
              ) : (
                <i className="fas fa-moon text-blue-900"></i>
              )}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-dark focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <nav className="flex flex-col space-y-4 py-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Certifications
            </button>
            <div className="pt-4 border-t border-gray-200 mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">Switch Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <i className="fas fa-sun text-yellow-500"></i>
                ) : (
                  <i className="fas fa-moon text-blue-900"></i>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
