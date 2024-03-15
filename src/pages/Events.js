import React from "react";
import Navbar from "../components/Navbar";
import HeaderHeroShort from "../components/HeaderHeroShort";
import Footer from "../components/Footer";
import Event from "../components/Event";
import RegisterBanner from "../components/RegisterBanner";

const heroProperties = {
  banner:
    "https://images.unsplash.com/photo-1467307983825-619715426c70?q=80&w=2577&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  mainTitle: {
    text: "Kiddies Events",
    color: "#f8f8f8",
    show: true,
  },
  subTitle: {
    text: "Browse through several kids' adventurous events, and also book us for your next party..",
    color: "#ffff",
    show: true,
  },
  button: { show: false, url: "#", text: "Read more" },
};

function Events() {
  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />

      <section className="mb-12">
        <HeaderHeroShort properties={heroProperties} />
      </section>

      {/* events section */}
      <section className="min-h-100 m-0 md:m-6">
        <Event limit={10} />
      </section>

      <section className="mb-12 min-h-100">
        <RegisterBanner />
      </section>

      <section className="min-h-100">
        <Footer />
      </section>
    </main>
  );
}

export default Events;
