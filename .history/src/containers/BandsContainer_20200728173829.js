import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <li>{props.bands}

        </li>
      </div>
    )
  }
}

export default connect() (BandsContainer)
