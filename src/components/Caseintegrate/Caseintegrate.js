import React from 'react'
import { CaseintegrateStyles } from './Caseintegrate.styles'
import Image from '../ImgOptimized'
import Casequotesec from '../Casequotesec/Casequotesec'

function Caseintegrate(props) {
  const { caseIntegrateProps } = props.caseintegratedata
  const caseQuoteProp = caseIntegrateProps.caseQuoteProps
  const {
    data: {
      integrateImg: {
        childImageSharp: { fluid },
      },
    },
  } = props
  return (
    <CaseintegrateStyles>
      <div className="container">
        <h2>{caseIntegrateProps.heading}</h2>
        <p>{caseIntegrateProps.para}</p>
        <figure>
          <Image
            fluid={fluid}
            lazyload={{
              enabled: true,
              once: true,
              offset: 1000,
              heigth: 397,
            }}
          />
          <div className="img-caption">{caseIntegrateProps.imgCaption}</div>
        </figure>
        <p>{caseIntegrateProps.secondPara}</p>
      </div>
      {caseQuoteProp && <Casequotesec {...caseQuoteProp} />}
    </CaseintegrateStyles>
  )
}

export default Caseintegrate
