import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Card">
        <img className="Card-img" src={this.props.movie.urlPoster} />
        <br />
        {this.props.movie.title}
      </div>
    );
  }
}
export default Card;
