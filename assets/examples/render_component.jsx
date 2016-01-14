var React = require('react');
var ReactDOM = require('react-dom');

var AwesomeWidget = require('awesomeWidget.js');

ReactDOM.render(
  React.createElement(AwesomeWidget),
  document.getElementByID('root')
);
