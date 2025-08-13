import React from "react";

const FooterSection = () => {
  const footerLinks = {
    event: [
      { name: "Schedule", href: "#schedule" },
      { name: "Speakers", href: "#speakers" },
      { name: "Registration", href: "#register" },
      { name: "Venue", href: "#venue" },
      { name: "Sponsors", href: "#sponsors" },
    ],
    company: [
      { name: "About Finastra", href: "#about" },
      { name: "Solutions", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Event FAQ", href: "#" },
      { name: "Tech Support", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                FINASTRA
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Finastra is the world's third largest fintech company, powering
                the future of finance through innovative technology solutions
                and collaborative ecosystems.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-xl hover:scale-110 transition-transform"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Event Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">
                Event
              </h4>
              <ul className="space-y-3">
                {footerLinks.event.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">
                Support
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Bar */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📅</span>
              <div>
                <div className="font-semibold">March 15-16, 2024</div>
                <div className="text-sm text-gray-400">Two Full Days</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-semibold">Convention Center</div>
                <div className="text-sm text-gray-400">Downtown Location</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🎫</span>
              <div>
                <div className="font-semibold">Early Bird: $599</div>
                <div className="text-sm text-gray-400">Limited Time Offer</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">👥</span>
              <div>
                <div className="font-semibold">1000+ Attendees</div>
                <div className="text-sm text-gray-400">Global Audience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Finastra. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Register Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#register"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-2xl hover:scale-110 transition-all flex items-center space-x-2"
        >
          <span>🎫</span>
          <span>Register Now</span>
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
