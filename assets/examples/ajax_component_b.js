class AllMyFavoriteFruit extends Component {

  state = {
    fruit: []
  }

  componentDidMount () {
    fetch('/fruit.json')
      .then(res => res.json())
      .then(data => {
        setState({ fruit: data })
      })
  },

  render () {
    return <FruitList fruit={this.state.fruit} />
  }
}
