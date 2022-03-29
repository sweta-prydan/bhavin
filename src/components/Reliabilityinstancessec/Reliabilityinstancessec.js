import React from 'react'

import { ReliabilityinstancessecStyles } from './Reliabilityinstancessec.styles'
import Image from '../ImgOptimized'
import Videoplayer from '../../components/Videoplayer/Videoplayer'

function Reliabilityinstancessec(props) {
  const { ReliabilityinstancesData } = props

  return (
    <ReliabilityinstancessecStyles className="reliabilityinstancessec">
      <div className="container">
        <div className="track-content">
          <div className="heading">
            {ReliabilityinstancesData.trackheading ? (
              <h2>{ReliabilityinstancesData.trackheading}</h2>
            ) : (
              ''
            )}
          </div>
          <div className="contentRow">
            {ReliabilityinstancesData.ReliabilityinstancesDetails.map(
              (ReliabilityinstancesProp, i) => {
                return (
                  <div key={i} className="row">
                    <div className="col colImages">
                      {props.fluid ? (
                        <figure>
                          <Image
                            fluid={props.fluid[i]}
                            lazyload={{
                              enabled: true,
                              once: true,
                              offset: 1000,
                              heigth: 232,
                            }}
                          />
                        </figure>
                      ) : (
                        <div className="video-section">
                          {ReliabilityinstancesProp.videoURL ? (
                            <Videoplayer
                              videoURL={ReliabilityinstancesProp.videoURL}
                            />
                          ) : (
                            <video autoPlay muted loop playsInline>
                              <source
                                src={ReliabilityinstancesProp.animationvideoURL}
                                type="video/mp4"
                              />
                            </video>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="col colDetails">
                      <p>{ReliabilityinstancesProp.trackbottomPara}</p>
                    </div>
                  </div>
                )
              }
            )}
          </div>
          {ReliabilityinstancesData.bottomPara ? (
            <div className="bottomContent">
              <p>{ReliabilityinstancesData.bottomPara}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </ReliabilityinstancessecStyles>
  )
}

export default Reliabilityinstancessec
