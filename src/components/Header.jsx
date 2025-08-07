import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "project" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/viratpk18",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/praveenkumart18/",
      label: "LinkedIn"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_virat_pk_18/",
      label: "Instagram"
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 hover:text-[#fe5617] transition-colors duration-300">
                <span className="text-[#fe5617]">P</span>raveen <span className="text-[#fe5617]">K</span>umar 
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="relative text-gray-700 hover:text-[#fe5617] font-medium transition-colors duration-300 cursor-pointer group py-2"
                activeClass="text-[#fe5617]"
                spy={true}
                offset={-80}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fe5617] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-[#fe5617] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 bg-gray-100 hover:bg-[#fe5617] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? "max-h-96 opacity-100" 
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 mx-4 mb-4">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="block px-6 py-3 text-gray-700 hover:text-[#fe5617] hover:bg-gray-50 font-medium transition-all duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
                activeClass="text-[#fe5617] bg-orange-50"
                spy={true}
                offset={-80}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 pt-4 pb-2 border-t border-gray-100 mx-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 hover:bg-[#fe5617] text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
