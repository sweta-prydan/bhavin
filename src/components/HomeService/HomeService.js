import React, { memo } from 'react'
import SingleService from '../SingleService/SingleService'
import { HomeServicestyle } from './HomeService.styles'

import { useSlider } from '../hooks/useSlider'

const HomeService = memo(({ homeServiceData: { homeServiceProps } }) => {
  let selector = 'home-service-list-wrap'
  let wrapper = 'home-service-list'
  let scroll = 'indicator-container'
  let scrollIndecator = `indicator-inner`

  useSlider({
    selector: selector,
    wrapper,
    scroll,
    scrollIndecator,
    speed: 5.5,
  })

  let sample = (
    <div>
      <div className={selector}>
        <div className={wrapper}>
          {homeServiceProps.serviceContents.map((serviceContent, i) => {
            return (
              <div key={i} className="single-service-wrap">
                <SingleService {...serviceContent} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="indicator-container">
        <div className="indicator-inner"></div>
      </div>
    </div>
  )

  return (
    <HomeServicestyle className="home-service">
      <div className="heading-wrapper">
        <h3>{homeServiceProps.homeServiceHeading}</h3>
      </div>
      {/*<RSCExample
        selector={selector}
        wrapper={wrapper}
        homeServiceProps={homeServiceProps}
      />*/}

      {sample}
    </HomeServicestyle>
  )
})

export default HomeService
