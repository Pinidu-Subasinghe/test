import React, { useState, useEffect, useRef } from "react";

const EventOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);

          // Animate stats numbers
          statsRef.current.forEach((stat, index) => {
            if (stat) {
              const finalNumber = parseInt(stat.textContent.replace(/\D/g, ""));
              animateNumber(stat, finalNumber, index * 200);
            }
          });
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animate numbers counting up
  const animateNumber = (element, target, delay) => {
    setTimeout(() => {
      let current = 0;
      const increment = target / 30;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          element.textContent =
            target === 1000
              ? "1000+"
              : target === 50
              ? "50+"
              : target.toString();
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toString();
        }
      }, 50);
    }, delay);
  };

  return (
    <section
      ref={sectionRef}
      id="events"
      className="bg-black text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-2xl transition-all duration-1000 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-20 w-48 h-48 bg-pink-500 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-15 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Event Overview
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p
                className={`text-lg transition-all duration-800 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                The banking industry stands at a pivotal moment. Digital
                transformation, changing customer expectations, and emerging
                technologies are reshaping the financial landscape at an
                unprecedented pace.
              </p>

              <p
                className={`transition-all duration-800 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                This exclusive event brings together visionary leaders,
                innovative technologists, and forward-thinking strategists to
                explore how financial institutions can not just survive, but
                thrive in this new era of banking.
              </p>

              <p
                className={`transition-all duration-800 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                From AI-powered customer experiences to blockchain innovations,
                from regulatory compliance to sustainable finance, we'll dive
                deep into the trends and technologies that are defining the
                future of financial services.
              </p>
            </div>

            {/* Animated Stats Cards */}
            <div
              className={`mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-800 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center p-6 bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group cursor-pointer">
                <div
                  ref={(el) => (statsRef.current[0] = el)}
                  className="text-3xl font-bold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors duration-300"
                >
                  0
                </div>
                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Expert Speakers
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-pink-900 to-pink-800 rounded-xl transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 group cursor-pointer delay-100">
                <div
                  ref={(el) => (statsRef.current[1] = el)}
                  className="text-3xl font-bold text-pink-300 mb-2 group-hover:text-pink-200 transition-colors duration-300"
                >
                  0
                </div>
                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Full Days
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-700/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group cursor-pointer delay-200">
                <div
                  ref={(el) => (statsRef.current[2] = el)}
                  className="text-3xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors duration-300"
                >
                  0
                </div>
                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Attendees
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95"
              }`}
            >
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Financial Technology"
                  className="rounded-2xl shadow-2xl w-full h-auto transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl transition-opacity duration-500 group-hover:from-purple-900/70"></div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>

              {/* Animated Floating Cards */}
              <div
                className={`absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl shadow-lg transform transition-all duration-800 delay-500 hover:scale-110 hover:shadow-2xl cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0 rotate-0"
                    : "opacity-0 translate-y-4 rotate-12"
                }`}
                style={{
                  animation: isVisible
                    ? "float 6s ease-in-out infinite"
                    : "none",
                }}
              >
                <div className="text-white font-semibold">Innovation Hub</div>
                <div className="text-purple-200 text-sm">Latest FinTech</div>
              </div>

              <div
                className={`absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl shadow-lg transform transition-all duration-800 delay-700 hover:scale-110 hover:shadow-2xl cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0 rotate-0"
                    : "opacity-0 translate-y-4 -rotate-12"
                }`}
                style={{
                  animation: isVisible
                    ? "float 6s ease-in-out infinite reverse"
                    : "none",
                }}
              >
                <div className="text-white font-semibold">Networking</div>
                <div className="text-blue-200 text-sm">
                  Connect & Collaborate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default EventOverview;
