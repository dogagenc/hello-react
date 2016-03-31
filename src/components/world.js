import React, { Component } from 'react'

export default class World extends Component {
  constructor(props) {
    super(props)

    this.state = { value: 'World!' }
  }

  render(){
    return <h1>{this.state.value}</h1>
  }

}
