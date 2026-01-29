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

        <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-inner p-4 sm:p-6 mb-8 sm:mb-10 border-2 border-dashed border-teal-200 animate-[fadeIn_1s_ease-out]">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/images/rover2.jpeg" 
              alt="Water Cleaning Rover" 
              className="w-full h-auto max-w-full object-contain rounded-lg"
            />
          </div>
          <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Surface Rover
          </h2>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold text-base sm:text-lg py-4 sm:py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 animate-[pulse_2s_ease-in-out_infinite] touch-manipulation"
        >
          Sign In
        </button>
      </div>

      {/* <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 animate-[scaleIn_0.6s_ease-out]">
        <div>
          <img src="/images/rover2.jpeg" alt="" />
        </div>

      </div> */}
    </div>
  );
};

export default Start;
