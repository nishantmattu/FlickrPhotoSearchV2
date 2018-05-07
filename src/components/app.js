import { render } from "react-dom";
import SearchBar from "./search_bar";
import SearchHistoryList from "./search_history_list";
import React, { Component } from "react";
import PhotosGrid from "./photos_grid";
import Photo from "./photo";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
      searchResult: []
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(updatedHistory, text, tags) {
    this.setState({ history: updatedHistory });
    console.log(this.state.history);
    // if (this.props.photos[0] == null) {
    // } else {
    //   console.log(this.props.photos[0].photos.photo[0]);
    // }
  }

  getPhotos() {
    if (this.props.photos[0] == null) {
      return null;
    } else {
      if (this.props.photos[0].photos == null) {
        return null;
      }
      console.log(this.props.photos[0].photos.photo);
      return this.props.photos[0].photos.photo;
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearchSubmit={this.onSearchSubmit}
          history={this.state.history}
        />
        <PhotosGrid list={this.getPhotos()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.photos };
}
export default connect(mapStateToProps)(App);
