import React, { Component } from 'react'
import { HeaderStyle } from './Header.styles'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import MobileMenu from '../MobileMenu/MobileMenu'
import Button from '../Button/Button'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { scrollTop: 0 }
  }

  handleScroll = () => {
    let scrollTop
    var ua = navigator.userAgent.toLowerCase()
    if (ua.indexOf('safari') !== -1) {
      if (ua.indexOf('chrome') > -1) {
        scrollTop = document.documentElement.scrollTop
      } else {
        scrollTop = document.body.scrollTop
      }
    } else {
      scrollTop = document.documentElement.scrollTop
    }

    this.setState({
      scrollTop,
    })
    if (scrollTop > 50) {
      this.setState({ isActive: true })
    } else {
      this.setState({ isActive: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { isActive } = this.state
    return (
      <HeaderStyle className={`${isActive ? 'sticky' : ''}`}>
        <div className="header-container">
          <Logo />
          <Nav />
          <Button buttonLink="/contact/" buttonName="Contact Us" />

          <MobileMenu />
        </div>
      </HeaderStyle>
    )
  }
}

export default Header
