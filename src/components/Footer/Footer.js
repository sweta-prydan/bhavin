import React, { Component } from 'react'
import { FooterStyle } from './Footer.styles'
import { Link, navigate } from 'gatsby'
import { images } from '../../config/images'
import { EXTERNAL_LINK, isWindowDefined } from '../../config/utils'
import Picture from '../Picture/Picture'
import loadable from '@loadable/component'
import 'slick-carousel/slick/slick.css'
const ReactSlick = loadable.lib(() => import('react-slick'))
const PPCGetInTouchForm = loadable(() =>
  import('../PPCGetInTouchForm/PPCGetInTouchForm')
)

const SocialMedia = [
  {
    src: images.iconFacebook,
    srcHvr: images.iconFacebookHvr,
    alt: 'Facebook',
    URL: 'https://www.facebook.com/prydanconsultancy/',
  },
  {
    src: images.iconLinkedin,
    srcHvr: images.iconLinkedinHvr,
    alt: 'linkedin',
    URL: 'https://www.linkedin.com/company/prydanconsultancy/',
  },
  {
    src: images.iconTwitter,
    srcHvr: images.iconTwitterHvr,
    alt: 'Twitter',
    URL: 'https://www.twitter.com/prydanconsulta1/',
  },


]
const Services = [
  {
    linkTitle: 'API Integration',
    linkURL: '/services/api-integration-development/',
  },
  {
    linkTitle: 'Application',
    linkURL: '/services/application-development/',
  },

  {
    linkTitle: 'Ecommerce',
    linkURL: '/services/ecommerce-development/',
  },
  {
    linkTitle: 'Enterprise',
    linkURL: '/services/enterprise-application-development',
  },
  {
    linkTitle: 'Testing',
    linkURL: '/services/softawre-testing',
  },
  {
    linkTitle: 'UI / UX Design',
    linkURL: '/services/UI/UX-design',
  },
]
const About = [
  {
    linkTitle: 'Company',
    linkURL: '/company/',
  },
  {
    linkTitle: 'How Prydan Works',
    linkURL: '/how-it-works/',
  },
  {
    linkTitle: 'Blog',
    linkURL: '/blog/',
    type: EXTERNAL_LINK,
  },
  {
    linkTitle: 'Career',
    linkURL: '/career/',
  },
  {
    linkTitle: 'Case Studies',
    linkURL: '/case-studies/',
  },
  {
    linkTitle: 'Contact Us',
    linkURL: '/contact/',
  },
]
const LinksHire = [
  {
    linkTitle: 'Hire Nodejs Developers',
    linkURL: '/hire/node-developers/',
  },
  {
    linkTitle: 'Hire Reactjs Developers',
    linkURL: '/hire/reactjs-developers/',
  },
  {
    linkTitle: 'Hire Dedicated Developers',
    linkURL: '/hire/dedicated-developers/',
  },
  {
    linkTitle: 'Hire React Native Developers',
    linkURL: '/hire/react-native-developers/',
  },
  {
    linkTitle: 'Hire Mobile App Developers',
    linkURL: '/hire/mobile-app-developers/',
  },
  {
    linkTitle: 'Hire PHP Developers',
    linkURL: '/hire/php-developers/',
  },
]



const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  centerPadding: 0,
  touchMove: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        touchMove: true,
      },
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 2,
        touchMove: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        touchMove: true,
      },
    },
  ],
}


function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      <svg width="32" height="25" viewBox="0 0 32 25">
        <path
          fill="#6a6a6a"
          fillRule="evenodd"
          d="M0 12a1.22 1.22 0 0 1 0-.13v-.11a1.25 1.25 0 0 1 0-.13l.05-.1.07-.12.07-.09.08-.1L11 .39a1.3 1.3 0 0 1 1.82 0 1.25 1.25 0 0 1 0 1.79l-8.43 8.56h26.32a1.3 1.3 0 0 1 0 2.59H4.29l8.55 8.55a1.25 1.25 0 0 1 0 1.79 1.3 1.3 0 0 1-1.82 0L.37 13l-.08-.09-.08-.09-.06-.11-.06-.11a1.18 1.18 0 0 1 0-.12 1.22 1.22 0 0 1 0-.12 1.16 1.16 0 0 1 0-.12 1.2 1.2 0 0 1 0-.13L0 12z"
        />
      </svg>
    </button>
  )
}

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <button className="slick-arrow slick-next" onClick={onClick}>
      <svg width="32" height="25" viewBox="0 0 32 25">
        <path
          fill="#6a6a6a"
          fillRule="evenodd"
          d="M32 12a1.22 1.22 0 0 0 0-.13v-.11a1.25 1.25 0 0 0 0-.13l-.05-.1-.07-.12-.07-.09-.08-.1L21 .39a1.3 1.3 0 0 0-1.82 0 1.25 1.25 0 0 0 0 1.79l8.43 8.56H1.29a1.3 1.3 0 0 0 0 2.59h26.42l-8.55 8.55a1.25 1.25 0 0 0 0 1.79 1.3 1.3 0 0 0 1.82 0L31.63 13l.08-.09.08-.09.06-.11.06-.11a1.18 1.18 0 0 0 0-.12 1.22 1.22 0 0 0 0-.12 1.16 1.16 0 0 0 0-.12 1.2 1.2 0 0 0 0-.13L32 12z"
        />
      </svg>
    </button>
  )
}


class Footer extends Component {


  render() {
    const { name, img, img2x, description } = this.props
    let element = 1


    return (
      <FooterStyle  >

        <div className="address-row-wrap">
          <div className="container">
            <div className="address-row">
              <h5>Office</h5>
              <div className="address-listing">
                <div className="address-single"   >

                  <p> <strong>Address  </strong>  </p>
                  <p>C-11, Kadamb Flats, Near Government Tubewell, </p>
                  <p> Bopal, Ahmedabad - 380058 Gujarat, India </p>
                  <p> <strong>skype</strong></p>
                  <p>idb_amit </p>
                  <p><strong>Email</strong></p>
                  <p>hello@prydan.com </p>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="foot-info-row-wrap">
          <div className="container">
            {element === 1 ? (
              <div className="footer-form">
                <div className="form-part">
                  <h3>Let’s talk</h3>
                  <PPCGetInTouchForm CTAtext={'Send'} />
                </div>
                <div className="admin-info">
                  <div className="img-blk">
                    <Picture
                      height={110}
                      offset={2000}
                      srcSet={img2x}
                      src={img}
                      alt="admin"
                    />
                  </div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a href="tel:+918884266639" className="btn-call">
                    Call Us Now
                  </a>
                </div>
              </div>
            ) : (
              ''
            )}
            <div className="foot-info-row">
              <div className="top-row" >
                <div className="foot-logo">
                  <Link to="/">
                    <img src={images.logo} alt="Logo" />
                  </Link>
                </div>
                <div className="foot-description"> Prydan Consultancy is a leading Web & Mobile App Development Company building awesome mobile and web application for startups and business. </div>
                <div className="social-icon">
                  {SocialMedia.map((SocialMediaProps, i) => {
                    return (
                      <a
                        key={i}
                        href={SocialMediaProps.URL}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          src={SocialMediaProps.src}
                          alt={SocialMediaProps.alt}
                        />
                        <img
                          className="hvr"
                          src={SocialMediaProps.srcHvr}
                          alt=""
                        />

                      </a>
                    )
                  })}
                </div>  {/* END OF     <div className="social-icon"> */}

              </div>     {/* END OF       <div className="top-row" >   */}

              <div className="foot-link-row">
                <div className='link-col'>
                  <h5>Services</h5>
                  <ul>
                    {Services.map(linkProps => {
                      return (
                        <li key={linkProps.linkTitle}>
                          {linkProps.type !== EXTERNAL_LINK ? (
                            <Link to={linkProps.linkURL}>
                              {linkProps.linkTitle}
                            </Link>
                          ) : (
                            <a
                              href={`${isWindowDefined ? window.location.origin : ''
                                }/blog/`}
                            >
                              {linkProps.linkTitle}
                            </a>
                          )}

                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="link-col">
                  <h5>About Prydan</h5>

                  <ul>
                    {About.map(linkProps => {
                      return (
                        <li key={linkProps.linkTitle}>
                          {linkProps.type !== EXTERNAL_LINK ? (
                            <Link to={linkProps.linkURL}>
                              {linkProps.linkTitle}
                            </Link>
                          ) : (
                            <a
                              href={`${isWindowDefined ? window.location.origin : ''
                                }/blog/`}
                            >
                              {linkProps.linkTitle}
                            </a>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div> {/* END OF      <div className="link-col">  */}
                <div className="link-col large">
                  <div className="column">
                    <h5>Hire</h5>
                    <ul>
                      {LinksHire.map(linkProps => {
                        return (
                          <li key={linkProps.linkTitle}>
                            {linkProps.type !== EXTERNAL_LINK ? (
                              <Link to={linkProps.linkURL}>
                                {linkProps.linkTitle}
                              </Link>
                            ) : (
                              <a
                                href={`${isWindowDefined ? window.location.origin : ''
                                  }/blog/`}
                              >
                                {linkProps.linkTitle}
                              </a>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                </div> {/* END OF      <div className="link-col large"> */}
              </div> {/* END OF        <div className="foot-link-row">  */}
            </div> {/* END OF          <div className="foot-info-row">  */}
          </div> {/* END OF    <div className="container">  */}
        </div> {/* END OF     <div className="foot-info-row-wrap">  */}

        <div className="footer-copyright">
          <div className="container">
            <p>
              Copyright © {new Date().getFullYear()} Prydan Consultancy. All Rights
              Reserved.
            </p>
          </div>
        </div>

      </FooterStyle>
    )
  }
}

export default Footer
