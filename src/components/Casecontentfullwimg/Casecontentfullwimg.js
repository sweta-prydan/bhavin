import React from 'react'
import { CasecontentfullwimgStyles } from './Casecontentfullwimg.styles'
import Image from '../ImgOptimized'

function Casecontentfullwimg(props) {
  const { casecontentfullwdata } = props
  return (
    <CasecontentfullwimgStyles className="Casecontentfullwimg">
      <div className="container">
        {casecontentfullwdata.heading || casecontentfullwdata.para ? (
          <div className="content-container">
            <h2>{casecontentfullwdata.heading}</h2>
            <p>{casecontentfullwdata.para}</p>
          </div>
        ) : (
          ''
        )}
        <figure>
          <Image
            fluid={props.fluid}
            lazyload={{
              enabled: true,
              once: true,
              offset: 1000,
              heigth: 694,
            }}
          />
          {casecontentfullwdata.imgCaption ? (
            <div className="img-caption">{casecontentfullwdata.imgCaption}</div>
          ) : (
            ''
          )}
        </figure>
        {casecontentfullwdata.bottomPara ? (
          <div className="content-container">
            <p>{casecontentfullwdata.bottomPara}</p>
          </div>
        ) : (
          ' '
        )}
      </div>
    </CasecontentfullwimgStyles>
  )
}

export default Casecontentfullwimg
