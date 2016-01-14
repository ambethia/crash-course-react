var React = require('react');

var AwesomeWidget = React.createClass({
  render: function () {
    return React.createElement('a', {
      href: this.props.url
    }, this.props.title);
  }
});

var App = React.createClass({
  render: function () {
    return React.createElement(AwesomeWidget, {
      link: 'http://facebook.github.io/react',
      title: 'React'
    });
  }
});
