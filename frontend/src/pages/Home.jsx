import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import EventOverview from "../components/EventOverview";
import SpeakersSection from "../components/SpeakersSection";
import ScheduleSection from "../components/ScheduleSection";
import AboutSection from "../components/AboutSection";
import RegisterSection from "../components/RegisterSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Event Overview Section */}
      <section id="overview" className="bg-black">
        <EventOverview />
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="bg-black">
        <SpeakersSection />
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="bg-black">
        <ScheduleSection />
      </section>

      {/* About Section */}
      <section id="about" className="bg-black">
        <AboutSection />
      </section>

      {/* Registration Section */}
      <section id="register" className="bg-black">
        <RegisterSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black">
        <ContactSection />
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export default Home;
