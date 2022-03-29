import React, { Component } from 'react'


class Picture extends Component {
  render() {
    return (

      <picture>
        <source
          srcSet={this.props.srcSet}
          media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
        />
        <img
          className={this.props.className}
          src={this.props.src}
          alt={this.props.alt}
        />
      </picture>
    )
  }
}

export default Picture
