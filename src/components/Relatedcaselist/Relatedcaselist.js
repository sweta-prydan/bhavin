import React from 'react'
import { RelatedcaselistStyles } from './Relatedcaselist.styles'
import Singlerelatedcasestudy from '../../components/Singlerelatedcasestudy/Singlerelatedcasestudy'

function Relatedcaselist(props) {
  const { relatedcaselistProps } = props.relatedcaselistdata
  const {
    data: {
      singlecase1: {
        childImageSharp: { fluid: singlecase1 },
      },
      singlecase2: {
        childImageSharp: { fluid: singlecase2 },
      },
    },
  } = props
  let iteams = [singlecase1, singlecase2]
  return (
    <RelatedcaselistStyles>
      <div className="container">
        <h2>{relatedcaselistProps.heading}</h2>
        <div className="case-listing">
          {relatedcaselistProps.caselistProps.map((caselistProp, i) => {
            return (
              <Singlerelatedcasestudy
                key={i}
                fluid={iteams[i]}
                {...caselistProp}
              />
            )
          })}
        </div>
      </div>
    </RelatedcaselistStyles>
  )
}

export default Relatedcaselist
