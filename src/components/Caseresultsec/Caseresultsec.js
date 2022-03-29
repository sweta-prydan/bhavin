import React from 'react'
import { CaseresultsecStyles } from './Caseresultsec.styles'
import Image from '../ImgOptimized'
import Picture from '../Picture/Picture'
import Videoplayer from '../../components/Videoplayer/Videoplayer'

function Caseresultsec(props) {
  const {
    caseresultsecdata: { casereSultsecProps },
    showImages,
    showFullimages,
  } = props
  const {
    data: {
      caseScreen1: {
        childImageSharp: { fluid: caseScreenImg1 },
      },
      caseScreen2: {
        childImageSharp: { fluid: caseScreenImg2 },
      },
      caseScreen3: {
        childImageSharp: { fluid: caseScreenImg3 },
      },
      caseScreen4: {
        childImageSharp: { fluid: caseScreenImg4 },
      },
      caseScreen5: {
        childImageSharp: { fluid: caseScreenImg5 },
      },
      caseScreen6: {
        childImageSharp: { fluid: caseScreenImg6 },
      },
      caseScreen7: {
        childImageSharp: { fluid: caseScreenImg7 },
      },
      caseScreen8: {
        childImageSharp: { fluid: caseScreenImg8 },
      },
      caseScreen9: {
        childImageSharp: { fluid: caseScreenImg9 },
      },
      caseFullimages: {
        childImageSharp: { fluid: caseFullimages },
      },
    },
  } = props
  let items = [
    caseScreenImg1,
    caseScreenImg2,
    caseScreenImg3,
    caseScreenImg4,
    caseScreenImg5,
    caseScreenImg6,
    caseScreenImg7,
    caseScreenImg8,
    caseScreenImg9,
  ]
  return (
    <CaseresultsecStyles className="Caseresultsec">
      <div className="container">
        {casereSultsecProps.videoURL || casereSultsecProps.animationvideoURL ? (
          <div className="video-section">
            {casereSultsecProps.videoURL ? (
              <Videoplayer videoURL={casereSultsecProps.videoURL} />
            ) : (
              <video autoPlay muted loop playsInline>
                <source
                  src={casereSultsecProps.animationvideoURL}
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        ) : (
          <div className="video-section">
            <Picture
              height={500}
              offset={0}
              srcSet={casereSultsecProps.imgURL2x}
              src={casereSultsecProps.imgURL}
              alt=""
              className="tabbing-img"
            />
          </div>
        )}

        <div className="result-sec">
          <div className="left-part">
            <h2>{casereSultsecProps.heading}</h2>
            {casereSultsecProps.bottomTitle ||
              casereSultsecProps.bottomContent ? (
              <div className="bottom-content">
                <h4>{casereSultsecProps.bottomTitle}</h4>
                <p>{casereSultsecProps.bottomContent}</p>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="right-part">
            {casereSultsecProps.RightSubHead && (
              <h3>{casereSultsecProps.RightSubHead}</h3>
            )}
            <p>{casereSultsecProps.maincontent}</p>
            {showFullimages && (
              <div className="caseFullimages">
                <Image
                  fluid={caseFullimages}
                  lazyload={{
                    enabled: true,
                    once: true,
                    offset: 1000,
                    heigth: 416,
                  }}
                />
              </div>
            )}
            {showImages && (
              <div className="case-images">
                {items.map((item, i) => {
                  return (
                    <div className="img-blk" key={i}>
                      <Image
                        fluid={items[i]}
                        lazyload={{
                          enabled: true,
                          once: true,
                          offset: 1000,
                          heigth: 593,
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </CaseresultsecStyles>
  )
}

export default Caseresultsec
