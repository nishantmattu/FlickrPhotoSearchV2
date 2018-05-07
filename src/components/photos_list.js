import React from "react";
import Photo from "./photo";

export default props => {
  if (props.photos === undefined) {
    return null;
  } else {
    return (
      <div className="col-md-12">
        <Photo photo={props.photos[0]} />
        <Photo photo={props.photos[1]} />
        <Photo photo={props.photos[2]} />
      </div>
    );
  }
};
