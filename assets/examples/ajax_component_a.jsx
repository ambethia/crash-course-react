var React = require('react');

var FruitItem = React.createClass({

  render: function () {
    return <li>{this.props.name}</li>;
  }
});

var FruitList = React.createClass({

  render: function () {
    var fruit = this.props.fruit.map(function (item) {
      return <FruitItem name={item} />;
    });

    return (
      <div>
        <h1>Fruit</h1>
        <ul>{fruit}</ul>
      </div>
    );
  }
});
