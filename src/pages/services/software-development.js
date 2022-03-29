import React, { memo } from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import { SoftwareDevServicesProps } from '../../components/Props/software-development-services'
import styled from 'styled-components'
import SEO from '../../components/Seo'
import { graphql } from 'gatsby'
import OurServicesSec from '../../components/OurServicesSec/OurServicesSec'
import ServicesScrollSec from '../../components/ServicesScrollSec/ServicesScrollSec'
import { md } from '../../config/variables'
import { images } from '../../config/images'

import GetStarted from '../../components/GetStarted/GetStarted'

import { useLazyLoad } from '../../components/Hooks/useLazyload'
import { useAnimationClass } from '../../components/Hooks/useAnimationClass'

export const SoftwareDevServicesPage = styled.div`
  .banner {
    .banner-content {
      max-width: 620px;
      p {
        max-width: 620px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
    .banner-img {
      display: block;
    }
  }
  .container {
    .service-right-wrapper {
      .service-right-section {
        .service-content-block {
          .blog-listing-wrapper {
            .blog-listing {
              .single-blog-card {
                figure {
                  min-height: 177px;
                  ${md(`        
                    min-height: 151px;
                  `)}
                }
              }
            }
          }
        }
      }
    }
  }
  .feature-resource-section {
    background: linear-gradient(to top, #eef2ff, #ffffff);
    .contact-info-card {
      display: none;
    }
  }
`

const SDSH = memo(props => {
  const { data } = props
  const { location } = props
  const { showContent } = useLazyLoad('.lazy-load-div')
  useAnimationClass({ showContent })

  return (
    <Layout
      mainClass="software-dev-services services-page"
      location={location}
      data={{
        img: images.contactAmit,
        img2x: images.contactAmit2x,
        name: 'Amit Kumar Trivedi',
        description:
          'Building great software products, Engineer at heart and handson React JS, React Native Developer',
      }}
    >
      <SEO
        title="Software Development Services Company"
        description="Prydan Software proivdes worldclass software development service to the business worldwide.   "
        keywords={[`Prydan Software`]}
        links={[
          {
            href: 'https://www.prydansoftware.com/services/software-development/',
            rel: 'canonical',
          },
        ]}
        meta={[
          {
            property: 'og:url',
            content: 'https://www.prydansoftware.com/services/software-development/',
          },
          {
            property: 'og:image',
           /* content: data && data.bannerImage.childImageSharp.fluid.src,*/
          },
        ]}
      />
      <SoftwareDevServicesPage>
        <Banner
          bannerData={SoftwareDevServicesProps}
          showBannerImage={true}
          {...props}
        />
        <div className="lazy-load-div">
          <OurServicesSec ourServicedata={SoftwareDevServicesProps} />
         
        </div>
        {showContent && (
          <>
          
          <GetStarted getStarteddata={SoftwareDevServicesProps} />
          </>
        )}
      </SoftwareDevServicesPage>
    </Layout>
  )
})

export default SDSH

export const query = graphql`{
  bannerImage: file(
    relativePath: {regex: "../software-development-services.png/"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 848, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`
