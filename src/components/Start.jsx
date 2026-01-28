import { useNavigate } from "react-router-dom";
const Start = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: "🗑️",
      title: "Surface Debris Collection",
      description: "Intelligent surface debris detection and removal system"
    },
    {
      icon: "📍",
      title: "Real-time Tracking",
      description: "Live location monitoring and surface route optimization"
    },
    {
      icon: "📷",
      title: "Surface Camera",
      description: "High-resolution imaging for surface water inspection"
    }
  ];

  const rovers = [
    {
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&h=300&fit=crop",
      title: "AquaBot-X1",
      description: "Surface water cleaning specialist with advanced debris collection"
    },
    {
      image: "https://images.unsplash.com/photo-1561144257-e32e6d3c4e8f?w=400&h=300&fit=crop",
      title: "OceanRover Pro",
      description: "High-capacity surface debris collection for large water bodies"
    },
    {
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop",
      title: "WaterGuard-S2",
      description: "Solar-powered surface cleaning with 12-hour runtime"
    },
    {
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=300&fit=crop",
      title: "TidalClean Elite",
      description: "AI-powered surface navigation for complex aquatic environments"
    }
  ];

  return (
    <div id="start" className="min-h-screen bg-gradient-to-br from-emerald-300 via-teal-300 to-cyan-300 py-6 sm:py-12 px-3 sm:px-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 animate-[scaleIn_0.6s_ease-out]">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="text-4xl sm:text-5xl animate-[float_3s_ease-in-out_infinite]">🌊</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 leading-tight px-2">
            Welcome to Albedrozes
          </h1>
          <p className="text-lg sm:text-xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-semibold mb-2 px-2">
            Water Cleaning Rover System
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4 leading-relaxed">
            Advanced Autonomous Water Purification & Debris Collection Platform
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-emerald-50 to-teal-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border-l-4 border-emerald-400 hover:shadow-lg hover:border-teal-400 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 animate-[slideInLeft_0.5s_ease-out]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-3xl sm:text-4xl flex-shrink-0">{feature.icon}</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold text-base sm:text-lg py-3.5 sm:py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 animate-[pulse_2s_ease-in-out_infinite]"
        >
          Sign In
        </button>
      </div>

      {/* Rover Gallery Section */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 pb-8 sm:pb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-2 sm:mb-3 drop-shadow-lg animate-[fadeIn_1s_ease-out] px-4">
          Our Surface Rover Fleet
        </h2>
        <p className="text-center text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 drop-shadow animate-[fadeIn_1.2s_ease-out] px-6">
          Meet our advanced surface water cleaning rovers designed for every aquatic environment
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {rovers.map((rover, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300 animate-[slideInUp_0.6s_ease-out]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-44 sm:h-48 overflow-hidden">
                <img
                  src={rover.image}
                  alt={rover.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{rover.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{rover.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Start;
