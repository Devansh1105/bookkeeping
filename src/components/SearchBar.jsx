import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import StarIcon from "@mui/icons-material/Star";

function SearchBar(props) {
  var [book, setBook] = React.useState("");

  function handleChange(event) {
    setBook(event.target.value);
  }

  function handleClick() {
    props.bookSearch(book);
  }

  return (
    <div className="bottomspace">
      <form className="create-note">
        <input
          name="Search"
          placeholder="Search by title or author"
          onChange={handleChange}
        />

        <Zoom in={true}>
          <Fab
            color="primary"
            className="search"
            aria-label="search"
            onClick={handleClick}
          >
            <SearchIcon />
          </Fab>
        </Zoom>

        <Zoom in={true}>
        <Fab
            color="primary"
            onClick={props.showingFavourties}
            className="favourites"
            aria-label="favourites"
          >
            {props.showing ? <StarIcon /> : <StarBorderIcon />}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default SearchBar;
