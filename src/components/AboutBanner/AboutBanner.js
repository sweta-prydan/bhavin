import React, { Component } from 'react'
import { AboutBannerStyle } from './AboutBanner.styles'
import Image from '../ImgOptimized'

class AboutBanner extends Component {
  render() {
    //const { bannerProps } = this.props.aboutBannerData
    const {
      aboutBannerData: { bannerProps },
      showImages,
    } = this.props
    const {
      data: {
        bannerImage: {
          childImageSharp: { fluid },
        },
      },
    } = this.props

    return (
      <AboutBannerStyle>
        <div className="container">
          {showImages && (
            <div className="banner-img">
              <Image fluid={fluid} alt={bannerProps.BannerAlt} />
            </div>
          )}
          <div className="banner-content">
            <h1>{bannerProps.bannerHeading}</h1>
            <p>{bannerProps.bannerContent}</p>
          </div>
        </div>
      </AboutBannerStyle>
    )
  }
}

export default AboutBanner
