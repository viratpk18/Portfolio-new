import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaUniversity,
  FaSchool,
  FaCalendarAlt
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJsonwebtokens,
  SiRender,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";
import { HiOutlineDownload, HiOutlineExternalLink } from "react-icons/hi";

const About = () => {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "#e34c26", level: 95 },
    { name: "CSS3", icon: FaCss3Alt, color: "#264de4", level: 90 },
    { name: "JavaScript", icon: FaJsSquare, color: "#f7df1e", level: 85 },
    { name: "React.js", icon: FaReact, color: "#61dbfb", level: 88 },
    { name: "Node.js", icon: FaNode, color: "#68a063", level: 80 },
    { name: "Express.js", icon: SiExpress, color: "#000000", level: 75 },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248", level: 78 },
    { name: "Git", icon: FaGitAlt, color: "#f05032", level: 85 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", level: 90 },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 70 },
    { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 75 },
    { name: "VS Code", icon: DiVisualstudio, color: "#0078d7", level: 95 }
  ];

  const stats = [
    { number: "2+", label: "Years Experience", icon: FaAward },
    { number: "15+", label: "Projects Completed", icon: FaCode },
    { number: "100%", label: "Client Satisfaction", icon: FaGraduationCap },
  ];

  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "Kongu Engineering College",
      location: "Perundurai, Tamil Nadu",
      period: "2024 - 2026",
      grade: "Currently Pursuing",
      icon: FaUniversity,
      description: "Specializing in Modern Web Technologies, focusing on advanced software development, data structures, algorithms"
    },
    {
      degree: "B.Sc (Bachelor of Science in Computer Science)",
      institution: "Mannar Thirumalai Naicker College",
      location: "Madurai, Tamil Nadu", 
      period: "2021 - 2024",
      grade: "First Class ",
      icon: FaGraduationCap,
      description: "Foundation in Computer Science, Programming Languages and Database Management"
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "PKN Higher Secondary School",
      location: "Thirumangalam, Madurai, Tamil Nadu",
      period: "2020 - 2021",
      grade: "80.99%",
      icon: FaSchool,
      description: "Mathematics, Computer Science, Physics, Social Science "
    }
  ];

  const certifications = [
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "2025",
      credentialId: "ITPzv5s9",
      skills: ["Git", "Version Control", "Collaboration"],
      verified: true
    },
    {
      title: "Full Stack Developmer Bootcamp",
      issuer: "Greeks for Geeks", 
      date: "2025",
      credentialId: "FSDB-2025",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      verified: true
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2025",
      credentialId: "PAFSE-2025",
      skills: ["API Testing", "Postman", "API Development"],
      verified: true
    },
    {
      title: "Code Debugging in Java",
      issuer: "G-Tech Education",
      date: "2023",
      credentialId: "CD-2023",
      Grade:"Third Topper",
      skills: ["Debugging", "Problem Solving", "Code Analysis"],
      verified: true
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#fe5617]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#fe5617] mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital solutions with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - About Content */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
            
            {/* Personal Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-[#fe5617]" />
                My Journey
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                I'm <span className="font-semibold text-[#fe5617]">Praveen Kumar T</span>, 
                a passionate MCA student at Kongu Engineering College with a strong foundation 
                in Computer Science and hands-on experience in modern web technologies.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                My journey in tech began with curiosity and has evolved into expertise in 
                creating scalable web applications. I specialize in the MERN stack and 
                love turning complex problems into elegant, user-friendly solutions.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                When I'm not coding, you'll find me sharing knowledge as a tutor, 
                creating content, or exploring the latest tech trends. I believe in 
                continuous learning and contributing to the developer community.
              </p>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <FaUniversity className="text-[#fe5617]" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="absolute -left-4 top-0 w-8 h-8 bg-[#fe5617] rounded-full flex items-center justify-center">
                      <edu.icon className="text-white text-sm" />
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FaCalendarAlt />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <p className="font-semibold text-[#fe5617]">{edu.institution}</p>
                        <p className="text-sm text-gray-600">{edu.location}</p>
                      </div>
                      <div className="mb-3">
                        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <FaCertificate className="text-[#fe5617]" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">{cert.title}</h4>
                        <p className="text-[#fe5617] font-semibold text-sm">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs">{cert.date}</p>
                      </div>
                      {cert.verified && (
                        <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          <FaAward className="text-green-600" />
                          <span>Verified</span>
                          
                        </div>
                        
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-[#fe5617] bg-opacity-10 text-[#fe5617] text-xs px-2 py-1 rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        <span className="bg-[#fe5617] bg-opacity-10 text-[#fe5617] text-xs px-2 py-1 rounded-full font-medium">
                          {cert.Grade}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                      ID: {cert.credentialId}
                    </div>
                  </div>
                ))}
                
              </div>
            </div>

            {/* Stats
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-all duration-300"
                  data-aos="zoom-in" 
                  data-aos-delay={index * 100}
                >
                  <stat.icon className="text-[#fe5617] text-3xl mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div> */}

            {/* Download CV */}
            <div className="bg-gradient-to-r from-[#fe5617] to-orange-500 rounded-2xl p-8 text-white" data-aos="fade-up">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Let's Work Together!</h4>
                  <p className="text-orange-100">Download my resume to learn more about my experience</p>
                </div>
                <a
                  href="/assets/resume.pdf"
                  download="Praveen_Kumar_Resume.pdf"
                  className="bg-white text-[#fe5617] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <HiOutlineDownload size={20} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <FaCode className="text-[#fe5617]" />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group"
                    data-aos="slide-left" 
                    data-aos-delay={index * 50}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <skill.icon style={{ color: skill.color }} size={24} />
                        </div>
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#fe5617] to-orange-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Tools */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: FaGithub, name: "GitHub", color: "#000" },
                    { icon: IoLogoVercel, name: "Vercel", color: "#000" },
                    { icon: SiRender, name: "Render", color: "#46E3B7" },
                    { icon: SiPostman, name: "Postman", color: "#FF6C37" },
                    { icon: IoLogoNpm, name: "NPM", color: "#CB3837" },
                  ].map((tool, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      title={tool.name}
                    >
                      <tool.icon style={{ color: tool.color }} size={16} />
                      <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                    </div>
                  ))}
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
