import React from "react";
import Fab from "@mui/material/Fab";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Zoom from "@mui/material/Zoom";

function InfoContainer(props) {
  var [icon, setIcon] = React.useState(false);

  function handleOnClick() {
    props.favourites(props.book);
  }

  return (
  
    <div className="infocontainer">
      <h1>{props.title}</h1>
      <img src={props.img}></img>

      <div className="inline">
        <h3>Author:</h3>{" "}
        <p>
          {props.authorf} {props.authorl}
        </p>
      </div>
      <div className="inline">
        {" "}
        <h3>Series:</h3> <p>{props.series}</p>
      </div>
      <div className="inline">
        {" "}
        <h3>Language:</h3> <p>{props.language}</p>
      </div>

      <Zoom in={true}>
        <Fab
          onClick={handleOnClick}
          size="small"
          className="favour"
          aria-label="favour"
        >
          {props.favourite ? <StarIcon /> : <StarBorderIcon />}
        </Fab>
      </Zoom>
    </div>
  );
}

export default InfoContainer;
