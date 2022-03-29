import React from 'react'
import { CasequotesecStyles } from './Casequotesec.styles'
import Picture from '../../components/Picture/Picture'

function Casequotesec(props) {
  return (
    <CasequotesecStyles className="casequote-section">
      <div className="container">
        <div className="quote-content">
          <div className="iconquote"></div>
          <div className="quote-content-wrapper">
            <div className="quote">{props.maintext}</div>
            {props.userName && (
              <div className="user-info">
                {props.userImg && (
                  <div className="user-img">
                    <Picture
                      height={50}
                      offset={2000}
                      srcSet={props.userImg2x}
                      src={props.userImg}
                      alt=""
                    />
                  </div>
                )}
                <div className="username">
                  {props.userName}
                  <span className="designation">{props.designation}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CasequotesecStyles>
  )
}

export default Casequotesec
