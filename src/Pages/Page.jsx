import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import SearchBar from "../components/SearchBar";
import InfoContainer from "../components/InfoContainer";

var database;

function Page() {
  var [showing, setShowing] = useState(false);
  var [show, setShow] = useState(false);
  var [bookShow, setBookShow] = useState([]);
  var [favourites, setFavourites] = useState([]);
  //////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetch("https://book-finder1.p.rapidapi.com/api/search", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2683c7fc54msh381f81a2d80d019p12cc1cjsna77b689e2662",
        // 'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        database = data.results;
      });
  }, []);

  ///////////////////////////////////////////////////////////////////////////

  function bookSearch(book) {
    var n = database.filter(function (element) {
      return element.title.toLowerCase().includes(book.toLowerCase());
    });

    //////
    if (n.length === 0) {
      n = database.filter(function (element) {
        return (
          element.author_first_names[0]
            .toLowerCase()
            .includes(book.toLowerCase()) ||
          element.author_last_names[0]
            .toLowerCase()
            .includes(book.toLowerCase())
        );
      });
      if (n.length === 0) {
        alert("Book not found");
      } else {
        setBookShow(n);
        setShow(true);
      }
    }
    /////////
    else {
      setBookShow(n);
      setShow(true);
    }
  }
  //////////////////////////////////////////////////////

  function showFavourites(bookfav) {
    var n = favourites.find(function (element) {
      return element === bookfav;
    });

    if (n == null) {
      bookfav.favourite = true;
      //////////////////////////////////
      var modifiedBookShow = bookShow.map((obj) => {
        if (obj === bookfav) {
          return { ...bookfav, favourite: true };
        }
        return obj;
      });
      bookShow = modifiedBookShow;

      ////////////////////////////////////
      setFavourites([...favourites, bookfav]);
      console.log(favourites);
    } else {
      /////////////////////////////////////////////////

      var modifiedBookShow = bookShow.map((obj) => {
        if (obj === bookfav) {
          return { ...bookfav, favourite: false };
        }
        return obj;
      });
      bookShow = modifiedBookShow;

      ////////////////////////////////////////////////
      bookfav.favourite = false;
      var newfavourites = favourites.filter(function (element) {
        return element !== bookfav;
      });
      setFavourites(newfavourites);
    }
  }

  function showingFavourites() {
    setShowing(!showing);
  }
  ////////////////////////////////////////////////////////////

  return (
    <div>
      <Header />
      <SearchBar
        bookSearch={bookSearch}
        showingFavourties={showingFavourites}
        showing={showing}
      />
      {show &&
        (showing
          ? favourites.map((book) => (
              <InfoContainer
                title={book.title}
                authorf={book.author_first_names[0]}
                authorl={book.author_last_names[0]}
                series={book.series_name}
                language={book.language}
                img={book.published_works[0].cover_art_url}
                favourites={showFavourites}
                book={book}
                favourite={book.favourite}
              />
            ))
          : bookShow.map((book) => (
              <InfoContainer
                title={book.title}
                authorf={book.author_first_names[0]}
                authorl={book.author_last_names[0]}
                series={book.series_name}
                language={book.language}
                img={book.published_works[0].cover_art_url}
                favourites={showFavourites}
                book={book}
                favourite={book.favourite}
              />
            )))}
    </div>
  );
}

export default Page;
