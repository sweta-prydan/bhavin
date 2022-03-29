import React from 'react'
import { CasebannerStyles } from './Casebanner.styles'
import Image from '../ImgOptimized'

function Casebanner(props) {
  const {
    data: {
      bannerImage: {
        childImageSharp: { fluid },
      },
    },
  } = props
  const {
    bannerdata: { bannerProps },
    showFullimages,
  } = props
  return (
    <CasebannerStyles className="casebanner">
      <div className="container">
        <div className="content-part">
          <div className="banner-part">
            <h1>{bannerProps.heading}</h1>
            <p>{bannerProps.bannerPara}</p>
          </div>
        </div>
        <div className="img-block">
          <div className="banner-img">
            {showFullimages && (
              <>
                <div className="banner-bg"></div>
                <Image
                  fluid={fluid}
                  alt={bannerProps.BannerAlt}
                  lazyload={{
                    enabled: false,
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </CasebannerStyles>
  )
}

export default Casebanner
