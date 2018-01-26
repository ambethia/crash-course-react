import React, { Component } from 'react'

class FruitItem extends Component {

  render () {
    return <li>{this.props.name}</li>
  }
}

class FruitList extends Component {

  render () {
    const fruit = this.props.fruit.map((item, i) {
      return <FruitItem name={item} key={i} />
    })

    return <div>
      <h1>Fruit</h1>
      <ul>
        {fruit}
      </ul>
    </div>
  }
}
