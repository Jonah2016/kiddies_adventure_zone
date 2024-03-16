import React from "react";
import styles from "../assets/css/custom.module.css";
import Title from "./Title";
import NormalCard from "./NormalCard";
import useFetchData from "../middleware/hooks";
import Loading from "./Loading.jsx";
const { LOAD_2 } = require("../constants/index.js");

function Events({ limit }) {
  const { data: eventData, loading: eventLoading } = useFetchData(
    process.env.REACT_APP_EVENT_URL
  );

  return (
    <>
      <div className="p-4 md:p-6" key={Math.random()}>
        <div className="p-4">
          <Title style={`${styles.header__text} `} title="News and Events" />
        </div>
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          {!eventLoading ? (
            eventData.slice(0, limit).map((item) => (
              <NormalCard
                key={item._id}
                data={{
                  title: item.name,
                  image: item.image,
                  briefing: item.description,
                }}
              />
            ))
          ) : (
            <Loading repeatNumber={3} type={LOAD_2} />
          )}
        </div>
      </div>
    </>
  );
}

export default Events;
