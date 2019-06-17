import React from "react";
import _ from "underscore";

import Card from "./Card";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.processJSON = this.processJSON.bind(this);
  }

  processJSON() {
    let searchMatchREGEX = new RegExp(this.props.searchField, "i"),
      matches = [];
    _.forEach(this.props.data.data.movies, (value, key) => {
      if (value.title.search(searchMatchREGEX) === -1) {
      } else {
        matches.push(value);
      }
    });
    return matches;
  }

  render() {
    let cards = [];
    _.forEach(this.processJSON(), (value, key) => {
      cards.push(<Card key={key} movie={value} />);
    });

    return cards;
  }
}
export default Dashboard;
