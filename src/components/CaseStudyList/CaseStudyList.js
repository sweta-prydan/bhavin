import React, { Component } from 'react'
import { CaseStudyListStyle } from './CaseStudyList.styles'
import SingleCaseStudy from '../../components/SingleCaseStudy/SingleCaseStudy'

class CaseStudyList extends Component {
  render() {
    const { caseStudyProps } = this.props.caseStudyListdata
    const {
      data: {
        case1: {
          childImageSharp: { fluid: caseImg1 },
        },
      },
    } = this.props
    let items = [
      caseImg1,
    ]

    return (
      <CaseStudyListStyle>
        <div className="container">
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
          </div>
        </div>
      </CaseStudyListStyle>
    )
  }
}

export default CaseStudyList
