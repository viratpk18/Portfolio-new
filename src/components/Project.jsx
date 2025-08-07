import React from "react";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiPhp, SiMysql, SiTailwindcss } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "HostelHub",
      description: "A comprehensive MERN stack hostel management system that streamlines complaints, leave requests, and payments for students, wardens, and administrators.",
      longDescription: "HostelHub revolutionizes hostel management with its intuitive interface and robust backend. Features include real-time complaint tracking, automated leave approval workflows, integrated payment gateway, and comprehensive reporting dashboard.",
      image: "/project1.jpg", // You can add project images
      demoLink: "#",
      githubLink: "https://github.com/viratpk18/HostelHub",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNode, color: "#68A063" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
      ],
      features: ["User Authentication", "Real-time Updates", "Payment Integration", "Admin Dashboard"],
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Bus Ticket Booking System",
      description: "Full-stack platform for booking bus tickets with schedule management, seat selection, and reservation tracking capabilities.",
      longDescription: "Modern bus ticket booking platform with dynamic seat selection, real-time availability updates, secure payment processing, and comprehensive booking management system.",
      image: "/project2.jpg",
      demoLink: "#",
      githubLink: "https://github.com/viratpk18/Bus-ticket-booking-system",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNode, color: "#68A063" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
      ],
      features: ["Seat Selection", "Payment Gateway", "Booking History", "Route Management"],
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Bus-Pass Booking System",
      description: "Web application for bus pass applications with PDF generation, user management, and administrative approval workflows.",
      longDescription: "Efficient bus pass management system featuring automated PDF generation, multi-role user management, approval workflows, and comprehensive reporting capabilities.",
      image: "/project3.jpg",
      demoLink: "#",
      githubLink: "https://github.com/viratpk18/bus-pass-booking",
      technologies: [
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "MySQL", icon: SiMysql, color: "#00758F" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
      ],
      features: ["PDF Generation", "User Management", "Approval System", "Data Export"],
      category: "Web Application"
    }
  ];

  return (
    <section id="project" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-[#fe5617]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#fe5617] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing my journey through innovative web solutions and full-stack applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              
              {/* Project Image/Visual */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-8' : ''}`}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-[#fe5617] to-orange-400 rounded-2xl p-8 transform group-hover:scale-105 transition-all duration-300">
                    <div className="bg-white rounded-xl p-6 min-h-[300px] flex items-center justify-center">
                      <div className="text-center">
                        <HiOutlineCode className="text-[#fe5617] text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                        <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                          {project.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating tech indicators */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    {React.createElement(project.technologies[0].icon, {
                      className: "text-2xl",
                      style: { color: project.technologies[0].color }
                    })}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                
                {/* Project Title & Category */}
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-[#fe5617] bg-opacity-10 text-[#fe5617] rounded-full text-sm font-semibold mb-4">
                    Featured Project
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200"
                      >
                        <tech.icon style={{ color: tech.color }} size={20} />
                        <span className="font-medium text-gray-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-[#fe5617] rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#fe5617] text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    <FaGithub size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-[#fe5617] to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Interested in My Work?
            </h3>
            <p className="text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with modern web technologies.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#fe5617] font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start a Project
              <FaExternalLinkAlt size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
