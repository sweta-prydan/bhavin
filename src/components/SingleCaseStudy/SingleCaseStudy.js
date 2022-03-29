import React, { Component } from 'react'
import { Link } from 'gatsby'
import { SingleCaeStudyStyle } from './SingleCaseStudy.styles'
import Image from '../ImgOptimized'

class SingleCaseStudy extends Component {
  render() {
    return (
      <SingleCaeStudyStyle
        className={`case-study-single ${this.props.caseStudiesClassName || ''}`}
      >
        <Link to={this.props.caseURL}>
          <div className="case-study-bg" />
          <div className="case-study-wrap">
            <div className="content-block">
              <h3>{this.props.caseStudiesTitle}</h3>
              <p>{this.props.caseStudiesParaGraph}</p>
              <span className="line" />
              <div className="btn-read">Read more</div>
            </div>
            <div className="img-block">
              {this.props.fluid && (
                <Image
                  fluid={this.props.fluid}

                  lazyload={{
                    enabled: false,
                    once: true,
                    offset: 1000,
                    heigth: 430,
                  }}
                />
              )}
            </div>
          </div>
        </Link>
      </SingleCaeStudyStyle>
    )
  }
}

export default SingleCaseStudy
