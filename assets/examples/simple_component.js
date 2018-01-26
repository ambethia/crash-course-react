import React, { Component } from 'react'

class AwesomeWidget extends Component {

  render () {
    return React.createElement('a', {
      href: 'http://facebook.github.io/react'
    }, 'React')
  }
}
