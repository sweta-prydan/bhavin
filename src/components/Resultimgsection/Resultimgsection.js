import React from 'react'
import { ResultimgsectionStyles } from './Resultimgsection.styles'
import Image from '../ImgOptimized'

function Resultimgsection(props) {
  const { ResultimgsectionProps } = props.resultimgsectiondata
  const {
    data: {
      redbulleventscreen: {
        childImageSharp: { fluid },
      },
    },
  } = props
  return (
    <ResultimgsectionStyles className="Resultimgsection">
      <div className="container">
        <div className="content-blk">
          <h3>{ResultimgsectionProps.heading}</h3>
          <p>{ResultimgsectionProps.content}</p>
        </div>
      </div>
      <div className="img-blk">
        <div className="imageWrap">
          <Image
            fluid={fluid}
            lazyload={{
              enabled: true,
              once: true,
              offset: 1000,
              heigth: 570,
            }}
          />
        </div>
      </div>
    </ResultimgsectionStyles>
  )
}

export default Resultimgsection
