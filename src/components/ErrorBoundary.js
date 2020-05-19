import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }
  
  render() {
    return this.state.hasError ?
    <h1> Oooooops. That is not good ! </h1>
    :
    this.props.children;
  }
}
