var ToggleSwitch = React.createClass({
  getInitialState: function () {
    return {
      active: false
    }
  },

  handleClick: function (event) {
    this.setState({
      active: !this.state.active
    })
  },

  render: function () {
    var classes = ["toggle-switch"];
    classes.append(this.state.active ? "on" : "off");

    return (
      <div className={classes.join(' ')}>
        <div className="switch" onClick={this.handleClick}></div>
      </div>
    )
  }
});
