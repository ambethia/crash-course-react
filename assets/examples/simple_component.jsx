var React = require('react');

var AwesomeWidget = React.createClass({
  render: function () {
    return React.createElement('a', {
      href: 'http://facebook.github.io/react'
    }, 'React');
  }
});
