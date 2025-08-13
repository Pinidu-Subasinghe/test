import React, { useState, useEffect, useRef } from "react";

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [dayTransition, setDayTransition] = useState(false);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const scheduleData = {
    day1: [
      {
        time: "8:00 AM",
        title: "Registration & Networking Breakfast",
        speaker: "",
        type: "networking",
        description: "Welcome coffee and networking session",
      },
      {
        time: "9:00 AM",
        title: "Opening Keynote: The Future of Banking",
        speaker: "Sarah Johnson",
        type: "keynote",
        description:
          "Setting the stage for digital transformation in financial services",
      },
      {
        time: "10:00 AM",
        title: "Panel: AI Revolution in Financial Services",
        speaker: "Dr. Emily Rodriguez, Michael Chen, Lisa Park",
        type: "panel",
        description: "Exploring AI applications, challenges, and opportunities",
      },
      {
        time: "11:15 AM",
        title: "Coffee Break & Exhibition",
        speaker: "",
        type: "break",
        description: "Networking and sponsor exhibitions",
      },
      {
        time: "11:45 AM",
        title: "Blockchain and Digital Assets",
        speaker: "Michael Chen",
        type: "presentation",
        description: "The role of blockchain in modern banking infrastructure",
      },
      {
        time: "12:30 PM",
        title: "Lunch & Networking",
        speaker: "",
        type: "networking",
        description: "Networking lunch with industry peers",
      },
      {
        time: "2:00 PM",
        title: "Customer Experience Transformation",
        speaker: "Amanda Foster",
        type: "presentation",
        description: "Designing exceptional digital customer journeys",
      },
      {
        time: "2:45 PM",
        title: "Cybersecurity in Digital Banking",
        speaker: "David Thompson",
        type: "presentation",
        description: "Protecting digital assets and customer data",
      },
      {
        time: "3:30 PM",
        title: "Afternoon Break",
        speaker: "",
        type: "break",
        description: "Refreshments and networking",
      },
      {
        time: "4:00 PM",
        title: "Innovation Showcase",
        speaker: "Multiple Presenters",
        type: "showcase",
        description: "Latest fintech innovations and startup pitches",
      },
      {
        time: "5:00 PM",
        title: "Day 1 Wrap-up & Cocktail Reception",
        speaker: "",
        type: "networking",
        description: "End of day networking with drinks",
      },
    ],
    day2: [
      {
        time: "9:00 AM",
        title: "Day 2 Opening: Sustainable Finance",
        speaker: "Maria Gonzalez",
        type: "keynote",
        description: "ESG integration and sustainable banking practices",
      },
      {
        time: "10:00 AM",
        title: "Data Analytics & Insights",
        speaker: "Robert Kumar",
        type: "presentation",
        description: "Leveraging big data for business intelligence",
      },
      {
        time: "10:45 AM",
        title: "Regulatory Technology (RegTech)",
        speaker: "James Wilson",
        type: "presentation",
        description: "Automating compliance and regulatory processes",
      },
      {
        time: "11:30 AM",
        title: "Coffee Break",
        speaker: "",
        type: "break",
        description: "Morning refreshments and networking",
      },
      {
        time: "12:00 PM",
        title: "Cloud Infrastructure & Scalability",
        speaker: "Lisa Park",
        type: "presentation",
        description: "Building resilient cloud-first banking platforms",
      },
      {
        time: "12:45 PM",
        title: "Lunch & Partner Presentations",
        speaker: "",
        type: "networking",
        description: "Networking lunch with sponsor presentations",
      },
      {
        time: "2:15 PM",
        title: "Strategic Partnerships & Ecosystems",
        speaker: "Sophie Martin",
        type: "presentation",
        description: "Building collaborative fintech ecosystems",
      },
      {
        time: "3:00 PM",
        title: "Innovation Strategy & Culture",
        speaker: "Thomas Anderson",
        type: "presentation",
        description: "Fostering innovation within traditional banking",
      },
      {
        time: "3:45 PM",
        title: "Final Panel: Banking 2030 Vision",
        speaker: "All Keynote Speakers",
        type: "panel",
        description: "Looking ahead to the future of financial services",
      },
      {
        time: "4:30 PM",
        title: "Closing Remarks & Next Steps",
        speaker: "Event Organizers",
        type: "closing",
        description: "Event wrap-up and future initiatives",
      },
    ],
  };

  const getTypeColor = (type) => {
    const colors = {
      keynote: "from-purple-600 to-pink-600",
      panel: "from-blue-600 to-purple-600",
      presentation: "from-green-600 to-blue-600",
      networking: "from-orange-600 to-red-600",
      break: "from-gray-600 to-gray-700",
      showcase: "from-pink-600 to-purple-600",
      closing: "from-indigo-600 to-purple-600",
    };
    return colors[type] || "from-gray-600 to-gray-700";
  };

  const getTypeIcon = (type) => {
    const icons = {
      keynote: "🎯",
      panel: "👥",
      presentation: "📊",
      networking: "🤝",
      break: "☕",
      showcase: "🚀",
      closing: "🎊",
    };
    return icons[type] || "📅";
  };

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

  // Individual schedule item observer
  useEffect(() => {
    const currentItems = scheduleData[activeDay];

    const itemObservers = itemRefs.current
      .slice(0, currentItems.length)
      .map((item, index) => {
        if (!item) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set(prev).add(index));
              }, index * 80);
            }
          },
          {
            threshold: 0.4,
            rootMargin: "0px 0px -10px 0px",
          }
        );

        observer.observe(item);
        return observer;
      });

    return () => {
      itemObservers.forEach((observer) => observer?.disconnect());
    };
  }, [activeDay]);

  // Handle day switching animation
  const handleDaySwitch = (day) => {
    if (day !== activeDay) {
      setDayTransition(true);
      setVisibleItems(new Set());

      setTimeout(() => {
        setActiveDay(day);
        setDayTransition(false);
      }, 150);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="schedule"
      className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute top-20 left-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-32 right-24 w-64 h-64 bg-pink-500 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-15 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Event Schedule
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-800 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Two days packed with insights, networking, and innovation in
            financial services
          </p>
        </div>

        {/* Day Selector */}
        <div
          className={`flex justify-center mb-10 flex-wrap gap-2 transition-all duration-800 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => handleDaySwitch("day1")}
            className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
              activeDay === "day1"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                : "text-gray-400 hover:text-white hover:bg-gray-700 hover:shadow-md"
            }`}
          >
            <span className="relative z-10">Day 1 - March 15</span>
            {activeDay === "day1" && (
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            )}
          </button>

          <button
            onClick={() => handleDaySwitch("day2")}
            className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group ${
              activeDay === "day2"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                : "text-gray-400 hover:text-white hover:bg-gray-700 hover:shadow-md"
            }`}
          >
            <span className="relative z-10">Day 2 - March 16</span>
            {activeDay === "day2" && (
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            )}
          </button>
        </div>

        {/* Timeline */}
        <div
          className={`relative transition-all duration-300 ${
            dayTransition ? "opacity-50 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 opacity-30"></div>

          <div className="space-y-8">
            {scheduleData[activeDay].map((item, index) => (
              <div
                key={`${activeDay}-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`flex flex-col md:flex-row md:items-start md:space-x-8 transition-all duration-500 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0 translate-x-0"
                    : "opacity-0 translate-y-4 md:translate-x-8 md:translate-y-0"
                }`}
                style={{
                  transitionDelay: visibleItems.has(index)
                    ? "0ms"
                    : `${index * 60}ms`,
                }}
              >
                {/* Time with animated dot */}
                <div className="flex-shrink-0 md:w-24 text-left md:text-right mb-2 md:mb-0 relative">
                  <div className="text-purple-300 font-semibold text-lg group-hover:text-purple-200 transition-colors duration-300">
                    {item.time}
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -right-6 top-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-0 animate-ping-once"></div>
                  <div
                    className={`hidden md:block absolute -right-6 top-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 ${
                      visibleItems.has(index) ? "scale-100" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${index * 60 + 200}ms` }}
                  ></div>
                </div>

                {/* Content */}
                <div className="flex-grow min-h-[80px] bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group relative overflow-hidden hover:scale-[1.02]">
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-start relative z-10">
                    <div>
                      <div className="flex items-center space-x-3 mb-2 flex-wrap">
                        <span
                          className="text-2xl transition-transform duration-300 group-hover:scale-110"
                          style={{
                            filter:
                              "drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
                          }}
                        >
                          {getTypeIcon(item.type)}
                        </span>

                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {item.title}
                        </h3>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(
                            item.type
                          )} text-white capitalize transform group-hover:scale-105 transition-transform duration-300 shadow-md`}
                        >
                          {item.type}
                        </span>
                      </div>

                      {item.speaker && (
                        <p className="text-purple-300 font-medium mb-2 group-hover:text-purple-200 transition-colors duration-300">
                          {item.speaker}
                        </p>
                      )}

                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details */}
        <div
          className={`text-center mt-16 space-y-6 transition-all duration-800 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-6 md:p-8 mb-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 group relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-purple-200 transition-colors duration-300">
              Event Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center relative z-10">
              <div className="group/item hover:scale-105 transition-transform duration-300 p-3 rounded-lg hover:bg-white/5">
                <div className="text-purple-300 font-semibold mb-1 group-hover/item:text-purple-200 transition-colors duration-300">
                  📅 Dates
                </div>
                <div className="text-white group-hover/item:text-gray-100 transition-colors duration-300">
                  March 15-16, 2024
                </div>
              </div>
              <div className="group/item hover:scale-105 transition-transform duration-300 p-3 rounded-lg hover:bg-white/5">
                <div className="text-purple-300 font-semibold mb-1 group-hover/item:text-purple-200 transition-colors duration-300">
                  📍 Location
                </div>
                <div className="text-white group-hover/item:text-gray-100 transition-colors duration-300">
                  Convention Center, Downtown
                </div>
              </div>
              <div className="group/item hover:scale-105 transition-transform duration-300 p-3 rounded-lg hover:bg-white/5">
                <div className="text-purple-300 font-semibold mb-1 group-hover/item:text-purple-200 transition-colors duration-300">
                  ⏰ Duration
                </div>
                <div className="text-white group-hover/item:text-gray-100 transition-colors duration-300">
                  2 Full Days
                </div>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95 relative overflow-hidden group">
            <span className="relative z-10">Download Full Schedule PDF</span>

            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

            {/* Download icon animation */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white">📥</span>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping-once {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-once {
          animation: ping-once 1s cubic-bezier(0, 0, 0.2, 1);
        }

        @keyframes slideInTimeline {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
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

export default ScheduleSection;
