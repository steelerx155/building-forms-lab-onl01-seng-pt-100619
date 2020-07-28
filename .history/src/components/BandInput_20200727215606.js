// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super();
    this.setState = {
      text: '',
    };
  }
  
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };
   
  render(){
    return(
      <div>
        <form>
          <p>
            <label>Band Input </label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }}
  
  export default BandInput
