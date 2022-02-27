import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      searchField: ``,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((users) => this.setState({ friends: users.results }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { friends, searchField } = this.state;
    const filteredFriends = friends.filter((x) => {
      return x.name.first.toLowerCase().includes(searchField.toLowerCase());
    });
    return !friends.length ? (
      <h1 className="tc f1">L o a d i n g . . .</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Choose Your Cat f•r•i•e•n•d•s</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList friends={filteredFriends} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
