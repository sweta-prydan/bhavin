import React from 'react'
import { CaseengagementsecStyles } from './Caseengagementsec.styles'
import Casequotesec from '../Casequotesec/Casequotesec'

function Caseengagementsec(props) {
  const { Caseengagementsecdata } = props

  const caseQuoteProp = Caseengagementsecdata.caseQuoteProps
  return (
    <CaseengagementsecStyles className="caseEngagementSec">
      <div className="container">
        <div className="businessHeading">
          <h2>{Caseengagementsecdata.title}</h2>
        </div>
        <div className="engagementContent">
          <div className="left-part">
            <div className="bottom-content">
              <h4>{Caseengagementsecdata.bottomTitle}</h4>
              <p>{Caseengagementsecdata.bottomContent}</p>
            </div>
          </div>
          <div className="right-part">
            <p>{Caseengagementsecdata.maincontent}</p>
          </div>
        </div>
      </div>
      {caseQuoteProp && <Casequotesec {...caseQuoteProp} />}
    </CaseengagementsecStyles>
  )
}

export default Caseengagementsec
