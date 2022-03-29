import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Photo from '../../../public/images/banner-img.png'
import './homebanner.css'
import Button from '../Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function Homebanner(props) {
  const {
    homebannerData: { homebannerProps },
  } = props

  return (
    <div className="banner-img">
      <div className="middle-banner">
          <div className="banner-content">
            <Row className="main">
              <Col sm={7}>
                <div className='left-banner-header'>
                  <h1>{homebannerProps.homebannerHeading}</h1>
                </div>

                <p className="text">{homebannerProps.homebannerContent}</p>
                {homebannerProps.buttonName ? (
                  <Button
                    buttonName={homebannerProps.buttonName}
                    buttonLink={homebannerProps.buttonLink}
                  />
                ) : (
                  ''
                )}
              </Col>
              <Col>
                <div className='right-banner'>
                  <img
                    className='object-animation'
                    src={Photo}
                    alt='logo'
                  />
                </div>
              </Col>
            </Row>
          </div>
      </div>
    </div>

  )
}
export default Homebanner;