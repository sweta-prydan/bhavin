import React from 'react'
import { SinglerelatedcasestudyStyles } from './Singlerelatedcasestudy.styles'
import { Link } from 'gatsby'
import Image from '../ImgOptimized'

function Singlerelatedcasestudy(props) {
  return (
    <SinglerelatedcasestudyStyles className={props.className}>
      <div className="content-wrap">
        <div className="case-bg"></div>
        <div className="img-blk">
          <Image
            fluid={props.fluid}
            lazyload={{
              enabled: true,
              once: true,
              offset: 1000,
              heigth: 210,
            }}
          />
        </div>
        <div className="content-blk">
          <h4>{props.title}</h4>
          <p>{props.para}</p>
          <Link className="btn-readmore" to={props.link}>
            Read Case Study
          </Link>
        </div>
      </div>
    </SinglerelatedcasestudyStyles>
  )
}

export default Singlerelatedcasestudy
