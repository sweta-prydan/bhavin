import React, { Component } from 'react'
import { WhyShouldHireUsStyle } from './WhyShouldHireUs.styles'
import SingleService from '../SingleService/SingleService'

class WhyShouldHireUs extends Component {
  render() {
    const { WhyShouldHireUsProps } = this.props.WhyShouldHireUsData
    console.log(this.props.WhyShouldHireUsProps)
    return (
      <WhyShouldHireUsStyle>
        <div className="container">
          <div className="heading">
            <h2>{WhyShouldHireUsProps.heading}</h2>
            <p>{WhyShouldHireUsProps.para}</p>
          </div>
          <div className="our-service-list">
            {WhyShouldHireUsProps.serviceContents.map((serviceContentProp, i) => {
              return <SingleService key={i} {...serviceContentProp} />
            })}
          </div>
        </div>
      </WhyShouldHireUsStyle>
    )
  }
}

export default WhyShouldHireUs
