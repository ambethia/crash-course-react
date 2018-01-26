import React from "react";

export default class ToggleSwitch extends React.Component {

  constructor() {
    super();
    this.state = {
      on: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    const classes = ["toggle-switch"];
    if (this.state.on) {
      classes.append("on");
    }

    return (
      <div>
        <style>{"\
          .toggle-switch {\
            margin: 0 auto;\
            width: 200px;\
            height: 100px;\
            border: 10px solid #666;\
            background-color: rgb(153, 15, 19);\
          }\
          .toggle-switch.on {\
            background-color: rgb(81, 187, 85);\
          }\
          .toggle-switch.on .switch {\
            left: 100px;\
          }\
          .toggle-switch .switch {\
            left: 0px;\
            position: relative;\
            background-color: white;\
            width: 80px;\
            height: 80px;\
            border-top: 5px solid #ccc;\
            border-left: 5px solid #ccc;\
            border-right: 5px solid #999;\
            border-bottom: 5px solid #999;\
            transition: all 0.5s;\
          }\
        "}</style>
        <div className={classes.join(" ")}>
          <div className="switch" onClick={this.handleClick}></div>
        </div>
      </div>
    );
  }
}
