import React from 'react'

import { PurplenoteAppScreenSecStyles } from './PurplenoteAppScreenSec.styles'
import Image from '../ImgOptimized'

function PurplenoteAppScreenSec(props) {
  const {
    data: {
      FitcomAppScreen1: {
        childImageSharp: { fluid: FitcomAppScreen1 },
      },
      FitcomAppScreen2: {
        childImageSharp: { fluid: FitcomAppScreen2 },
      },
      FitcomAppScreen3: {
        childImageSharp: { fluid: FitcomAppScreen3 },
      },
      FitcomAppScreen4: {
        childImageSharp: { fluid: FitcomAppScreen4 },
      },
      FitcomAppScreen5: {
        childImageSharp: { fluid: FitcomAppScreen5 },
      },
      FitcomAppScreen6: {
        childImageSharp: { fluid: FitcomAppScreen6 },
      },
      FitcomAppScreen7: {
        childImageSharp: { fluid: FitcomAppScreen7 },
      },
      FitcomAppScreen8: {
        childImageSharp: { fluid: FitcomAppScreen8 },
      },
    },
  } = props
  let items = [
    [FitcomAppScreen1, FitcomAppScreen2, FitcomAppScreen7],
    [FitcomAppScreen3, FitcomAppScreen4, FitcomAppScreen8],
    [FitcomAppScreen5, FitcomAppScreen6],
  ]
  return (
    <PurplenoteAppScreenSecStyles>
      <div className="container">
        <div className="AppScreenMain">
          <div className="AppScreenRow">
            {items.map((item, i) => {
              return (
                <div key={i} className="AppScreenItem">
                  {item.map((Listitem, j) => {
                    return (
                      <div key={`${i}${j}`} className="appScreenMockup">
                        {items[i] && (
                          <Image
                            fluid={items[i][j]}
                            lazyload={{
                              enabled: true,
                              once: true,
                              offset: 1000,
                              heigth: 492,
                            }}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </PurplenoteAppScreenSecStyles>
  )
}

export default PurplenoteAppScreenSec
