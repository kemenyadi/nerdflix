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
    let matches = [];
    //SEARCH FILTER
    if (this.props.searchField) {
      let searchMatchREGEX = new RegExp(this.props.searchField, "i");
      _.forEach(this.props.data.data.movies, (movie, key) => {
        if (movie.title.search(searchMatchREGEX) === -1) {
        } else {
          matches.push(movie);
        }
      });
    } else {
      matches = this.props.data.data.movies;
    }
    //ALPHABETICAL SORT
    if (this.props.sortByTitle) {
      let temp = matches;
      temp.sort((a, b) => a.title.localeCompare(b.title));
      if (this.props.sortByTitle === "A-Z") {
        matches = temp;
      } else if (this.props.sortByTitle === "Z-A") {
        matches = temp.reverse();
      }
    }
    //RATING SORT
    if (this.props.sortByRating) {
      let temp = [];
      _.forEach(matches, (movie, key) => {
        movie.ratingCustom = Math.round(movie.rating / 2); //imdb 10 point scale rating conversion to 5 star scale
        if (movie.ratingCustom == this.props.sortByRating) {
          temp.push(movie);
        }
      });
      matches = temp;
    }
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
