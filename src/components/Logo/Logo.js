import React, { Component } from 'react'
import styled from 'styled-components'
import { images } from '../../config/images'
import { Link } from 'gatsby'
import { sm, sh } from '../../config/variables'

const LogoStyles = styled.div`
  max-width: 161px;
  ${sh(`
    max-width: 137px;
	`)}
  ${sm('max-width: 130px')}
  a {
    display: block;
    img {
      width: 100%;
      max-width: 100%;
      display: block;
    }
  }
`
class Logo extends Component {
  render() {
    return (
      <LogoStyles>
        <Link to="/">
          <img 
          src={images.logo}
          alt="logo" 
            width={100}
            height={100}
          />
        </Link>
      </LogoStyles>
    )
  }
}

export default Logo

