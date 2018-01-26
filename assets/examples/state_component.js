import React, { Component } from 'react'
import cx from 'classnames'

class ToggleSwitch extends Component {

  state = {
    on: false
  }

  _click = (event) => {
    this.setState({ on: !this.state.on })
  }

  render () {
    return <div className={cx('toggle-switch', this.state)}>
      <div className="switch" onClick={this._click}></div>
    </div>
  }
}
