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

  return (
    <div id="start" className="min-h-screen bg-gradient-to-br from-emerald-300 via-teal-300 to-cyan-300 py-6 sm:py-12 px-3 sm:px-4 touch-manipulation">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 animate-[scaleIn_0.6s_ease-out]">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="text-4xl sm:text-5xl animate-[float_3s_ease-in-out_infinite]" role="img" aria-label="water">🌊</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2 leading-tight px-2">
            Welcome to Albedrozes
          </h1>
          <p className="text-base sm:text-lg md:text-xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-semibold mb-2 px-2">
            Water Cleaning Rover System
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg px-4 leading-relaxed">
            Advanced Autonomous Water Purification & Debris Collection Platform
          </p>
        </div>

        <div className="w-full bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden mb-8 sm:mb-10 border border-teal-200 animate-[fadeIn_1s_ease-out] hover:shadow-2xl transition-all duration-300">
          <div className="relative overflow-hidden bg-white p-6 sm:p-8">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 pointer-events-none"></div>
            <img 
              src="/images/rover2.jpeg" 
              alt="Albedrozes Surface Rover - Advanced Water Cleaning System" 
              className="w-full h-auto max-w-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 relative z-10"
            />
          </div>
          <div className="p-5 sm:p-6 bg-white">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
              Surface Rover
            </h2>
            <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-2 mb-3">
              Our flagship autonomous water cleaning rover, equipped with intelligent debris collection, real-time GPS tracking, and advanced water purification technology.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-700">
                🤖 Autonomous
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-teal-100 text-teal-700">
                🔋 12hr Battery
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-cyan-100 text-cyan-700">
                📍 GPS Enabled
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold text-base sm:text-lg py-4 sm:py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 animate-[pulse_2s_ease-in-out_infinite] touch-manipulation"
        >
          Sign In
        </button>
      </div>
{/* 
      <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden mb-8 sm:mb-12 border border-teal-200 animate-[scaleIn_0.8s_ease-out] hover:shadow-2xl transition-all duration-300" style={{ animationDelay: '0.2s' }}>
        <div className="relative overflow-hidden bg-white p-6 sm:p-8">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-400/10 to-orange-400/10 pointer-events-none"></div>
          <img 
            src="/images/rover2.jpeg" 
            alt="Albedrozes Advanced Water Rover - Dual Tank System" 
            className="w-full h-auto max-w-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 relative z-10"
          />
        </div>
        <div className="p-5 sm:p-6 bg-white">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-3">
            Dual Collection System
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-2 mb-3">
            Features dual floating tanks for enhanced stability and increased debris storage capacity. Perfect for large-scale water body cleaning operations with extended deployment times.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-rose-100 text-rose-700">
              🗑️ 50L Capacity
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-orange-100 text-orange-700">
              ⚖️ Balanced Design
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-amber-100 text-amber-700">
              🔄 Auto-Deploy
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Start;
