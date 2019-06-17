import React from "react";

import "./App.css";
import { logo, star } from "./constants";
import data from "./imdb-top-50.json";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortByTitle: "A-Z", sortByRating: null };
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  handleChangeField(event) {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Home</div>
          <div>Series</div>
          <div>Movies</div>

          {logo}
          <div>{star}</div>
        </header>

        <div className="body">
          <h1>Movies</h1>
          <div className="subBody">
            <input
              className=""
              type="text"
              name="searchField"
              placeholder={"Search"}
              onChange={this.handleChangeField}
            />
            Sort By:
            <select name="sortByTitle" onChange={this.handleChangeField}>
              <option value="" disabled selected>
                Title A-Z
              </option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <select name="sortByRating" onChange={this.handleChangeField}>
              <option value="" disabled selected>
                Rating
              </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <div className="dashboard">
            <Dashboard data={data} searchField={this.state.searchField} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
