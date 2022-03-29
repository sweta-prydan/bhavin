import React, { memo } from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import CustomDevelopment from '../../components/CustomDevelopment/CustomDevelopment'
import styled from 'styled-components'

import BuildApplication from '../../components/BuildApplication/BuildApplication'
import SEO from '../../components/Seo'
import { CustomSoftwareDevProps } from '../../components/Props/custom-software-development-services'
import { md } from '../../config/variables'
import { graphql } from 'gatsby'
import { images } from '../../config/images'






import FaqSection from '../../components/FaqSection/FaqSection'

import { useLazyLoad } from '../../components/hooks/useLazyload'
import { useAnimationClass } from '../../components/hooks/useAnimationClass'

export const CustomSoftwareDevPage = styled.div`
  .banner {
    .banner-content {
      max-width: 880px;
      p {
        max-width: 635px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
  }
  .feature-resource-section {
    background-image: linear-gradient(to top, #eef2ff, #fff);
    .contact-info-card {
      display: none;
    }
  }
  .developsoft-section {
    ${md(`
      display: none;
    `)}
  }
  .industries-service {
    ${md(`
      display: none;
    `)}
  }
  .getintouch-section {
    .awards-recognition-blk {
      ${md(`
        display: none;
      `)}
    }
  }
`

const CustomSoftwareDev = memo(props => {
  const { data } = props
  const { location } = props
  // const { showContent } = useLazyLoad('.lazy-load-div')
  useAnimationClass({ showContent: true })

  return (
    <Layout
      mainClass="custom-software-development services-page"
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
        title="Custom Software Development Services "
        description="Leverage full potential of software technologies with our custom development services. Get exactly what you want and what works for your business. "
        keywords={[`Prydan Software`]}
        links={[
          {
            href:
              'https://www.prydansoftware.com/services/custom-software-development/',
            rel: 'canonical',
          },
        ]}
        meta={[
          {
            property: 'og:url',
            content:
              'https://www.prydansoftware.com/services/custom-software-development/',
          },
          {
            property: 'og:image',
            content: data && data.bannerImage.childImageSharp.gatsbyImageData.src,
          },
        ]}
      />
      <CustomSoftwareDevPage>
        <Banner
          bannerData={CustomSoftwareDevProps}
          showBannerImage={true}
          {...props}
        />
        <div className="lazy-load-div">
          <BuildApplication buildApplicationData={CustomSoftwareDevProps} />
          <CustomDevelopment customServicedata={CustomSoftwareDevProps} />
        </div>
       
        <FaqSection faqSectiondata={CustomSoftwareDevProps} />

        
      </CustomSoftwareDevPage>
    </Layout>
  );
})

export default CustomSoftwareDev

export const pageQuery = graphql`{
  bannerImage: file(
    relativePath: {regex: "/Custom-Software-Development-Banner.png/"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 99, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`
