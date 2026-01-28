import { FaFacebookF,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Roadmap"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press"]
    },
    {
      title: "Resources",
      links: ["Documentation", "API Docs", "Support", "Contact"]
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, label: "Facebook", url: "#" },
    { icon: FaXTwitter, label: "Twitter", url: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", url: "#" },
    { icon: FaYoutube, label: "YouTube", url: "#" }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Brand Section */}
        <div className="mb-8 animate-[fadeIn_1s_ease-out] text-center sm:text-left">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center sm:justify-start">
            <span className="text-2xl sm:text-3xl animate-[float_3s_ease-in-out_infinite]">🌊</span>
            <h3 className="text-xl sm:text-2xl font-bold">Albedrozes</h3>
          </div>
          <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0 max-w-md mx-auto sm:mx-0">
            Advanced autonomous water cleaning and monitoring solutions for a cleaner planet.
          </p>
          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 animate-[scaleIn_0.8s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="text-base sm:text-lg" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links Sections - 3 Columns */}
        {/* Links Sections - 3 Columns */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {footerLinks.map((section, index) => (
            <div key={section.title} className="animate-[fadeIn_1s_ease-out] text-center sm:text-left" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
              <h4 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 md:mb-4 text-white">{section.title}</h4>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-emerald-50 hover:text-white transition-all duration-300 inline-block hover:translate-x-2 text-[10px] sm:text-xs md:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 mb-6 sm:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-emerald-50 text-xs sm:text-sm text-center md:text-left px-4 sm:px-0">
            &copy; {currentYear} Albedrozes Rover. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-emerald-50 hover:text-white text-xs sm:text-sm transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-emerald-50 hover:text-white text-xs sm:text-sm transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-emerald-50 hover:text-white text-xs sm:text-sm transition duration-300">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>

      {/* Gradient Accent */}
      <div className="h-1 bg-gradient-to-r from-white/40 via-white/20 to-white/10"></div>
    </footer>
  );
};
