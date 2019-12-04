import React, { Component } from 'react'

export class Grab extends Component {
  state = { name: 'Jerry', age: 30 }

  handleNameChange = (e) => { this.setState({ name: e.target.value }) }

  render() {
    return (
      <div>
        <input onChange={this.handleNameChange} />
        Your name is {this.state.name}
      </div>
    )
  }
}

export default Grab
