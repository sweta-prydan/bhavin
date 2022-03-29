import React from 'react'
import { CaseintroductionStyles } from './Caseintroduction.styles'
import Image from '../ImgOptimized'
function Caseintroduction(props) {
  const {
    caseintrodata: { introductionContent },
    showFullimages,
  } = props

  const {
    data: {
      businessFullImage: {
        childImageSharp: { fluid: businessFullImage },
      },
    },
  } = props
  return (
    <CaseintroductionStyles className="caseintro-section">
      <div className="container">
        <h2>{introductionContent.maintile}</h2>
        <p>{introductionContent.mainpara}</p>
        {introductionContent.subheading ||
          introductionContent.paraLeft ||
          introductionContent.paraRight ? (
          <div className="sub-content">
            <h3>{introductionContent.subheading}</h3>
            <div className="row">
              <div className="col">
                <p>{introductionContent.paraLeft}</p>
              </div>
              <div className="col">
                <p>{introductionContent.paraRight}</p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        {showFullimages && (
          <div className="businessFullImage">
            <figure>
              <Image
                fluid={businessFullImage}
                lazyload={{
                  enabled: true,
                  once: true,
                  offset: 1000,
                  heigth: 416,
                }}
              />
            </figure>
          </div>
        )}
      </div>
    </CaseintroductionStyles>
  )
}

export default Caseintroduction
