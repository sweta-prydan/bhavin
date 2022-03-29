import React, { Component } from 'react'
import { Link } from 'gatsby'
import { NavStyle } from './Nav.styles'
import { images } from '../../config/images'
import { EXTERNAL_LINK, isWindowDefined } from '../../config/utils'

const navProps = [
  {
    navTitle: 'Services',
    navSubmenu: [
      {
        Link: '/services/custom-software-development/',
        Icon: images.serCustom,
        Title: 'Custom Software Development Services',
        className: 'off-white-two',
      },
      {
        Link: '/services/ui-ux-design/',
        Icon: images.serUiux,
        Title: 'UI / UX Design Services',
        className: 'off-white-two',
      },
      {
        Link: '/services/application-development/',
        Icon: images.serAppdev,
        Title: 'Application Development Services',
        className: 'off-white-two',
      },
      {
        Link: '/hire/dedicated-developers/',
        Icon: images.serDedicated,
        Title: 'Hire Dedicated Development Services',
        className: 'very-light-pink-eight',
      },
      {
        Link: '/services/mobile-app-development/',
        Icon: images.serEnterprise,
        Title: 'Mobile Application Development Services',
        className: 'pale-grey-three',
      },
      {
        Link: '/services/software-product-development/',
        Icon: images.serProduct,
        Title: 'Software Testing Services',
        className: 'pale-grey-five',
      },
      {
        Link: '/services/api-integration-development/',
        Icon: images.serApi,
        Title: 'API Integration Services',
        className: 'pale-grey-five',
      },
      {
        Link: '/services/software-product-development/',
        Icon: images.serWebapp,
        Title: 'Software Product Development Services',
        className: 'ice-blue-two',
      },
      {
        Link: '/services/ecommerce-development/',
        Icon: images.serEcommerce,
        Title: ' Ecommerce Services',
        className: 'pale-grey-five',
      },
    ],
  },
  {
    navLink: '/company/',
    navTitle: 'Company',
  },
  {
    navTitle: 'Technologies',
    navSubmenu: [
      {
        Link: '/hire/angular-developers/',
        Title: 'Angular Developers',
        Icon: images.iconAngularJS,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/android-developers/',
        Title: 'Android Developers',
        Icon: images.iconAdnroid,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/flutter-developers/',
        Title: 'Flutter Developers',
        Icon: images.iconFlutter,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/golang-developers/',
        Title: 'Golang Developers',
        Icon: images.iconGo,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/mobile-app-developers/',
        Title: 'IOS Developers',
        Icon: images.iconiOS,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/javascript-developers/',
        Title: 'JavaScript Developers',
        Icon: images.iconJavaScript,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/java-developers/',
        Title: 'Java Developers',
        Icon: images.iconJava,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/laravel-developers/',
        Title: 'Laravel Developers',
        Icon: images.iconLaravel,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/magento-developers/',
        Title: 'Magento Developers',
        Icon: images.iconMagento,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/dotnetcore-developers/',
        Title: '.NET Core Developers',
        Icon: images.iconNETCore,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/node-js-developers/',
        Title: 'Nodejs Developers',
        Icon: images.iconNodeJS,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/php-developers/',
        Title: 'PHP Developers',
        Icon: images.iconPHP,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/python-developers/',
        Title: 'Python Developers',
        Icon: images.iconPython,
        type: EXTERNAL_LINK,
        className: 'pale-grey-five',
      },
      {
        Link: '/hire/reactjs-developers/',
        Title: 'Reactjs Developers',
        Icon: images.iconReact,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/react-native-developers/',
        Title: 'React Native Developers',
        Icon: images.iconReactNative,
        type: EXTERNAL_LINK,
        className: 'ice-blue-two',
      },
      {
        Link: '/hire/ror-developers/',
        Title: 'Ruby On Rails Developers',
        Icon: images.iconRubyOnRails,
        type: EXTERNAL_LINK,
        className: 'ice-blue-two',
      },
      {
        Link: '/hire/php-developers/',
        Title: 'Vue Developers',
        Icon: images.iconVue,
        type: EXTERNAL_LINK,
        className: 'pale-grey-five',
      },
      {
        Link: '/hire/wordpress-developers/',
        Title: 'Wordpress Developers',
        Icon: images.iconWordpress,
        type: EXTERNAL_LINK,
        className: 'pale-grey-five',
      },
    ],
  },
  {
    navLink: '#',
    navTitle: 'Hire',
    navSubmenu: [
      {
        Link: '/hire/angular-developers/',
        Title: 'Hire Angular Developers',
        Icon: images.iconAngularJS,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/android-developers/',
        Title: 'Hire Android Developers',
        Icon: images.iconAdnroid,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/dedicated-developers/',
        Title: 'Hire Dedicated Developers',
        Icon: images.serDedicated,
        className: 'very-light-pink-eight',
      },
      {
        Link: '/hire/flutter-developers/',
        Title: 'Hire Flutter Developers',
        Icon: images.iconFlutter,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/golang-developers/',
        Title: 'Hire Golang Developers',
        Icon: images.iconGo,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/mobile-app-developers/',
        Title: 'Hire IOS Developers',
        Icon: images.iconiOS,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/javascript-developers/',
        Title: 'Hire JavaScript Developers',
        Icon: images.iconJavaScript,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/java-developers/',
        Title: 'Hire Java Developers',
        Icon: images.iconJava,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/laravel-developers/',
        Title: 'Hire Laravel Developers',
        Icon: images.iconLaravel,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/magento-developers/',
        Title: 'Hire Magento Developers',
        Icon: images.iconMagento,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/dotnetcore-developers/',
        Title: 'Hire .NET Core Developers',
        Icon: images.iconNETCore,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },

      {
        Link: '/hire/node-js-developers/',
        Title: 'Hire Nodejs Developers',
        Icon: images.iconNodeJS,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/php-developers/',
        Title: 'Hire PHP Developers',
        Icon: images.iconPHP,
        type: EXTERNAL_LINK,
        className: 'ice-three',
      },
      {
        Link: '/hire/python-developers/',
        Title: 'Hire Python Developers',
        Icon: images.iconPython,
        type: EXTERNAL_LINK,
        className: 'pale-grey-five',
      },
      {
        Link: '/hire/reactjs-developers/',
        Title: 'Hire Reactjs Developers',
        Icon: images.iconReact,
        type: EXTERNAL_LINK,
        className: 'off-white-two',
      },
      {
        Link: '/hire/react-native-developers/',
        Title: 'Hire React Native Developers',
        Icon: images.iconReactNative,
        type: EXTERNAL_LINK,
        className: 'ice-blue-two',
      },
      {
        Link: '/hire/ror-developers/',
        Title: 'Hire Ruby On Rails Developers',
        Icon: images.iconRubyOnRails,
        type: EXTERNAL_LINK,
        className: 'ice-blue-two',
      },
      {
        Link: '/hire/php-developers/',
        Title: 'Hire Vue Developers',
        Icon: images.iconVue,
        type: EXTERNAL_LINK,
        className: 'pale-grey-five',
      },
      {
        Link: '/hire/wordpress-developers/',
        Title: 'Hire Wordpress Developers',
        Icon: images.iconWordpress,
        type: EXTERNAL_LINK,
        className: 'pale-grey-five',
      },
    ],
  },
  {
    navLink: '/how-it-works/',
    navTitle: 'How it works',
  },
  {
    navLink: '/blog/',
    navTitle: 'Blog',
    type: EXTERNAL_LINK,
  },
  {
    navLink: '/career/',
    navTitle: 'Career',
  },
]

class Nav extends Component {
  render() {
    return (
      <NavStyle className="navigation-menu">
        <ul>
          {navProps.map((navProp, i) => {
            return (
              <li key={i}>
                {navProp.navSubmenu && (
                  <div className="submenu">
                    <ul>
                      {navProp.navSubmenu.map((submenuProps, i) => {
                        return (
                          <li key={`${i}${i}`}>
                            {submenuProps.type !== EXTERNAL_LINK ? (
                              <Link
                                activeClassName="active"
                                to={submenuProps.Link}
                                className={submenuProps.className}
                              >
                                <div className="icon">
                                  <img src={submenuProps.Icon} alt="" />
                                </div>
                                <div className="title">
                                  {submenuProps.Title}
                                </div>
                              </Link>
                            ) : (
                              <a
                                href={`${isWindowDefined ? window.location.origin : ''
                                  }${submenuProps.Link}`}
                                className={submenuProps.className}
                              >
                                <div className="icon">
                                  <img src={submenuProps.Icon} alt="" />
                                </div>
                                <div className="title">
                                  {submenuProps.Title}
                                </div>
                              </a>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
                {navProp.type !== EXTERNAL_LINK ? (
                  <Link activeClassName="active" to={navProp.navLink}>
                    {navProp.navTitle}
                  </Link>
                ) : (
                  <a
                    href={`${isWindowDefined ? window.location.origin : ''}${navProp.navLink
                      }`}
                  >
                    {navProp.navTitle}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </NavStyle>
    )
  }
}

export default Nav
