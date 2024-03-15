import React, { useEffect, useState } from "react";
import styles from "../assets/css/custom.module.css";
import Title from "./Title";
import NormalCardTwo from "./NormalCardTwo";

function EventTwo({ limit }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_EVENT_URL)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <>
      <div className="p-4 md:p-6" key={Math.random()}>
        <div className="p-4">
          <Title style={`${styles.header__text} `} title="News and Events" />
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 gap-10 ">
          {events.slice(0, limit).map((item) => (
            <NormalCardTwo
              key={item._id}
              data={{
                title: item.name,
                image: item.image,
                description: item.description,
                briefing: item.briefing,
                host: item.host,
                url: item.url,
                rate: item.rating,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default EventTwo;
