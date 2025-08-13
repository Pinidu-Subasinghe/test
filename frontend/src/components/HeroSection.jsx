import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-purple-800 animate-pulse"></div>
      
      {/* Dynamic Mouse Follower */}
      <div 
        className="absolute pointer-events-none opacity-30 transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-48 h-48 bg-gradient-radial from-purple-400/30 to-transparent rounded-full blur-xl"></div>
      </div>

      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500 rounded-full blur-xl animate-bounce"></div>
        <div 
          className="absolute top-60 right-4 sm:right-20 w-36 sm:w-48 h-36 sm:h-48 bg-pink-500 rounded-full blur-2xl"
          style={{
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500 rounded-full blur-3xl"
          style={{
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>
        
        {/* Additional animated elements */}
        <div 
          className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-purple-400 rounded-full opacity-40"
          style={{
            animation: 'spin 20s linear infinite',
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div 
          className="absolute top-32 right-1/3 w-8 h-8 bg-pink-400 rounded-full opacity-60"
          style={{
            animation: 'pulse 3s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-20 gap-12">
        
        {/* Left Column: Text with staggered animations */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
              style={{
                animation: isVisible ? 'slideInLeft 0.8s ease-out' : 'none'
              }}
            >
              Reimagine Banking:
            </span>
            <br />
            <span 
              className="text-white inline-block"
              style={{
                animation: isVisible ? 'slideInRight 0.8s ease-out 0.2s both' : 'none'
              }}
            >
              Adapt. Evolve. Thrive.
            </span>
          </h1>

          <p 
            className={`text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Join industry leaders as we explore the future of financial services, 
            innovative technologies, and transformative strategies that will shape 
            the banking landscape of tomorrow.
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95 relative overflow-hidden group">
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25 active:scale-95 relative overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          <div 
            className={`mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-sm transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:animate-bounce"></div>
              <span className="group-hover:text-green-400 transition-colors duration-200">Live Event</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse group-hover:animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <span className="group-hover:text-blue-400 transition-colors duration-200">Virtual Available</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse group-hover:animate-bounce" style={{ animationDelay: '1s' }}></div>
              <span className="group-hover:text-yellow-400 transition-colors duration-200">Interactive Sessions</span>
            </div>
          </div>
        </div>

        {/* Right Column: Enhanced Image with animations */}
        <div 
          className={`flex-1 hidden lg:block transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="relative group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80"
              alt="Banking Conference"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/25"
            />
            
            {/* Animated background card */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl -z-10 transform group-hover:scale-105 transition-transform duration-500"></div>
            
            {/* Floating elements around image */}
            <div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            ></div>
            <div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-60"
              style={{ animation: 'float 4s ease-in-out infinite reverse' }}
            ></div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default HeroSection;