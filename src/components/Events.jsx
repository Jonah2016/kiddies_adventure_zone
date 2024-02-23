import React from "react";
import styles from "../assets/css/custom.module.css";
import Title from "../components/Title";
import NormalCard from "./NormalCard";

function Events() {
  const eventsData = [
    {
      id: 1,
      title: "This is a wider card with supporting text below as a natural",
      briefing:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      id: 2,
      title: "This is a wider card with supporting text below as a natural",
      briefing:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      id: 3,
      title: "This is a wider card with supporting text below as a natural",
      briefing:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
  ];
  return (
    <>
      <div className="p-4 md:p-6">
        <div className="p-4">
          <Title style={`${styles.header__text} `} title="News and Events" />
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          {eventsData.map((item) => (
            <NormalCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
