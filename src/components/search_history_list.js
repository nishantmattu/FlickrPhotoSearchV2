import React, { Component } from "react";
import _ from "lodash";
class SearchHistoryList extends Component {
  renderHistory() {
    let history = this.props.history;
    return _.map(history, hist => {
      return <div key={hist}>{hist}</div>;
    }).reverse();
  }

  render() {
    return (
      <div className="col-md-3">
        <h6>Search History:</h6>
        <ul>{this.renderHistory()}</ul>
      </div>
    );
  }
}

export default SearchHistoryList;
