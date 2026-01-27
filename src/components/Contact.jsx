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
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-cyan-50 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions about our water cleaning solutions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
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
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 shadow-lg"
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
                className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-blue-600 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-700">{info.detail}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-blue-600 mb-4">Visit Our Office</h4>
              <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl block mb-2">🗺️</span>
                  <p className="text-gray-600 font-semibold">Interactive Map</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

