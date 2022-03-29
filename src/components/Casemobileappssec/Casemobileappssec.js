import React from 'react'
import { CasemobileappssecStyles } from './Casemobileappssec.styles'
import Image from 'components/ImgOptimized'
import Casequotesec from 'components/Casequotesec/Casequotesec'
import Casequotewiththumbsec from 'components/Casequotewiththumbsec/Casequotewiththumbsec'
function Casemobileappssec(props) {
  const {
    Casemobileappsdata: { CasemobileappsProps },
  } = props
  const caseQuoteProp = CasemobileappsProps.caseQuoteProps
  const caseQuotewithThumbProp = CasemobileappsProps.caseQuotewithThumbProps

  return (
    <CasemobileappssecStyles className="caseMobileAppsSec">
      <div className="container">
        <div className="mobileAppsheading">
          <h4>{CasemobileappsProps.Title}</h4>
        </div>
        <div className="mobileAppsContent">
          <div className="mobileAppsContentLeft">
            <div className="mobileAppsTitle">
              <h2>{CasemobileappsProps.subTitle}</h2>
            </div>
          </div>
          <div className="mobileAppsContentRight">
            <div className="mobileAppsDetails">
              <p>{CasemobileappsProps.para}</p>
            </div>
          </div>
        </div>
        {props.mobileAppsImages ? (
          <div className="mobileAppsImages">
            <Image
              fluid={props.mobileAppsImages}
              lazyload={{
                enabled: true,
                once: true,
                offset: 1000,
                heigth: 680,
              }}
            />
          </div>
        ) : (
          ' '
        )}
        {CasemobileappsProps.performancTitle ||
          CasemobileappsProps.performancPara ||
          props.performanceThumb ? (
          <div className="performanceContentRow">
            <div className="performancDetails">
              <h3>{CasemobileappsProps.performancTitle}</h3>
              <p>{CasemobileappsProps.performancPara}</p>
            </div>
            {props.performanceThumb ? (
              <div className="performancThumb">
                <figure>
                  <Image
                    fluid={props.performanceThumb}
                    lazyload={{
                      enabled: true,
                      once: true,
                      offset: 1000,
                      heigth: 408,
                    }}
                  />
                  <div className="img-caption">
                    {CasemobileappsProps.imgCaption}
                  </div>
                </figure>
              </div>
            ) : (
              ' '
            )}
          </div>
        ) : (
          ' '
        )}
        {CasemobileappsProps.RAMConsumptionTitle ||
          CasemobileappsProps.RAMConsumptionPara ? (
          <div className="RAMConsumptionContentRow">
            <div className="RAMConsumptionTitle">
              <h3>{CasemobileappsProps.RAMConsumptionTitle}</h3>
            </div>
            <div className="RAMConsumptionDetails">
              <p>{CasemobileappsProps.RAMConsumptionPara}</p>
            </div>
          </div>
        ) : (
          ' '
        )}
      </div>

      {caseQuoteProp && <Casequotesec {...caseQuoteProp} />}
      {caseQuotewithThumbProp && (
        <Casequotewiththumbsec
          quoteThumb={props.quoteThumb}
          {...caseQuotewithThumbProp}
        />
      )}
    </CasemobileappssecStyles>
  )
}

export default Casemobileappssec
