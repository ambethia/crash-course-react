var React = require('react');

var AwesomeWidget = React.createClass({
  render: function () {
    return <a href={this.props.url}>{this.props.title}</a>;
  }
});

var App = React.createClass({
  render: function () {
    return <AwesomeWidget
      url="http://facebook.github.io/react"
      title="React"
    />;
  }
});
