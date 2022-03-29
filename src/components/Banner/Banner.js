import React from 'react'
import Button from '../Button/Button'
import Image from '../ImgOptimized'
import { BannerStyles } from './Banner.styles'


function Banner(props) {
  const {
    bannerData: { bannerProps },
    showBannerImage,
  } = props
  const {
    data: {
      bannerImage: {
        childImageSharp: { fluid: bannerImages },
      },
    },
  } = props
  return (
    <BannerStyles className="banner">
      <div className="container">
        <div className="banner-content">
          <h1>{bannerProps.bannerHeading}</h1>
          <p>{bannerProps.bannerContent}</p>
          {bannerProps.buttonName ? (
            <Button
              buttonName={bannerProps.buttonName}
              buttonLink={bannerProps.buttonLink}
            />
          ) : (
            ''
          )}
        </div>
        {showBannerImage ? (
          <div className="banner-img">
            <Image
              fluid={bannerImages}
              alt={bannerProps.BannerAlt}
              lazyload={{
                enabled: false,
              }}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </BannerStyles>
  )
}

export default Banner
