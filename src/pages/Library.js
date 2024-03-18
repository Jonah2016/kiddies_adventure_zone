import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeaderHeroShort from "../components/HeaderHeroShort";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import BookAdCard from "../components/BookAdCard";
import RegisterBanner from "../components/RegisterBanner";
import FloatSearch from "../components/FloatSearch";
import useFetchData from "../middleware/hooks";
import Loading from "../components/Loading";
import EmptyResult from "../components/EmptyResult.jsx";

const { LOAD_6 } = require("../constants/index.js");

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
  const { data: books, loading } = useFetchData(
    process.env.REACT_APP_CATALOG_URL
  );

  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    // check if the books are not empty, if so then the
    // API call was successful and we can update our filteredBooks state
    if (Object.keys(books).length > 0) {
      setFilteredBooks(books);
    }
  }, [books]); // this effect should run when the books state gets updated

  const filterBookItems = (searchTerm) => {
    // use 'books' instead of 'api-books' to do the filtering
    const filteredItems = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.year_published.toString().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredBooks(filteredItems);
  };

  const renderBooks = (booksData) => {
    return booksData.map((book) => <BookCard props={book} />);
  };

  return (
    <main className="md:m-6 m-auto max-w-[1280px] ">
      <Navbar />
      <section className="mb-12">
        <HeaderHeroShort properties={heroProperties} />
      </section>

      <section className="row mb-12">
        <div className="flex justify-center mx-auto items-center">
          <FloatSearch onChangeSearchCallback={filterBookItems} />
        </div>
      </section>

      <section className="row mb-12">
        {!loading ? (
          filteredBooks.length > 0 ? (
            renderBooks(filteredBooks)
          ) : (
            <div className="mx-auto">
              <EmptyResult
                data={{
                  title: "No books were found!",
                  description:
                    "Please refresh the page or try other parameters",
                }}
              />
            </div>
          )
        ) : (
          <Loading repeatNumber={4} type={LOAD_6} />
        )}
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
