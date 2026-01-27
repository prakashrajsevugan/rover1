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
    { icon: "f", label: "Facebook", url: "#" },
    { icon: "𝕏", label: "Twitter", url: "#" },
    { icon: "in", label: "LinkedIn", url: "#" },
    { icon: "📺", label: "YouTube", url: "#" }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌊</span>
              <h3 className="text-2xl font-bold">AquaClean</h3>
            </div>
            <p className="text-cyan-50 text-sm leading-relaxed mb-6">
              Advanced autonomous water cleaning and monitoring solutions for a cleaner planet.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition duration-300 hover:scale-110"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="text-lg font-bold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cyan-50 hover:text-white transition duration-300 hover:translate-x-1"
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
        <div className="border-t border-white/20 pt-8 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cyan-50 text-sm text-center md:text-left">
            &copy; {currentYear} AquaClean Rover. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cyan-50 hover:text-white text-sm transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-cyan-50 hover:text-white text-sm transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-cyan-50 hover:text-white text-sm transition duration-300">
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
