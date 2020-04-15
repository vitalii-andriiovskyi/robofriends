import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../actions';

const mapStateToProps = (state) => ({
  searchField: state.searchField
  // searchField: state.searchRobots.searchField
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({robots: users}))
      .catch(console.log);
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return !robots.length ?
      <h1 className="tc">Loading...</h1> : 
      (
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
