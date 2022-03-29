import React, { useState } from 'react'

import { BuildAppStyle } from './BuildApplication.styles'
import { images } from '../../config/images'
import Button from '../Button/Button'

const BuildApplication = ({ buildApplicationData }) => {
  const [state, setState] = useState({ addClass: false })

  const { buildApplicationProps } = buildApplicationData
  console.log('buildApplicationData', buildApplicationData)

  return (
    <BuildAppStyle className="buildapp-section"  >
      <div className="container">
        <div className="heading-wrapper">
          <h3>{buildApplicationProps.buildApplicationHeading}</h3>
        </div>
        <div className="heading-para">
          <p>{buildApplicationProps.buildAppPara}</p>
        </div>
      </div>
    </BuildAppStyle>
  )
}

export default BuildApplication
