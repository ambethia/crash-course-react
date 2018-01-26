import React, { Component } from 'react'


class AwesomeWidget extends Component {

  render () {
    return <a href={this.props.url}>
      {this.props.title}
    </a>
  }
}

class App extends Component {

  render () {
    return <AwesomeWidget url="http://facebook.github.io/react" title="React" />
  }
}
