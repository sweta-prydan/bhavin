import React, { Component } from 'react'
import { Link } from 'gatsby'
import { MobileMenuStyle } from './MobileMenu.styles'
import Logo from '../Logo/Logo'
import { EXTERNAL_LINK, isWindowDefined } from '../../config/utils'

const navProps = [
  {
    name: 'About',
    hasmenu: '',
    childProps: [
      {
        name: 'About',
        link: '/about-us/',
      },
      {
        name: 'How It Works',
        link: '/how-it-works/',
      },
    ],
  },
  {
    name: 'Services',
    link: 'services/software-development/',
    hasmenu: '',
    childProps: [
      {
        name: 'Custom Software Development Services',
        link: '/services/custom-software-development/',
      },
      {
        name: 'UI / UX Design Services',
        Link: '/services/ui-ux-design/',
      },
      {
        name: 'Application Development Services',
        link: '/services/application-development/',
      },
      {
        name: 'Hire Dedicated Development Services',
        link: '/hire/dedicated-developers/',
      },
      {
        name: 'Mobile Application Development Services',
        link: '/services/mobile-app-development/',
      },
      {
        name: 'Software Testing Services',
        link: '/services/software-product-development/',
      },
      {
        name: 'API Integration Services',
        link: '/services/api-integration-development/',
      },
      {
        name: 'Software Product Development Services',
        link: '/services/software-product-development/',
      },
      {
        name: ' Ecommerce Services',
        link: '/services/ecommerce-development/',
      },
    ],
  },
  {
    name: 'Hire',
    link: '#',
    hasmenu: '',
    childProps: [
      {
        name: 'Hire Angular Developers',
        link: '/hire/angular-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Android Developers',
        link: '/hire/android-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Dedicated Developers',
        link: '/hire/dedicated-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Flutter Developers',
        link: '/hire/flutter-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Golang Developers',
        link: '/hire/golang-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire IOS Developers',
        link: '/hire/mobile-app-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire JavaScript Developers',
        link: '/hire/javascript-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Java Developers',
        link: '/hire/java-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Laravel Developers',
        link: '/hire/laravel-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Magento Developers',
        link: '/hire/magento-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire .NET Core Developers',
        link: '/hire/dotnetcore-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Nodejs Developers',
        link: '/hire/node-js-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire PHP Developers',
        link: '/hire/php-developers/',
        type: EXTERNAL_LINK,
      },
      {
        link: '/hire/python-developers/',
        name: 'Hire Python Developers',
        type: EXTERNAL_LINK,
      },
      {
        link: '/hire/reactjs-developers/',
        name: 'Hire Reactjs Developers',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire React Native Developers',
        link: '/hire/react-native-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Ruby On Rails Developers',
        link: '/hire/ror-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Vue Developers',
        link: '/hire/php-developers/',
        type: EXTERNAL_LINK,
      },
      {
        name: 'Hire Wordpress Developers',
        link: '/hire/wordpress-developers/',
        type: EXTERNAL_LINK,
      },
    ],
  },
  {
    name: 'How it works',
    link: '/how-it-works/',
    childProps: [],
  },
  {
    name: 'Contact Us',
    link: '/contact/',
    childProps: [],
  },
  {
    name: 'Blog',
    link: '/blog/',
    type: EXTERNAL_LINK,
    childProps: [],
  },
]

class MobileMenu extends Component {
  state = {
    isActive: null,
    activeSubpanel: 'Services',
  }

  menuEvent = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      if (this.state.isActive) {
        document.body.classList.add('over-hidden')
      } else {
        document.body.classList.remove('over-hidden')
      }
    })
  }

  componentWillUnmount() {
    document.body.classList.remove('over-hidden')
  }

  handleClick = activeSubpanel => {
    this.setState({ activeSubpanel })
  }

  render() {
    const { isActive, activeSubpanel } = this.state
    const obj = {
      null: '',
      true: 'menu-open',
      false: 'menu-close',
    }

    return (
      <MobileMenuStyle className={`mobile-menu ${obj[isActive]} `}>
        <div className="menu-btn" onClick={this.menuEvent}>
          <div className="menu-icon">
            <div className="top-line" />
            <div className="middle-line" />
            <div className="bottom-line" />
          </div>
          <div className="title">Menu</div>
        </div>
        <div className="mobilemenu">
          <div className="mobile-menu-content">
            <div className="menu-head">
              <Logo />
              <div className="close-btn" onClick={this.menuEvent}>
                Close
              </div>
            </div>
            <ul>
              {navProps.map((navProp, i) => {
                return (
                  <li
                    key={i}
                    className={`${activeSubpanel === navProp.name ? 'active' : ''
                      }`}
                  >
                    {navProp.hasmenu ? (
                      navProp.type !== EXTERNAL_LINK ? (
                        <Link to={navProp.link}>{navProp.name}</Link>
                      ) : (
                        <a
                          href={`${isWindowDefined ? window.location.origin : ''
                            }${navProp.link}`}
                        >
                          {navProp.name}
                        </a>
                      )
                    ) : (
                      <>
                        <span className="menu-iteam">
                          {navProp.link ? (
                            navProp.type !== EXTERNAL_LINK ? (
                              <Link to={navProp.link} className="menu-title">
                                {navProp.name}
                              </Link>
                            ) : (
                              <a
                                href={`${isWindowDefined ? window.location.origin : ''
                                  }${navProp.link}`}
                              >
                                {navProp.name}
                              </a>
                            )
                          ) : (
                            <span className="menu-title">{navProp.name}</span>
                          )}

                          {!!navProp.childProps.length && (
                            <span
                              className="menu-icon"
                              onClick={() =>
                                this.handleClick(
                                  activeSubpanel === navProp.name
                                    ? ''
                                    : navProp.name
                                )
                              }
                            />
                          )}
                        </span>
                      </>
                    )}
                    {!!navProp.childProps.length && (
                      <ul>
                        {navProp.childProps.map((childProp, i) => {
                          return (
                            <li key={`${i}${i}`}>
                              {childProp.type !== EXTERNAL_LINK ? (
                                <Link to={childProp.link}>
                                  {childProp.name}
                                </Link>
                              ) : (
                                <a href={childProp.link}>{childProp.name}</a>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mobile-menu-background" />
        </div>
      </MobileMenuStyle>
    )
  }
}

export default MobileMenu
