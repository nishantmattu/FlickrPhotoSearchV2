import React, { Component } from "react";
import PhotosList from "./photos_list";

class PhotosGrid extends Component {
  render() {
    let first = undefined;
    let second = undefined;
    let third = undefined;

    if (this.props.list == undefined) {
      return null;
    } else {
      first = this.props.list.slice(0, 3);
      second = this.props.list.slice(3, 6);
      third = this.props.list.slice(6, 9);
      console.log(first);
    }
    return (
      <div className="col-md-12">
        <PhotosList photos={first} />
        <PhotosList photos={second} />
        <PhotosList photos={third} />
      </div>
    );
  }
}

export default PhotosGrid;
