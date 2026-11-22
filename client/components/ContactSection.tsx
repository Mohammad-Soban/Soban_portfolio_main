import React from 'react';
import {
  ArrowRight,
  Coffee,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Smartphone,
} from 'lucide-react';
import { FormData, VisibilityState } from '../types/portfolio';
import { CONTACT_INFO } from '../constants/portfolioData';

interface ContactSectionProps {
  isVisible: VisibilityState;
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFormSubmit: (e: React.FormEvent) => void;
  onCall: () => void;
  onWhatsApp: () => void;
  onScheduleModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isVisible,
  formData,
  onInputChange,
  onFormSubmit,
  onCall,
  onWhatsApp,
  onScheduleModal,
}) => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      href: CONTACT_INFO.linkedin,
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "View my repositories",
      href: CONTACT_INFO.github,
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Smartphone,
      title: "Schedule Call",
      description: "Book a consultation",
      href: "#",
      color: "from-green-500 to-teal-500",
      onClick: onScheduleModal,
    },
  ];

  return (
    <section
      id="contact"
      data-animate
      className={`py-20 md:py-32 relative ${isVisible.contact ? "animate-fade-in-up" : ""}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-golden-50 via-white to-orange-50 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(248,232,200,0.4),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(248,232,200,0.1),transparent_70%)]"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-golden-100 dark:bg-charcoal-800 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
            <Coffee className="w-4 h-4 text-golden-600" />
            <span className="text-xs md:text-sm font-medium text-golden-700 dark:text-golden-300">
              Let's Connect
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 bg-gradient-to-r from-charcoal-800 to-charcoal-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Ready to Create
            <span className="block bg-gradient-to-r from-golden-500 to-orange-500 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>

          <p className="text-base md:text-xl text-charcoal-600 dark:text-charcoal-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate on your next data science project and turn your
            ideas into intelligent solutions
          </p>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Quick Actions and Contact Info */}
            <div className="space-y-6 md:space-y-8">
              {/* Quick Actions */}
              <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-6 md:p-8 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl">
                <h4 className="font-bold text-xl md:text-2xl mb-6 text-center">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={onCall}
                    className="flex flex-col items-center justify-center p-4 md:p-6 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                    <span className="font-medium text-sm">Call</span>
                  </button>

                  <button
                    onClick={onWhatsApp}
                    className="flex flex-col items-center justify-center p-4 md:p-6 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                    <span className="font-medium text-sm">WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      const subject = encodeURIComponent("Quick Contact");
                      const body = encodeURIComponent(
                        "Hi Mohammad,\n\nI would like to discuss a project opportunity.\n\nBest regards",
                      );
                      window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
                    }}
                    className="flex flex-col items-center justify-center p-4 md:p-6 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                    <span className="font-medium text-sm">Email</span>
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-6 md:p-8 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  {contactMethods.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={contact.onClick}
                      className="group flex items-center p-3 md:p-4 rounded-2xl hover:bg-golden-50 dark:hover:bg-charcoal-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      <div
                        className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${contact.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="ml-3 md:ml-4 flex-1">
                        <p className="font-semibold text-charcoal-800 dark:text-white group-hover:text-golden-600 transition-colors duration-300 text-sm md:text-base">
                          {contact.title}
                        </p>
                        <p className="text-charcoal-600 dark:text-charcoal-300 text-xs md:text-sm">
                          {contact.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-charcoal-400 group-hover:text-golden-500 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-6 md:p-8 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-golden-600">12 hours</div>
                    <div className="text-xs md:text-sm text-charcoal-600 dark:text-charcoal-300">
                      Response Time
                    </div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-golden-600">100%</div>
                    <div className="text-xs md:text-sm text-charcoal-600 dark:text-charcoal-300">
                      Project Success
                    </div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-golden-600">2+</div>
                    <div className="text-xs md:text-sm text-charcoal-600 dark:text-charcoal-300">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-golden-600">∞</div>
                    <div className="text-xs md:text-sm text-charcoal-600 dark:text-charcoal-300">
                      Curiosity Level
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-6 md:p-8 border border-golden-200/50 dark:border-charcoal-700/50 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                Send a Message
              </h3>
              <form onSubmit={onFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    placeholder="Your Name"
                    required
                    style={{ fontSize: '16px' }}
                    className="w-full p-4 rounded-xl border border-golden-200 dark:border-charcoal-600 focus:outline-none focus:border-golden-400 bg-white dark:bg-charcoal-700"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    placeholder="Your Email"
                    required
                    style={{ fontSize: '16px' }}
                    className="w-full p-4 rounded-xl border border-golden-200 dark:border-charcoal-600 focus:outline-none focus:border-golden-400 bg-white dark:bg-charcoal-700"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onInputChange}
                  placeholder="Your Phone Number"
                  style={{ fontSize: '16px' }}
                  className="w-full p-4 rounded-xl border border-golden-200 dark:border-charcoal-600 focus:outline-none focus:border-golden-400 bg-white dark:bg-charcoal-700"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={onInputChange}
                  placeholder="Project Subject"
                  style={{ fontSize: '16px' }}
                  className="w-full p-4 rounded-xl border border-golden-200 dark:border-charcoal-600 focus:outline-none focus:border-golden-400 bg-white dark:bg-charcoal-700"
                />
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={onInputChange}
                  placeholder="Tell me about your project..."
                  required
                  style={{ fontSize: '16px' }}
                  className="w-full p-4 rounded-xl border border-golden-200 dark:border-charcoal-600 focus:outline-none focus:border-golden-400 bg-white dark:bg-charcoal-700 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-golden-500 to-orange-500 hover:from-golden-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
