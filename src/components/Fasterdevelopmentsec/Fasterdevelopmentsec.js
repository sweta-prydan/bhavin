import React from 'react'

import { FasterdevelopmentsecStyles } from './Fasterdevelopmentsec.styles'
import Image from '../ImgOptimized'
import Casequotesec from '../../components/Casequotesec/Casequotesec'

function Fasterdevelopmentsec(props) {
  const { FasterdevelopmentData } = props
  const caseQuoteProp = FasterdevelopmentData.caseQuoteProps

  return (
    <FasterdevelopmentsecStyles className="fasterdevelopmentsec">
      <div className="container">
        <h2>{FasterdevelopmentData.heading}</h2>
        <div className="row">
          <div className="col-head">
            <h3>{FasterdevelopmentData.maintitle}</h3>
          </div>
          <div className="col-content">
            {FasterdevelopmentData.mainpara && (
              <div className="FasterDevservicContent">
                <p>{FasterdevelopmentData.mainpara}</p>
              </div>
            )}
            {FasterdevelopmentData.FasterdeveService && (
              <div className="FasterDevservicesRow">
                {FasterdevelopmentData.FasterdeveService.map(
                  (FasterdeveServiceProps, i) => {
                    return (
                      <div key={i} className="FasterDevServicCol">
                        <div
                          className={`FasterDevServiceBox ${FasterdeveServiceProps.className}`}
                        >
                          <div className="FasterDevServiceBoxBg"></div>
                          <img src={FasterdeveServiceProps.Img} alt="Icon" />
                          <p>{FasterdeveServiceProps.para}</p>
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
            )}
            {FasterdevelopmentData.ServiceDetails && (
              <div className="DevservicBottomContent">
                <p>{FasterdevelopmentData.ServiceDetails}</p>
              </div>
            )}
            {props.colDaigramImg && (
              <figure>
                <Image
                  fluid={props.colDaigramImg}
                  lazyload={{
                    enabled: true,
                    once: true,
                    offset: 1000,
                    heigth: 511,
                  }}
                />
                {FasterdevelopmentData.mainImgcaption ? (
                  <div className="img-caption">
                    {FasterdevelopmentData.mainImgcaption}
                  </div>
                ) : (
                  ''
                )}
              </figure>
            )}
          </div>
        </div>
        <div className="fullImageRow">
          {props.fullRowImage && (
            <figure>
              <Image
                fluid={props.fullRowImage}
                lazyload={{
                  enabled: true,
                  once: true,
                  offset: 1000,
                  heigth: 511,
                }}
              />
              {FasterdevelopmentData.fullImgcaption ? (
                <div className="img-caption">
                  {FasterdevelopmentData.fullImgcaption}
                </div>
              ) : (
                ' '
              )}
            </figure>
          )}
        </div>
      </div>
      {caseQuoteProp && <Casequotesec {...caseQuoteProp} />}
    </FasterdevelopmentsecStyles>
  )
}

export default Fasterdevelopmentsec
