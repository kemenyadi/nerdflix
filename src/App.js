import React from "react";

import "./App.css";
import { logo, star } from "./constants";
import data from "./imdb-top-50.json";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortByTitle: null, sortByRating: null };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  handleChangeField(event) {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value
    });
  }

  resetFilters() {
    this.setState({
      searchField: "",
      sortByTitle: null,
      sortByRating: null
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-left">
            <div>Home</div>
            <div>Series</div>
            <div>Movies</div>
          </div>
          <div className="App-header-logo">{logo}</div>
          <div className="App-header-right">{star}</div>
        </div>

        <div className="Main">
          <div className="Dashboard-header">
            <center>Movies</center>
            <div className="Dashboard-header-filters">
              <input
                className="inputField"
                type="text"
                name="searchField"
                value={this.state.searchField}
                placeholder={"Search"}
                onChange={this.handleChangeField}
              />
              <div className="Dashboard-header-filters-sortby">
                Sort By:
                <select
                  className="inputField"
                  name="sortByTitle"
                  onChange={this.handleChangeField}
                >
                  <option value="" disabled selected>
                    Title A-Z
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                </select>
                <select
                  className="inputField"
                  name="sortByRating"
                  onChange={this.handleChangeField}
                >
                  <option value="" disabled selected>
                    Rating
                  </option>
                  <option value="1">⭐</option>
                  <option value="2">⭐⭐</option>
                  <option value="3">⭐⭐⭐</option>
                  <option value="4">⭐⭐⭐⭐</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
                <button className="inputField" onClick={this.resetFilters}>
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="Dashboard">
            <Dashboard
              data={data}
              searchField={this.state.searchField}
              sortByTitle={this.state.sortByTitle}
              sortByRating={this.state.sortByRating}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
