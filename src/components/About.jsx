const About = () => {
  const features = [
    {
      icon: "🌊",
      title: "Our Mission",
      description: "To revolutionize water cleaning through autonomous robotic technology, making our water bodies cleaner and healthier for future generations."
    },
    {
      icon: "🤖",
      title: "Our Technology",
      description: "Advanced AI-powered water cleaning rovers equipped with debris collection, water quality sensors, and real-time monitoring capabilities."
    },
    {
      icon: "🌍",
      title: "Our Impact",
      description: "Protecting aquatic ecosystems by removing pollutants, monitoring water quality, and providing actionable environmental data."
    },
    {
      icon: "💧",
      title: "Water Quality",
      description: "Real-time pH, temperature, and turbidity monitoring ensures comprehensive water health assessment and cleaning efficiency."
    },
    {
      icon: "🗑️",
      title: "Debris Collection",
      description: "Intelligent debris detection and collection system capable of removing plastics, organic waste, and other pollutants from water bodies."
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Cloud-based analytics provide insights into cleaning patterns, water quality trends, and environmental impact metrics."
    }
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 py-12 sm:py-16 px-4 sm:px-6"
    >
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-[fadeIn_0.8s_ease-out] px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-3 sm:mb-4 drop-shadow-lg animate-[slideInDown_0.6s_ease-out] leading-tight">
            About Albedrozes Rover
          </h2>
        </div>

        {/* Features Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl px-2 sm:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 backdrop-blur-md bg-white/98 border border-white/20 animate-[scaleIn_0.6s_ease-out] cursor-pointer touch-manipulation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-4xl sm:text-5xl flex-shrink-0 transition-all duration-300 hover:scale-125 hover:rotate-12 animate-[bounce_2s_ease-in-out_infinite]">{feature.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 sm:mb-3 transition duration-300 hover:text-purple-600 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed transition duration-300 hover:text-gray-900">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
