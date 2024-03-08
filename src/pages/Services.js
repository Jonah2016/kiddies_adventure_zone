import React from "react";
import Navbar from "../components/Navbar";
import styles from "../assets/css/custom.module.css";
import HeaderHero from "../components/HeaderHero";
import { useEffect, useState } from "react";

const heroProperties = {
  banner:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  mainTitle: {
    text: "Services",
    color: "#ffff",
    show: true,
  },
  subTitle: {
    text: "Maecenas at magna pulvinar, pharetra neque nec, condimentum mauris. Nullam sapien augue, auctor ac augue sed, fermentum rhoncus nunc. ",
    color: "#ffff",
    show: false,
  },
  button: { show: false, url: "#", text: "Read more" },
};

function renderService(serv) {
  const resp = serv.map((item) => (
    <div class="mb-14 lg:mb-0" key={item._id}>
      <div class="block m-5 h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="flex justify-center">
          <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
            {item.icon}
          </div>
        </div>
        <div class="p-6">
          <h5 class="mb-4 text-lg font-semibold">{item.title}</h5>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  ));

  return resp;
}

function Services() {
  const [service, setService] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/api/service")
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const serviceData = { ...service };

  return (
    <main className="md:m-6 m-auto max-w-[1280px]">
      <Navbar />
      <HeaderHero properties={heroProperties} />

      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center">
          <h2 class="mb-20 text-3xl font-bold">Why is it so great?</h2>

          <div class="grid lg:grid-cols-3 lg:gap-x-12">
            {serviceData.length > 0 && renderService(serviceData)}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Services;
