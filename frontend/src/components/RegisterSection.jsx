import React, { useState, useEffect, useRef } from "react";
import { registerUser } from "../Api/registerApi.js";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    attendanceType: "in-person",
    interests: [],
    specialRequirements: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleTickets, setVisibleTickets] = useState(new Set());
  const sectionRef = useRef(null);
  const ticketRefs = useRef([]);

  const interestOptions = [
    "Digital Transformation",
    "AI & Machine Learning",
    "Blockchain Technology",
    "Cybersecurity",
    "Regulatory Compliance",
    "Customer Experience",
    "Data Analytics",
    "Cloud Infrastructure",
    "Sustainable Finance",
    "Open Banking",
  ];

  const ticketOptions = [
    {
      type: "Early Bird",
      price: "$599",
      originalPrice: "$799",
      features: [
        "Access to all sessions",
        "Networking events",
        "Conference materials",
        "Lunch and refreshments",
        "Certificate of attendance",
      ],
      popular: true,
      available: true,
    },
    {
      type: "Standard",
      price: "$799",
      originalPrice: null,
      features: [
        "Access to all sessions",
        "Networking events",
        "Conference materials",
        "Lunch and refreshments",
        "Certificate of attendance",
      ],
      popular: false,
      available: true,
    },
    {
      type: "VIP",
      price: "$1299",
      originalPrice: null,
      features: [
        "Priority seating",
        "VIP networking dinner",
        "One-on-one speaker meetings",
        "Premium conference kit",
        "All standard features",
      ],
      popular: false,
      available: true,
    },
    {
      type: "Virtual",
      price: "$299",
      originalPrice: null,
      features: [
        "Live stream access",
        "Interactive Q&A",
        "Digital materials",
        "Recording access (30 days)",
        "Virtual networking sessions",
      ],
      popular: false,
      available: true,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "interests") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value),
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await registerUser(formData); // call frontend API
      setSubmitMessage(
        "Registration successful! Check your email for confirmation."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        phone: "",
        country: "",
        attendanceType: "in-person",
        interests: [],
        specialRequirements: "",
        newsletter: false,
      });
    } catch (error) {
      console.error(error);
      setSubmitMessage("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Section intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Ticket intersection observer
  useEffect(() => {
    const ticketObservers = ticketRefs.current.map((ticket, index) => {
      if (!ticket) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleTickets((prev) => new Set(prev).add(index));
            }, index * 150);
          }
        },
        { threshold: 0.3, rootMargin: "0px 0px -20px 0px" }
      );
      observer.observe(ticket);
      return observer;
    });
    return () => ticketObservers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute top-32 right-16 w-48 h-48 bg-purple-500 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
        ></div>
        <div
          className={`absolute bottom-32 left-16 w-64 h-64 bg-pink-500 rounded-full blur-3xl transition-all duration-1000 delay-500 ${
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
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Register Now
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-800 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Secure your spot at the most important banking technology event of
            the year
          </p>
        </div>

        {/* Tickets Section */}
        <h3
          className={`text-2xl font-bold mb-6 text-center transition-all duration-800 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Choose Your Ticket
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {ticketOptions.map((ticket, index) => (
            <div
              key={index}
              ref={(el) => (ticketRefs.current[index] = el)}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer ${
                ticket.popular
                  ? "border-purple-500 ring-2 ring-purple-500/30 hover:ring-purple-500/60"
                  : "border-gray-700 hover:border-purple-500/30"
              } ${
                visibleTickets.has(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{
                transitionDelay: visibleTickets.has(index)
                  ? "0ms"
                  : `${index * 100}ms`,
              }}
            >
              {/* Popular badge with animation */}
              {ticket.popular && (
                <div
                  className={`absolute -top-2 left-1/2 transform -translate-x-1/2 transition-all duration-500 delay-200 ${
                    visibleTickets.has(index)
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                >
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Background hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-center mb-2 relative z-10">
                <h4 className="text-lg font-bold group-hover:text-purple-300 transition-colors duration-300">
                  {ticket.type}
                </h4>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                    {ticket.price}
                  </span>
                  {ticket.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-1">
                      {ticket.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <ul className="text-xs text-gray-300 mb-2 space-y-1 relative z-10">
                {ticket.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <span className="text-green-400 mr-1 transform group-hover:scale-110 transition-transform duration-300">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group/btn ${
                  ticket.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg hover:shadow-purple-500/25"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-200 hover:shadow-md"
                }`}
                disabled={!ticket.available}
              >
                <span className="relative z-10">
                  {ticket.available ? "Select" : "Sold Out"}
                </span>

                {/* Button hover effect */}
                {ticket.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                )}
              </button>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Registration Form - Static (No Animation) */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 relative overflow-hidden group">
          {/* Subtle background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-pink-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h3 className="text-2xl font-bold mb-6 text-center relative z-10">
            Registration Details
          </h3>

          {submitMessage && (
            <div
              className={`mb-6 p-3 rounded-lg text-center text-sm relative z-10 ${
                submitMessage.includes("successful")
                  ? "bg-green-900 text-green-300 border border-green-600"
                  : "bg-red-900 text-red-300 border border-red-600"
              }`}
            >
              {submitMessage}
            </div>
          )}

          <div className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company *"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title *"
                value={formData.jobTitle}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select Country *</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="AU">Australia</option>
                <option value="SG">Singapore</option>
                <option value="IN">India</option>
                <option value="BR">Brazil</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            {/* Attendance */}
            <div className="flex space-x-4">
              <label className="flex items-center hover:text-purple-300 transition-colors duration-200 cursor-pointer">
                <input
                  type="radio"
                  name="attendanceType"
                  value="in-person"
                  checked={formData.attendanceType === "in-person"}
                  onChange={handleInputChange}
                  className="mr-2 text-purple-500 focus:ring-purple-500"
                />
                In-Person
              </label>
              <label className="flex items-center hover:text-purple-300 transition-colors duration-200 cursor-pointer">
                <input
                  type="radio"
                  name="attendanceType"
                  value="virtual"
                  checked={formData.attendanceType === "virtual"}
                  onChange={handleInputChange}
                  className="mr-2 text-purple-500 focus:ring-purple-500"
                />
                Virtual
              </label>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              {interestOptions.map((interest, index) => (
                <label
                  key={index}
                  className="flex items-center hover:text-purple-300 transition-colors duration-200 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleInputChange}
                    className="mr-1 text-purple-500 focus:ring-purple-500 rounded"
                  />
                  {interest}
                </label>
              ))}
            </div>

            {/* Special requirements */}
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleInputChange}
              rows="3"
              placeholder="Special Requirements / Dietary Restrictions"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
            />

            {/* Newsletter */}
            <label className="flex items-center text-sm hover:text-purple-300 transition-colors duration-200 cursor-pointer">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="mr-2 text-purple-500 focus:ring-purple-500 rounded"
              />
              Subscribe to newsletter
            </label>

            {/* Submit */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95"
                }`}
              >
                <span className="relative z-10">
                  {isSubmitting ? "Registering..." : "Complete Registration"}
                </span>

                {/* Loading animation */}
                {isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700"></div>
                )}

                {/* Button background animation */}
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default RegisterSection;
