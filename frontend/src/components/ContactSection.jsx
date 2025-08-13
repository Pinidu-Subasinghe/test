import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-black py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Left Column: Contact Info */}
        <div className="bg-purple-800/60 rounded-2xl p-10 shadow-lg h-full flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-white">Contact Us</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              For group registrations, sponsorship opportunities, or any questions about the event, 
              please contact our team. We're here to assist you with all your inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:events@finastra.com"
              className="flex items-center justify-center gap-3 bg-purple-700 hover:bg-purple-600 px-6 py-4 rounded-lg font-semibold transition-all text-white shadow-md"
            >
              📧 events@finastra.com
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-3 bg-purple-700 hover:bg-purple-600 px-6 py-4 rounded-lg font-semibold transition-all text-white shadow-md"
            >
              📞 +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Right Column: Newsletter Signup */}
        <div className="bg-pink-900/50 rounded-2xl p-10 shadow-lg h-full flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white text-center md:text-left">Stay Connected</h3>
            <p className="text-purple-200 mb-8 text-center md:text-left">
              Subscribe to get the latest updates about future events, industry insights, and Finastra news.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed! Thank you.');
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-white/70 transition"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
