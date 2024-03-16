import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import HeaderHeroShort from "../components/HeaderHeroShort";
import BookAdCard from "../components/BookAdCard";
import RegisterBanner from "../components/RegisterBanner";
import Footer from "../components/Footer";
import FloatSearch from "../components/FloatSearch";

const heroProperties = {
  banner:
    "https://scientia.themerex.net/wp-content/uploads/2018/01/bg_study-copyright.jpg?id=332",
  mainTitle: {
    text: "Books Catalog",
    color: "#ffff",
    show: true,
  },
  subTitle: {
    text: "More than just fun, it's learning in action! Kiddies Adventure Zone provides a stimulating environment where children explore, solve problems, and socialize.",
    color: "#ffff",
    show: true,
  },
  button: { show: false, url: "#", text: "Read more" },
};

function Library() {
  const renderBooks = (books) => {
    return books.map((book) => <BookCard props={book} />);
  };

  const [books, setBooks] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_BOOK_URL)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />
      <section className="mb-12">
        <HeaderHeroShort properties={heroProperties} />
      </section>

      <section className="row mb-12">
        <FloatSearch />
      </section>

      <section className="row mb-12">
        {books.length > 0 && renderBooks(books)}
      </section>

      <section className="mb-12 min-h-100">
        <RegisterBanner />
      </section>

      <section className="mb-12">
        <BookAdCard />
      </section>

      <section className="min-h-100">
        <Footer />
      </section>
    </main>
  );
}

export default Library;
