import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#fe5617] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
            
            {/* Introduction */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#fe5617] bg-opacity-10 text-[#fe5617] rounded-full text-sm font-semibold" data-aos="fade-down">
                👋 Welcome to my portfolio
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe5617] to-orange-500">
                  Praveen Kumar
                </span>
              </h1>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-light">
                I'm a{" "}
                <span className="text-[#fe5617] font-semibold">
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "MERN Stack Expert",
                      "UI/UX Designer",
                      "Problem Solver"
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="200">
              Passionate tech enthusiast specializing in creating exceptional digital experiences. 
              I transform complex problems into elegant, user-friendly solutions using modern technologies.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 py-4" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#fe5617]">2+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#fe5617]">15+</div>
                <div className="text-sm text-gray-500">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#fe5617]">100%</div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="400">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#fe5617] text-white font-semibold rounded-2xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Let's Connect
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/assets/resume.pdf"
                download="Praveen_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-2xl hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                <FaDownload />
                Download CV
              </a>
            </div>

            {/* Contact Info & Social */}
            <div className="flex flex-wrap gap-8 pt-4" data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center gap-3 text-gray-600">
                <FiMapPin className="text-[#fe5617]" size={18} />
                <span className="text-sm">Madurai, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FiMail className="text-[#fe5617]" size={18} />
                <span className="text-sm">praveenkumar2k4.t@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="600">
              <a
                href="https://github.com/viratpk18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600 hover:text-[#fe5617] hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/praveenkumart18/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white shadow-lg rounded-xl flex items-center justify-center text-gray-600 hover:text-[#fe5617] hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left" data-aos-delay="300">
            <div className="relative">
              {/* Main image container with modern styling */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe5617] via-orange-500 to-red-500 rounded-[3rem] transform rotate-6"></div>
                
                {/* Image container */}
                <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden p-2">
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                    <img
                      src="/pk.jpg"
                      alt="Praveen Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 transform rotate-12 animate-bounce">
                  <div className="text-center">
                    <div className="text-[#fe5617] font-bold text-sm">Available</div>
                    <div className="text-xs text-gray-500">for projects</div>
                  </div>
                </div>
                
                {/* Tech stack indicator */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-3 shadow-xl transform -rotate-6">
                  <div className="font-semibold text-sm">MERN Stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="700">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
