import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.movie.title}
        <br/>
        <img src={this.props.movie.urlPoster} />
      </div>
    );
  }
}
export default Card;
