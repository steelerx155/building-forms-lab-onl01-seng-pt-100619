// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    state = {
      name: '',
    };
  
  
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

   
  render(){
    return(
      <div>
        <form>
          <p>
            <label>Band Input </label>
            <input type="text" onChange={(event) => this.handleChange(event)} value ={this.state.name}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }}
  
  export default BandInput
