import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  state = {
    name: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return(
      <div>
        <li>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.name} onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
        </li>
       
      </div>
    )
  }
}

export default connect() (BandsContainer)
