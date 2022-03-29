import React from 'react'
import { AppplatformsecStyles } from './Appplatformsec.styles'
import Casequotesec from '../Casequotesec/Casequotesec'

function Appplatformsec(props) {
  const { AppplatformProps } = props.AppplatformData
  const caseQuoteProp = AppplatformProps.caseQuoteProps
  return (
    <AppplatformsecStyles className="AppplatformsecStyles">
      <div className="container">
        <div className="mobileAppsheading">
          <h4>{AppplatformProps.Title}</h4>
        </div>
        <div className="mobileAppsContent">
          <div className="mobileAppsContentLeft">
            <div className="mobileAppsTitle">
              <h2>{AppplatformProps.subTitle}</h2>
            </div>
          </div>
          <div className="mobileAppsContentRight">
            <div className="mobileAppsDetails">
              <p>{AppplatformProps.para}</p>
            </div>
          </div>
        </div>
        <div className="app-platform-block">
          {AppplatformProps.AppplatformBlock.map((AppplatformProps, i) => {
            return (
              <div key={i} className="single-platform-block">
                <div className="title">{AppplatformProps.title}</div>
                <div className="stack-listing">
                  {AppplatformProps.platformList.map((platformListProp, i) => {
                    return (
                      <div key={`${i}${i}`} className="single-platform">
                        {platformListProp}
                      </div>
                    )
                  })}
                </div>
                <div className="separator-row">
                  <div className="divider" />
                  <div className="divider" />
                  <div className="divider" />
                </div>
              </div>
            )
          })}
        </div>
        <div className="featuresDetailsWrap">
          <div className="featuresDetailsBlock">
            <div className="featuresDetailsBg"></div>
            <p>{AppplatformProps.featuresDetails}</p>
          </div>
        </div>
      </div>
      {caseQuoteProp && <Casequotesec {...caseQuoteProp} />}
    </AppplatformsecStyles>
  )
}

export default Appplatformsec
