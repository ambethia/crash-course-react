import React, { Component } from 'react'


class AwesomeWidget extends Component {

  render () {
    return React.createElement('a', {
      href: this.props.url
    }, this.props.title)
  }
}

class App extends Component {

  render () {
    return React.createElement(AwesomeWidget, {
      link: 'http://facebook.github.io/react',
      title: 'React'
    })
  }
}
