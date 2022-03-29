import React, { memo, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import Banner from '../../components/Banner/Banner'
import { DedicatedDevelopmentProps } from '../../components/Props/dedicated-development-team'
import styled from 'styled-components'
import SEO from '../../components/Seo'
import BuildApplication from '../../components/BuildApplication/BuildApplication'
/* import CaseStudySlider from 'components/CaseStudySlider/CaseStudySlider' */
import { graphql, navigate } from 'gatsby'
import { images } from '../../config/images'
import CustomDevelopment from '../../components/CustomDevelopment/CustomDevelopment'
import WhyShouldHireUs from '../../components/WhyShouldHireUs/WhyShouldHireUs'
import FaqSection from '../../components/FaqSection/FaqSection'
/* import FeatureResources from 'components/FeatureResources/FeatureResources' */
import { useAnimationClass } from '../../components/hooks/useAnimationClass'
import { fetchItem, getViewerCountry } from '../../config/utils'

export const DedicatedDevelopmentPage = styled.div`
  .banner {
    .banner-content {
      max-width: 830px;
      p {
        max-width: 780px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
    .banner-img {
      display: block;
    }
  }
  .feature-resource-section {
    background: linear-gradient(to top, #eef2ff, #ffffff);
    .contact-info-card {
      display: none;
    }
  }
  .ppcbenefit-section {
    .heading-wrapper {
      max-width: 740px;
    }
  }
`

const DDT = memo(props => {
  useEffect(() => { /*
    if (fetchItem('country') === 'IN') {
      navigate('/')
    }
    if (fetchItem('country') === null) {
      getViewerCountry().then(res => {
        if (res === 'IN') navigate('/')
      })
    } */
  }, [])

  const { data } = props
  const { location } = props
  // const { showContent } = useLazyLoad('.lazy-load-div')
  useAnimationClass({ showContent: true })

  return (
    <Layout
      mainClass="dedicated-dev-team services-page"
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
        title="Dedicated Software Development Team"
        description="Hire dedicated team of expert developers, engineers, coders, designer from Prydan Software which deliver results."
        keywords={[`Prydan Software`]}
        links={[
          {
            href: 'https://www.prydansoftware.com/hire/dedicated-development-team/',
            rel: 'canonical',
          },
        ]}
        meta={[
          {
            property: 'og:url',
            content: 'https://www.prydansoftware.com/hire/dedicated-development-team/',
          },
          {
            property: 'og:image',
            content: data && data.bannerImage.childImageSharp.gatsbyImageData.src,
          },
        ]}
      />
      <DedicatedDevelopmentPage>
        <Banner
          bannerData={DedicatedDevelopmentProps}
          showBannerImage={true}
          {...props}
        />
        <div className="lazy-load-div">
        <BuildApplication buildApplicationData={DedicatedDevelopmentProps} />
        <WhyShouldHireUs WhyShouldHireUsData={DedicatedDevelopmentProps} />
        </div>
  
        <FaqSection faqSectiondata={DedicatedDevelopmentProps} />
   
      </DedicatedDevelopmentPage>
    </Layout>
  );
})

export default DDT

export const query = graphql`{
  bannerImage: file(relativePath: {regex: "../about-us-banner.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`
