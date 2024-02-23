import React from "react";
import styles from "../assets/css/custom.module.css";
import { COLORS } from "../assets/theme/theme";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Events from "../components/Events";
import {
  GiBookshelf,
  GiBabyfootPlayers,
  GiTabletopPlayers,
  GiBookPile,
} from "react-icons/gi";
import CardsSlider from "../components/CardsSlider";
import RegisterBanner from "../components/RegisterBanner";
import ServiceItem from "../components/ServiceItem";
import Footer from "../components/Footer";

const booksData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    title: "Snow White and the Dwarfs",
    briefing:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    moreClasses: "",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1533468432434-200de3b5d528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    moreClasses: "",
    title: "Hunting and Fishing",
    briefing:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3026364/pexels-photo-3026364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Goodness and Mercies",
    briefing:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    moreClasses: "",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/8576739/pexels-photo-8576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Nursery Ryhmes for Adults",
    briefing:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    moreClasses: "",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/8576739/pexels-photo-8576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "The Good Shepherd",
    briefing:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    moreClasses: "",
  },
];

const servicesData = [
  {
    id: 1,
    title: "Library Services",
    gist: "Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis optio minus mollitia rerum labore facilis inventore voluptatem ad, quae quia sint. Ullam.",
    icon: <GiBookshelf size={50} />,
  },
  {
    id: 2,
    title: "Space For Kid's Events",
    gist: "Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis optio minus mollitia rerum labore facilis inventore voluptatem ad, quae quia sint. Ullam.",
    icon: <GiBabyfootPlayers size={50} />,
  },
  {
    id: 3,
    title: "Recreational Activities",
    gist: "Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis optio minus mollitia rerum labore facilis inventore voluptatem ad, quae quia sint. Ullam.",
    icon: <GiTabletopPlayers size={50} />,
  },
  {
    id: 4,
    title: "Educational Activities",
    gist: "Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Reiciendis optio minus mollitia rerum labore facilis inventore voluptatem ad, quae quia sint. Ullam.",
    icon: <GiBookPile size={50} />,
  },
];

const heroImg =
  "https://scientia.themerex.net/wp-content/uploads/2019/05/Depositphotos_155947488_xl-2015_2-copyright.jpg?id=1442";

function Home() {
  return (
    <main className="md:mx-6 m-auto max-w-[1280px] ">
      <Navbar />
      <HomeHero image={heroImg} />
      {/* about briefing section */}
      <section className="min-h-100">
        <div className="container mx-auto flex flex-wrap h-full px-2 py-6 sm:p-6">
          <div className="flex w-full md:w-1/2 h-[14rem] sm:h-[35rem] md:h-[30rem] flex-wrap">
            <div className="w-1/2 h-[90%] mb-10 p-1 md:p-4 ">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
            <div className="w-1/2 h-[90%] mt-10 p-1 md:p-4">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-full md:w-1/2 flex-wrap h-full p-6">
            <div className="w-full p-1 md:p-2">
              <Title
                style={`${styles.header__text}`}
                title="Driven to Learn More About Us? Learn it Here!"
              />
              <p className="py-8">
                Maecenas at magna pulvinar, pharetra neque nec, condimentum
                mauris. Nullam sapien augue, auctor ac augue sed, fermentum
                rhoncus nunc. Curabitur sit amet velit a lacus feugiat
                vestibulum. Pellentesque habitant morbi tristique senectus netus
                et malesuada fames a turpis. Proin ac nunc dictum, elementum
                turpis nec, sagittis orci. Morbi auctor, leo non rutrum commodo,
                enim urna convallis lorem, vel malesuada est turpis eget odio.
                Integer nec iaculis nibh. Aenean hendrerit nibh ornare, tempor
                ante et, bibendum ligula. Integer lobortis sodales tortor.
                Vivamus congue lorem vitae ligula viverra hendrerit.
              </p>
              <button
                type="button"
                className={`text-black hover:text-white border border-[${COLORS.primary}] hover:bg-[${COLORS.primary}] focus:ring-4 focus:outline-none focus:ring-[${COLORS.primary}] font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2 dark:border-gray-300 dark:text-gray-700 dark:hover:text-white dark:hover:bg-[${COLORS.primary}] dark:focus:ring-gray-900`}
              >
                Yellow
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* features and services */}
      <section className="min-h-100 m-0 md:my-6">
        <div className=" mx-auto flex flex-wrap h-full md:h-[35rem] p-12 md:p-6 bg-[#f2f0ee]">
          <Title
            style={`${styles.header__text__center} py-16 mx-12`}
            title="Our Services"
          />
          <div className="flex w-full h-full my-8 justify-center flex-wrap">
            <div className="container mx-auto md:px-6 text-center">
              <div className="grid gap-x-6 md:grid-cols-4 lg:gap-x-12 ">
                {/* services */}
                {servicesData.map((service) => (
                  <ServiceItem data={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* events section */}
      <section className="min-h-100 m-0 md:m-6">
        <Events />
      </section>
      {/* library books */}
      <section className="min-h-100 bg-white">
        <div className="container mx-auto h-[36rem] md:h-[40rem]">
          <div className="pt-12 pb-6 px-12">
            <Title
              style={`${styles.header__text} `}
              title="Explore Our Books"
            />
          </div>
          <div className="px-6 md:px-12">
            <CardsSlider
              data={booksData}
              containerHeight="25rem"
              slide={{
                mdw: "15rem",
                w: "100%",
                titleColor: COLORS.dark,
                bodyColor: COLORS.faintBlack,
                btnColor: COLORS.primary,
              }}
              slideImage={{ h: "12rem", w: "100%" }}
              options={{ title: true, briefing: true, button: true }}
            />
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

export default Home;
