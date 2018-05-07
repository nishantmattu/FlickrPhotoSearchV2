import React, { Component } from "react";

export default props => {
  if (props === undefined) {
    return null;
  } else {
    const farm = props.photo.farm;
    const server = props.photo.server;
    const id = props.photo.id;
    const secret = props.photo.secret;

    return (
      <div className="col-md-4">
        <img
          className="img-responsive"
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        />
      </div>
    );
  }
};
