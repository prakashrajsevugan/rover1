export const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      detail: "support@aquaclean.com",
      link: "mailto:support@aquaclean.com"
    },
    {
      icon: "📱",
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Address",
      detail: "123 Water Street, San Francisco, CA 94102",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 py-16 px-4"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-[fadeIn_0.8s_ease-out]">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-[slideInDown_0.6s_ease-out]">
            Get In Touch
          </h2>
          <p className="text-cyan-50 text-lg md:text-xl max-w-2xl mx-auto animate-[slideInUp_0.8s_ease-out]">
            Have questions about our water cleaning solutions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl animate-[slideInLeft_0.8s_ease-out]">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-[slideInRight_0.8s_ease-out]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0 transition-all duration-300 hover:scale-125 hover:rotate-12">{info.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-blue-600 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-700">{info.detail}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Interactive Map */}
            <div className="bg-white rounded-2xl p-6 shadow-lg animate-[slideInRight_1.2s_ease-out] overflow-hidden">
              <h4 className="text-lg font-bold text-blue-600 mb-4">Visit Our Office</h4>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8949536304934!2d-122.41941492346892!3d37.78825191119828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTransamerica%20Pyramid!5e0!3m2!1sen!2sus!4v1706345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                  className="rounded-lg transition-all duration-300 hover:scale-105"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

