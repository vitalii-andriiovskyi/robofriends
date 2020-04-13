import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({robots: users}))
      .catch(console.log);
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <hr/>
          <CardList robots={filteredRobots} />
        </div>
      )
    }

  }
}

export default App;
