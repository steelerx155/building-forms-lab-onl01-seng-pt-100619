// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props){
  super(props)
  state = {
    text: ''
  };
}
  render() {
    return(
      <div>
        Band Input
        <input type = "text">


        </input>
      </div>
    )
  }
}

export default BandInput
