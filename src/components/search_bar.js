import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPhotos } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: "",
      text: ""
    };

    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.onTagInputChange = this.onTagInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  resetState() {
    this.setState({ text: "" });
    this.setState({ tags: "" });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const currText = this.state.text;
    const currTags = this.state.tags;
    const historyTemp = this.props.history;
    historyTemp.push({ text: currText, tags: currTags });
    this.props.onSearchSubmit(historyTemp, currText, currTags);
    this.props.fetchPhotos(currText, currTags);

    this.resetState();
    //console.log(this.state.text);
  }

  onTextInputChange(e) {
    this.setState({ text: e.target.value });
  }

  onTagInputChange(e) {
    this.setState({ tags: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter Text..."
          className="form-control"
          value={this.state.text}
          onChange={this.onTextInputChange}
        />
        <span className="input-group-addon"> </span>
        <input
          placeholder="Enter Tags (comma-delimited)..."
          className="form-control"
          value={this.state.tags}
          onChange={this.onTagInputChange}
        />
        <span className="input-group-addon"> </span>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search Photos!
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhotos }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
