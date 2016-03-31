import React, { Component } from 'react'

export default class Hello extends Component {
  constructor(props) {
    super(props)

    this.state = { value: 'Hello' }
  }

  render(){
    return <h1>{this.state.value}</h1>
  }

}
