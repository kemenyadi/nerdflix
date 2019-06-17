import React from "react";
import { star } from "../constants";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        onClick={() => this.props.onLike(this.props.movie.idIMDB)}
        className="Card"
      >
        <img className="Card-img" src={this.props.movie.urlPoster} />
        <div className="Card-overlay">
          <div className="Card-overlay-text">Like {star}</div>
        </div>
        <br />
        {this.props.movie.title}
      </div>
    );
  }
}
export default Card;
