import React, { Component } from 'react'
import { OurServicesSecStyle } from './OurServicesSec.styles'
import SingleService from '../SingleService/SingleService'

class OurServicesSec extends Component {
  render() {
    const { ourServiceProps } = this.props.ourServicedata
    return (
      <OurServicesSecStyle>
        <div className="container">
          <div className="heading">
            <h2>{ourServiceProps.heading}</h2>
            <p>{ourServiceProps.para}</p>
          </div>
          <div className="our-service-list">
            {ourServiceProps.serviceContents.map((serviceContentProp, i) => {
              return <SingleService key={i} {...serviceContentProp} />
            })}
          </div>
        </div>
      </OurServicesSecStyle>
    )
  }
}

export default OurServicesSec
