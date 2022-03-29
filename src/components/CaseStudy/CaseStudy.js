import React, { memo } from 'react'
import SingleCaseStudy from '../SingleCaseStudy/SingleCaseStudy'
import Button from '../Button/Button'
import { CaseStudyStyle } from './CaseStudy.styles'

const CaseStudy = memo(({ caseStudydata: { caseStudyProps }, data }) => {
  const {
    case1: {
      childImageSharp: { fluid: caseImg1 },
    },
    case2: {
      childImageSharp: { fluid: caseImg2 },
    },
    case3: {
      childImageSharp: { fluid: caseImg3 },
    },

  } = data
  let items = [caseImg1, caseImg2, caseImg3]

  return (
    <CaseStudyStyle className="case-studies-section">
      <div className="container">
        <div className="heading-wrapper">
          <h3>{caseStudyProps.caseStudyheading}</h3>
        </div>
        <div className="case-stuides-listing">
          {caseStudyProps.caseStudiesContents.map((caseStudiesContent, i) => {
            return (
              <SingleCaseStudy
                key={i}
                fluid={items[i]}
                {...caseStudiesContent}
              />
            )
          })}
          <div className="button-row">
            <Button
              buttonLink={caseStudyProps.buttonURL}
              buttonName={caseStudyProps.buttonName}
            />
          </div>
        </div>
      </div>
    </CaseStudyStyle>
  )
})

export default CaseStudy
