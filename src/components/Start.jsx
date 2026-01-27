import { useNavigate } from "react-router-dom";
const Start = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: "🗑️",
      title: "Debris Collection",
      description: "Intelligent debris detection and removal system"
    },
    {
      icon: "📍",
      title: "Real-time Tracking",
      description: "Live location monitoring and route optimization"
    },
    {
      icon: "📷",
      title: "Underwater Camera",
      description: "High-resolution imaging for deep water inspection"
    }
  ];

  return (
    <div id="start" className="min-h-screen bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">🌊</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
            Welcome to AquaClean
          </h1>
          <p className="text-xl text-cyan-600 font-semibold mb-2">
            Water Cleaning Rover System
          </p>
          <p className="text-gray-600 text-lg">
            Advanced Autonomous Water Purification & Debris Collection Platform
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-cyan-400 hover:shadow-md transition"
            >
              <span className="text-4xl flex-shrink-0">{feature.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg py-3 px-6 rounded-xl transition transform hover:-translate-y-1 shadow-lg"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Start;
