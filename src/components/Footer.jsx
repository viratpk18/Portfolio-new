import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaArrowUp } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "project" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/viratpk18",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/praveenkumart18/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/_virat_pk_18/",
      label: "Instagram",
      color: "hover:text-pink-400"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#fe5617] hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Back to top"
      >
        <FaArrowUp size={16} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              <span className="text-[#fe5617]">P</span>raveen <span className="text-[#fe5617]">K</span>umar
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionate Full Stack Developer creating innovative web solutions 
              with modern technologies. Let's build something amazing together!
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <FiMail className="text-[#fe5617]" size={18} />
                <span>praveenkumar2k4.t@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiMapPin className="text-[#fe5617]" size={18} />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-[#fe5617] transition-colors duration-200 cursor-pointer block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-gray-300 ${social.color} transition-colors duration-200 group`}
                >
                  <social.icon size={20} />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-8">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#fe5617] hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Praveen Kumar. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1 mt-1">
                Made with <FaHeart className="text-red-500 animate-pulse" size={12} /> 
                and lots of ☕ in India
              </p>
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Built with:</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">Tailwind</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
