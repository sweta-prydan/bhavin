import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { SingleServiceStyle } from './SingleService.styles'
import { Link } from 'gatsby'

class SingleService extends Component {
  render() {
    return (
      <SingleServiceStyle
        className={`service-single ${this.props.serviceClass || ''}`}
      >
        <div className="service-img-blk">
          <LazyLoad height={50} once offset={2000}>
            <img src={this.props.serviceIcon} alt={this.props.serviceAlt} />
          </LazyLoad>
        </div>
        <div className="service-content-blk">
          <h4>
            {this.props.serviceLink ? (
              <Link to={this.props.serviceLink}>
                {this.props.serviceHeading}
              </Link>
            ) : (
              <>{this.props.serviceHeading}</>
            )}
          </h4>
          <p>{this.props.serviceParagraph}</p>
        </div>
      </SingleServiceStyle>
    )
  }
}

export default SingleService
