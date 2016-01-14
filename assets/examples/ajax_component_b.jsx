var AllMyFavoriteFruit = React.createClass({
    getInitialState: function () {
      return {
        fruit: []
      }
    },

    componentDidMount: function () {
      fetch('/fruit.json').then(function (data) {
        setState({ fruit: data });
      })
    },

    render: function() {
      return <FruitList fruit={this.state.fruit} />;
    }
})
