import React from "react";
import "./Loading.css";
import styles from "../assets/css/custom.module.css";
const {
  LOAD_1,
  LOAD_2,
  LOAD_3,
  LOAD_4,
  LOAD_5,
  LOAD_6,
  LOAD_7,
} = require("../constants/index.js");

function Loading({ type, repeatNumber }) {
  // loadFour = NormalCard
  function loadFour() {
    const elements = [];

    for (let i = 0; i < repeatNumber; i++) {
      elements.push(
        <div key={i} className="mx-3 mt-6 flex flex-col rounded-lg sm:basis-0 ">
          <div>
            <img className="rounded-t-lg md:h-72 w-full stripe" alt="" />
          </div>
          <div className="p-6 bg-gray-100">
            <h5 className="mb-4 text-2xl font-medium leading-tight ">
              <div className="stripe_sm"></div>
            </h5>
            <p className="mb-4 stripe_lg"></p>
            <div className="pt-2 flex items-center stripe_sm">
              <span className="px-1"></span>
            </div>
          </div>
        </div>
      );
    }
    return elements;
  }

  // loadFive = Services Cards
  function loadFive() {
    const elements = [];

    for (let i = 0; i < repeatNumber; i++) {
      elements.push(
        <div className="mb-14 lg:mb-20" key={i}>
          <div className="block m-5 h-full rounded-lg bg-white ">
            <div className="flex justify-center">
              <div className="-mt-8 inline-block rounded-full p-10 shadow-md stripe"></div>
            </div>
            <div className="p-6">
              <div className="mb-4 stripe_md"></div>
              <div className="stripe_lg"></div>
            </div>
          </div>
        </div>
      );
    }
    return elements;
  }

  // loadSix = BookCard
  function loadSix(repeatNumber) {
    const elements = []; // Array to store JSX elements

    for (let i = 0; i < repeatNumber; i++) {
      elements.push(
        <div key={i} className="md:w-1/2 w-full p-3">
          <div className="pld__books placeholder">
            <div>
              <img alt="" className="pld__book-img stripe" />
            </div>
            <div className="pld__descp">
              <div className="mb-2 stripe_lg"></div>
              <div className="mb-2 stripe_sm"></div>
              <div className="mb-2 stripe_sm"></div>
              <div className="mb-2 stripe_md"></div>
              <div className="mb-2 stripe_sm"></div>
              <button className="text-transparent">See the Book</button>
            </div>
          </div>
        </div>
      );
    }
    return elements;
  }

  // loadSeven = Book Slider Card
  function loadSeven() {
    const elements = [];

    for (let i = 0; i < repeatNumber; i++) {
      elements.push(
        <div
          key={i}
          className="slide h-full w-[100%] md:w-[25%] sm:w-[25%] flex-shrink-0 snap-center rounded overflow-hidden"
        >
          <div className="mx-3 mt-6 flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0">
            <div className="h-[12rem] w-[100%]">
              <img
                className="aspect-square rounded-t-lg h-full w-full object-cover stripe"
                alt=""
              />
            </div>
            <div className="py-6 ">
              <h5 className="mb-3 text-xl h-auto md:h-12 leading-tight">
                <div className="stripe_sm"></div>
              </h5>

              <p className="mb-4 stripe_sm"></p>
              <p className="mb-4 stripe_sm"></p>

              <div className="pt-2 flex items-center">
                <span className="px-1"></span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return elements;
  }

  return (
    <>
      {type === LOAD_1 && <div>Loading.........1</div>}

      {type === LOAD_2 && <>{loadFour(repeatNumber)}</>}

      {type === LOAD_3 && <div>Loading.........3</div>}

      {type === LOAD_4 && (
        <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
          {loadFour(repeatNumber)}
        </div>
      )}
      {type === LOAD_5 && <>{loadFive(repeatNumber)}</>}

      {type === LOAD_6 && <>{loadSix(repeatNumber)}</>}

      {type === LOAD_7 && (
        <div
          className={`${styles.slides__container} slidesContainer h-[25rem] flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0`}
        >
          {loadSeven(repeatNumber)}
        </div>
      )}
    </>
  );
}

export default Loading;
