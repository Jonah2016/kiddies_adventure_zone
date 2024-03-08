import React from "react";
import { COLORS } from "../assets/theme/theme";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function NormalCard(props) {
  const data = props.data;

  return (
    <>
      <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
        <Link href="#!">
          <img
            className="rounded-t-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
            alt="Skyscrapers"
          />
        </Link>
        <div className="p-6 ">
          <h5
            className={`mb-4 text-2xl font-medium leading-tight text-[${COLORS.primary}] dark:text-[${COLORS.primary}]`}
          >
            <Link
              to={"/"}
              className={`hover:underline hover:underline-offset-3 text-[${COLORS.primary}]`}
            >
              {data.title}
            </Link>
          </h5>
          <p className="mb-4 font-extralight text-md text-neutral-600 dark:text-neutral-200">
            {data.briefing}
          </p>
          <Link
            to={"/"}
            className={`pt-2 font-extralight text-[1.2rem] flex items-center hover:underline hover:underline-offset-3 text-[${COLORS.primary}]`}
          >
            Read more
            <span className="px-1">
              <AiOutlineArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NormalCard;