var React = require('react');
var ReactDOM = require('react-dom');

var AwesomeWidget = require('awesomeWidget.js');

ReactDOM.render(
  document.getElementByID('root'),
  React.createElement(AwesomeWidget)
);
