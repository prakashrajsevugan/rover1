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
      className="relative w-full min-h-screen bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 py-16 px-4"
    >
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 drop-shadow-lg">
            About AquaClean Rover
          </h2>
        </div>

        {/* Features Grid */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-3 hover:scale-105 backdrop-blur-md bg-white/98 border border-white/20"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl flex-shrink-0 transition duration-300 hover:scale-125">{feature.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-600 mb-3 transition duration-300 hover:text-purple-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed transition duration-300 hover:text-gray-900">
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
