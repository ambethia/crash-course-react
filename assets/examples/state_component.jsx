var ToggleSwitch = React.createClass({
  getInitialState: function () {
    return {
      on: false
    }
  },

  handleClick: function (event) {
    this.setState({
      on: !this.state.on
    })
  },

  render: function () {
    var classes = ["toggle-switch"];
    if (this.state.on) {
      classes.append("on");
    }

    return (
      <div className={classes.join(' ')}>
        <div className="switch" onClick={this.handleClick}></div>
      </div>
    )
  }
});
