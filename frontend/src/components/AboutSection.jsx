import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Innovation Focus",
      description:
        "Cutting-edge technologies and emerging trends in financial services",
    },
    {
      icon: "🤝",
      title: "Networking",
      description:
        "Connect with industry leaders, peers, and potential partners",
    },
    {
      icon: "💡",
      title: "Practical Insights",
      description:
        "Actionable strategies and real-world implementation guidance",
    },
    {
      icon: "🎯",
      title: "Expert-Led",
      description:
        "Sessions led by recognized thought leaders and practitioners",
    },
    {
      icon: "🌐",
      title: "Global Perspective",
      description: "International speakers sharing diverse market insights",
    },
    {
      icon: "📈",
      title: "Business Growth",
      description: "Strategies to drive growth and competitive advantage",
    },
  ];

  const stats = [
    { number: "50+", label: "Industry Experts" },
    { number: "20+", label: "Interactive Sessions" },
    { number: "1000+", label: "Expected Attendees" },
    { number: "15+", label: "Countries" },
  ];

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Finastra
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Finastra is the world's third largest fintech company, powering
              the future of finance. We help banks and financial institutions
              accelerate their digital transformation journey through innovative
              technology solutions, deep industry expertise, and collaborative
              ecosystems.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Our mission is to unlock the potential of people and businesses
              everywhere by accelerating innovation in financial services. We
              believe in the power of open finance and collaborative banking to
              create better outcomes for financial institutions and their
              customers.
            </p>
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} className="text-center" variants={cardVariants}>
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-4 sm:p-6 mb-2 sm:mb-4">
                <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Attend This Event?
          </h3>
          <motion.div
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col justify-between bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group min-h-[220px]"
                variants={cardVariants}
              >
                <div>
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 sm:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Our Vision for the Future
            </h3>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
              We envision a world where financial services are more accessible,
              efficient, and innovative. Through open banking, collaborative
              ecosystems, and cutting-edge technology, we're building the
              infrastructure that will power the next generation of financial
              services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🔓</span>
                </div>
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                  Open Banking
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Enabling seamless integration and collaboration
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <span className="text-xl sm:text-2xl">⚡</span>
                </div>
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                  Innovation
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Driving technological advancement in finance
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🌍</span>
                </div>
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                  Global Impact
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">
                  Creating positive change worldwide
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
