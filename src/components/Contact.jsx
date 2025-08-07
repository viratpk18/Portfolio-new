import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSuccess(null), 5000);
      } else {
        setSuccess(false);
        setTimeout(() => setSuccess(null), 5000);
      }
    } catch (error) {
      setSuccess(false);
      setTimeout(() => setSuccess(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Location",
      info: "Madurai, Tamil Nadu",
      subInfo: "India",
      color: "#fe5617"
    },
    {
      icon: FiMail,
      title: "Email",
      info: "praveenkumar2k4.t@gmail.com",
      subInfo: "Available 24/7",
      color: "#3b82f6"
    },
    {
      icon: FiPhone,
      title: "Phone",
      info: "+91 6374948623",
      subInfo: "Mon-Fri 9AM-6PM",
      color: "#10b981"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/viratpk18",
      color: "#000000",
      handle: "@viratpk18"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/praveenkumart18/",
      color: "#0077b5",
      handle: "praveenkumart18"
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://www.instagram.com/_virat_pk_18/",
      color: "#e4405f",
      handle: "@_virat_pk_18"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#fe5617]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#fe5617] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            
            {/* Intro */}
            <div className="bg-gradient-to-br from-[#fe5617] to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Start a Conversation</h3>
              <p className="text-orange-100 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, 
                or partnerships. Whether you have a project in mind or just want 
                to connect, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${contact.color}15` }}
                    >
                      <contact.icon 
                        size={24} 
                        style={{ color: contact.color }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{contact.title}</h4>
                      <p className="text-gray-600 font-medium">{contact.info}</p>
                      <p className="text-sm text-gray-500">{contact.subInfo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="400">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Connect on Social</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${social.color}15` }}
                    >
                      <social.icon 
                        size={20} 
                        style={{ color: social.color }}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{social.name}</div>
                      <div className="text-sm text-gray-500">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaPaperPlane className="text-[#fe5617]" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe5617] focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe5617] focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe5617] focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#fe5617] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#fe5617] to-orange-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-[#fe5617] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Success/Error Messages */}
              {success === true && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl" data-aos="fade-in">
                  <div className="flex items-center gap-2 text-green-700">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-semibold">Message sent successfully!</span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              )}
              
              {success === false && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl" data-aos="fade-in">
                  <div className="flex items-center gap-2 text-red-700">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-semibold">Message failed to send</span>
                  </div>
                  <p className="text-red-600 text-sm mt-1">
                    Please try again or contact me directly via email.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
