import React, { Component } from 'react'
import { GetStartedStyle } from './GetStarted.styles'
import Button from '../Button/Button'
class GetStarted extends Component {
  render() {
    const { getStartedProps } = this.props.getStarteddata
    return (
      <GetStartedStyle>
        <div className="getstarted-wrapper">
          <div className="container">
            <h3>{getStartedProps.heading}</h3>
            <p>{getStartedProps.Para}</p>
            <Button
              buttonName={getStartedProps.buttonName}
              buttonLink={getStartedProps.buttonLink}
            />
          </div>
        </div>
      </GetStartedStyle>
    )
  }
}

export default GetStarted
