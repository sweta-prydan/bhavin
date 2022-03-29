import React from 'react'
import { ServicesScrollSecStyle } from './ServicesScrollSec.styles'
import SingleBlogCard from '../SingleBlogCard/SingleBlogCard'
import { useDraggable } from '../hooks/useDraggable'
import { getElementOffset } from '../../config/utils'
import { Link } from 'gatsby'

const ServicesScrollSec = props => {
  const { serviceScrollSecProps } = props.serviceScrollSecdata
  const {
    data: {
      customSofBlog1: {
        childImageSharp: { fluid: customSofBlog1 },
      },
      customSofBlog2: {
        childImageSharp: { fluid: customSofBlog2 },
      },
      customSofBlog3: {
        childImageSharp: { fluid: customSofBlog3 },
      },
      SoftTestingBlog1: {
        childImageSharp: { fluid: SoftTestingBlog1 },
      },
      SoftTestingBlog2: {
        childImageSharp: { fluid: SoftTestingBlog2 },
      },
      SoftTestingBlog3: {
        childImageSharp: { fluid: SoftTestingBlog3 },
      },
      MobileAppBlog1: {
        childImageSharp: { fluid: MobileAppBlog1 },
      },
      MobileAppBlog2: {
        childImageSharp: { fluid: MobileAppBlog2 },
      },
      MobileAppBlog3: {
        childImageSharp: { fluid: MobileAppBlog3 },
      },
      webAppBlog1: {
        childImageSharp: { fluid: webAppBlog1 },
      },
      webAppBlog2: {
        childImageSharp: { fluid: webAppBlog2 },
      },
      webAppBlog3: {
        childImageSharp: { fluid: webAppBlog3 },
      },
      DedicSoftBlog1: {
        childImageSharp: { fluid: DedicSoftBlog1 },
      },
      DedicSoftBlog2: {
        childImageSharp: { fluid: DedicSoftBlog2 },
      },
      DedicSoftBlog3: {
        childImageSharp: { fluid: DedicSoftBlog3 },
      },
      softProdDevBlog1: {
        childImageSharp: { fluid: softProdDevBlog1 },
      },
      softProdDevBlog2: {
        childImageSharp: { fluid: softProdDevBlog2 },
      },
      softProdDevBlog3: {
        childImageSharp: { fluid: softProdDevBlog3 },
      },
      apiIntegBlog1: {
        childImageSharp: { fluid: apiIntegBlog1 },
      },
      apiIntegBlog2: {
        childImageSharp: { fluid: apiIntegBlog2 },
      },
      apiIntegBlog3: {
        childImageSharp: { fluid: apiIntegBlog3 },
      },
      appDevServiceBlog1: {
        childImageSharp: { fluid: appDevServiceBlog1 },
      },
      appDevServiceBlog2: {
        childImageSharp: { fluid: appDevServiceBlog2 },
      },
      appDevServiceBlog3: {
        childImageSharp: { fluid: appDevServiceBlog3 },
      },
      hireDedicDevBlog1: {
        childImageSharp: { fluid: hireDedicDevBlog1 },
      },
      hireDedicDevBlog2: {
        childImageSharp: { fluid: hireDedicDevBlog2 },
      },
      hireDedicDevBlog3: {
        childImageSharp: { fluid: hireDedicDevBlog3 },
      },
    },
  } = props
  let iteams = [
    [customSofBlog1, customSofBlog2, customSofBlog3],
    [SoftTestingBlog1, SoftTestingBlog2, SoftTestingBlog3],
    [MobileAppBlog1, MobileAppBlog2, MobileAppBlog3],
    [webAppBlog1, webAppBlog2, webAppBlog3],
    [DedicSoftBlog1, DedicSoftBlog2, DedicSoftBlog3],
    [softProdDevBlog1, softProdDevBlog2, softProdDevBlog3],
    [apiIntegBlog1, apiIntegBlog2, apiIntegBlog3],
    [appDevServiceBlog1, appDevServiceBlog2, appDevServiceBlog3],
    [hireDedicDevBlog1, hireDedicDevBlog2, hireDedicDevBlog3],
  ]

  useDraggable('.blog-listing')

  const scrollClick = (e, id) => {
    e.preventDefault()

    let header = document.querySelector('header')
    let select = document.querySelector('#servicemenu')
    let element
    if (id !== undefined) {
      element = document.getElementById(id)
    } else {
      element = document.getElementById(e.target.value.slice(1))
    }
    window.scrollTo({
      behavior: 'smooth',
      top:
        getElementOffset(element).top -
        header.offsetHeight -
        select.offsetHeight,
    })
  }

  return (
    <ServicesScrollSecStyle>
      <div className="container">
        <div className="sticky-sidebar-wrapper">
          <div className="service-sticky-sidebar">
            <div className="sticky-sidebar-bg" />
            <div className="sticky-sidebar">
              <h4>{serviceScrollSecProps.sidebarHeading}</h4>
              <select
                name="service"
                id="servicemenu"
                onChange={e => scrollClick(e)}
              >
                {serviceScrollSecProps.serviceListProps.map(
                  (serviceListProp, i) => {
                    return (
                      <option key={i} value={`#${i}`}>
                        {`${i + 1} ${serviceListProp.heading}`}
                      </option>
                    )
                  }
                )}
              </select>
              <ul>
                {serviceScrollSecProps.serviceListProps.map(
                  (serviceListProp, i) => {
                    return (
                      <li key={i}>
                        <a href={`#${i}`} onClick={e => scrollClick(e, i)}>
                          <span className="count">{i + 1}</span>
                          {serviceListProp.heading}
                        </a>
                      </li>
                    )
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="service-right-wrapper">
          <div className="service-right-section">
            {serviceScrollSecProps.serviceListProps.map(
              (serviceListProp, i) => {
                return (
                  <div
                    key={i}
                    id={i}
                    className={`service-content-block ${serviceListProp.className}`}
                  >
                    <div className="service-content-block-bg" />
                    <div className="content-wrapper">
                      <h3>
                        <Link to={serviceListProp.ServiceLink}>
                          {serviceListProp.heading}
                        </Link>
                      </h3>
                      <p>{serviceListProp.mainPara}</p>
                      <div className="service-sub-content-block">
                        <h4>{serviceListProp.subheading}</h4>
                        <p>{serviceListProp.subpara}</p>
                        <ul>
                          {serviceListProp.listItem.map((listProp, i) => {
                            return (
                              <li key={i}>
                                <p>
                                  <a
                                    href={listProp.link}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                  >
                                    {listProp.title}
                                  </a>
                                  {listProp.para}
                                </p>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="blog-listing-wrapper">
                      <h4>{serviceListProp.blogTitle}</h4>
                      <div className="blog-listing">
                        {serviceListProp.blogListProps.map(
                          (blogListProp, j) => {
                            return (
                              <SingleBlogCard
                                key={j}
                                fluid={iteams[i][j]}
                                {...blogListProp}
                              />
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </ServicesScrollSecStyle>
  )
}

export default ServicesScrollSec
