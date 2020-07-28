import React, { Component } from 'react'

export default class CounterButton extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    }
  }
  
  render() {
    return (
      <button color={this.props.color}
      id='counter'
      onClick={() => this.setState(state => ({ count: state.count+1 }))} >
      Count: {this.state.count}
      </button>
    )
  }
}
