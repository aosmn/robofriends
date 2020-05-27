import React, { Component } from 'react'
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }
  render() {
    // const {loading, robots} = this.state;
    console.log('test');
    
    const {searchField, onSearchChange, isPending, robots} = this.props; 
    const filteredRobots = robots.filter(bot => bot.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="tc">  
        {
          !isPending ? 
          <>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </>
          :
          <h1>LOADING</h1>

        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);