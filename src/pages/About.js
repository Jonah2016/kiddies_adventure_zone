import React from "react";
import Navbar from "../components/Navbar";
import styles from "../assets/css/custom.module.css";
import HeaderHero from "../components/HeaderHero";
import {
  GiShakingHands,
  GiSpockHand,
  GiArcheryTarget,
  GiBullseye,
  GiTakeMyMoney,
  GiTeamIdea,
  GiTeamUpgrade,
  GiMedicalPack,
} from "react-icons/gi";
import IconCard from "../components/IconCard";
import Title from "../components/Title";
import RegisterBanner from "../components/RegisterBanner";
import Footer from "../components/Footer";

const heroProperties = {
  banner:
    "https://scientia.themerex.net/wp-content/uploads/2019/05/Depositphotos_155947488_xl-2015_2-copyright.jpg?id=1442",
  mainTitle: {
    text: "About Us",
    color: "#ffff",
    show: true,
  },
  subTitle: {
    text: "Maecenas at magna pulvinar, pharetra neque nec, condimentum mauris. Nullam sapien augue, auctor ac augue sed, fermentum rhoncus nunc. ",
    color: "#ffff",
    show: true,
  },
  button: { show: false, url: "#", text: "Read more" },
};

const aboutData = {
  abt_id: 2066,
  abt_organisation_name: "Adom Adventure Zone",
  abt_brief_description:
    "The Kid’s library and events centre is a facility that seeks to create a fun learning environment for children. The facility will host various programs and activities that will positively impact children and their families.",
  abt_mission:
    "To develop, manage and pioneer a variety of initiatives and services aimed at creating a fun learning environment to positively impact the lives of children, young people, and families and enable them to realise their full potential.",
  abt_vision:
    "To become a state-of-the-art facility for learning and fun that will always put children, young people, and their families first.",
  abt_slogan:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  abt_established_date: "2016-06-13",
  abt_photo_one:
    "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  abt_photo_two:
    "https://images.unsplash.com/photo-1605627079912-97c3810a11a4?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoaWxkcmVufGVufDB8fDB8fHww",
  abt_photo_three: "",
  abt_vision_image: "",
  abt_mission_image: "",
  abt_updated_at: "2023-03-20 20:20:01",
};

const valuesData = [
  {
    maintext: "Respect",
    subtext:
      "We treat clients, staff, volunteers and our community with dignity, courtesy, and consideration.",
    icon: (
      <GiShakingHands
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Commitment",
    subtext:
      "We are committed to ensuring excellence and partnering effectively with families, organizations, and communities.",
    icon: (
      <GiSpockHand
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Accountability",
    subtext:
      "We exercise honesty and responsibility in our actions, decisions, and use of resources.",
    icon: (
      <GiTakeMyMoney
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Collaboration",
    subtext:
      "We strive to work collaboratively with individuals, families, organizations, and communities.",
    icon: (
      <GiTeamUpgrade
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Teamwork",
    subtext:
      "Our mission is successfully carried out through staff, volunteers and partners sharing ideas talents and resources.",
    icon: (
      <GiTeamIdea
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
  {
    maintext: "Safety",
    subtext:
      "We treat clients, staff, volunteers and our community with dignity, courtesy, and consideration.",
    icon: (
      <GiMedicalPack
        className={`absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl ${styles.primary__text} bg-opacity-20 duration-300 group-hover:rotate-45`}
        size={80}
      />
    ),
    show: true,
  },
];

function About() {
  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />
      <HeaderHero properties={heroProperties} />

      <section className="bg-[#ffff] pt-20 pb-0 lg:pt-[120px] lg:pb-11">
        <div className="lg:container mx-auto ">
          <div className="wow fadeInUp bg-white" data-wow-delay=".2s">
            <div className="flex flex-wrap">
              <div className="w-full lg:px-4">
                <div className="w-full items-center overflow-hidden lg:flex">
                  <div className="w-full p-7 md:pr-12 lg:w-[60%] ">
                    <span
                      className={`mb-5 inline-block ${styles.primary__bg} py-2 px-5 text-sm font-medium text-white`}
                    >
                      Know Us
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                      {aboutData.abt_organisation_name}
                    </h2>
                    <p className="mb-2 text-gray-500 text-[0.88rem] leading-relaxed">
                      {aboutData.abt_brief_description}
                    </p>

                    <div className="m-0 flex flex-wrap">
                      <div className="w-full md:px-0 px-2 md:w-1/2">
                        <IconCard
                          icon={
                            <GiArcheryTarget
                              className={`${styles.primary__bg} text-white p-2 absolute top-0 left-0 z-[-1] flex rotate-[25deg] items-center justify-center rounded-2xl bg-opacity-20 duration-300 group-hover:rotate-45`}
                              size={60}
                            />
                          }
                          maintext="Mission"
                          subtext={aboutData.abt_mission}
                        />
                      </div>
                      <div className="w-full md:px-0 px-2 md:w-1/2">
                        <IconCard
                          icon={
                            <GiBullseye
                              className={`${styles.primary__bg} text-white p-2 absolute top-0 left-0 z-[-1] flex rotate-[25deg] items-center justify-center rounded-2xl bg-opacity-20 duration-300 group-hover:rotate-45`}
                              size={60}
                            />
                          }
                          maintext="Mission"
                          subtext={aboutData.abt_vision}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center w-full lg:w-[40%]">
                    <div className="relative z-10 inline-block">
                      <img
                        src={aboutData.abt_photo_one}
                        alt="about children"
                        className="mx-auto lg:ml-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <Title style={`${styles.header__text}`} title="Core Values" />
          </div>
          <div className="m-0 flex flex-wrap border ">
            {valuesData.map((value) => (
              <div
                key={value.maintext}
                className="w-full px-4 md:w-1/2 lg:w-1/3 border"
              >
                <IconCard
                  icon={value.icon}
                  maintext={value.maintext}
                  subtext={value.subtext}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* register banner */}
      <section className="min-h-100">
        <RegisterBanner />
      </section>

      <section className="min-h-100">
        <Footer />
      </section>
    </main>
  );
}

export default About;
