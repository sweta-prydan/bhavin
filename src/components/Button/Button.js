import React, { Component } from 'react'
import { ButtonStyle } from './Button.styles'

class Button extends Component {
  render() {
    return (
      <ButtonStyle
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
        className="button"
        to={this.props.buttonLink || '/'}
      >
        <span>{this.props.buttonName}</span>
      </ButtonStyle>
    )
  }
}

export default Button
