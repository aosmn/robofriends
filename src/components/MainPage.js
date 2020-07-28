import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './MainPage.css'

import { setSearchField, requestRobots } from '../actions';

class MainPageComponent extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  filterRobots = () => {
    return this.props.robots.filter(bot => bot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
  }
  render() {
    const {onSearchChange, isPending} = this.props; 

    return (
      <div className="tc">  
        {
          !isPending ? 
          <>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox onSearchChange={onSearchChange}/>
            <Scroll>
              <ErrorBoundary>
                <CardList robots={this.filterRobots()}/>
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

export default MainPageComponent;