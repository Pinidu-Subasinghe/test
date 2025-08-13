import React, { useState, useEffect, useRef } from "react";

const SpeakersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const speakers = [
    {
      name: "Michael Chen",
      title: "Head of Innovation",
      company: "FinTech Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      expertise: "Blockchain Technology",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "VP of Strategy",
      company: "Tech Banking Inc",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      expertise: "AI & Machine Learning",
    },
    {
      name: "James Wilson",
      title: "Senior Director",
      company: "Future Finance",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      expertise: "Regulatory Compliance",
    },
    {
      name: "Lisa Park",
      title: "Chief Technology Officer",
      company: "Digital Bank Pro",
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      expertise: "Cloud Infrastructure",
    },
  ];

  // Main section intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
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

  // Individual card animation observer
  useEffect(() => {
    const cardObservers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => new Set(prev).add(index));
            }, index * 100); // Stagger the animations
          }
        },
        {
          threshold: 0.3,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      cardObservers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="speakers"
      className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute top-32 left-16 w-40 h-40 bg-purple-500 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-32 right-16 w-56 h-56 bg-pink-500 rounded-full blur-3xl transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-15 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-10 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Our Speakers
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-800 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Learn from industry pioneers and thought leaders who are shaping the
            future of banking and financial services
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{
                transitionDelay: visibleCards.has(index)
                  ? "0ms"
                  : `${index * 50}ms`,
              }}
            >
              {/* Card background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Profile Image Section */}
              <div className="relative mb-6">
                <div className="relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-purple-500/20 group-hover:ring-purple-500/50 transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 w-8 h-8 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="text-center relative z-10">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-purple-300 font-medium mb-1 group-hover:text-purple-200 transition-colors duration-300">
                  {speaker.title}
                </p>
                <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {speaker.company}
                </p>

                {/* Expertise Badge */}
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-3 py-1 rounded-full group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300 transform group-hover:scale-105">
                  <span className="text-xs text-purple-300 font-medium group-hover:text-purple-200 transition-colors duration-300">
                    {speaker.expertise}
                  </span>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div
          className={`text-center mt-16 transition-all duration-800 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-400 mb-6 transition-colors duration-300 hover:text-gray-300">
            And many more industry experts...
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95 relative overflow-hidden group">
            <span className="relative z-10">View Full Speaker List</span>

            {/* Button animation overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default SpeakersSection;
