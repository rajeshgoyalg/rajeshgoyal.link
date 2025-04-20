import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-primary"
          >
            RG
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
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
              onClick={() => scrollToSection("achievements")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Contact
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
              onClick={() => scrollToSection("achievements")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-dark hover:text-primary font-medium transition duration-300"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
