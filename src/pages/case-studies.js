import React, { memo } from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner/Banner'
import styled from 'styled-components'
import SEO from '../components/Seo'
import { CaseStudiesProps } from '../components/Props/case-studies'
import { graphql } from 'gatsby'
import CaseStudyList from '../components/CaseStudyList/CaseStudyList'
import { images } from '../config/images'

export const CaseStudyPage = styled.div`
  .banner {
    .banner-content {
      max-width: 610px;
    }
    .banner-img {
      display: none;
    }
  }
`

const CustomSoftwareDev = memo(props => {
  const { location } = props
  return (
    <Layout mainClass="casestudy-page" 
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
        title="Case Study"
        description="Explore our latest custom software and mobile app development projects. We are on a mission to build digital products our customers have always envisioned."
        keywords={[`prydan`]}
        links={[
          {
            href: 'https://www.prydansoftware.com/case-studies/',
            rel: 'canonical',
          },
        ]}
        meta={[
          {
            property: 'og:url',
            content: 'https://www.prydansoftware.com/case-studies/',
          },
          {
            property: 'og:image',
            content: 'https://www.prydansoftware.com/banner.png',
          },
        ]}
      />
      <CaseStudyPage>
        <Banner
          bannerData={CaseStudiesProps}
          showBannerImage={false}
          {...props}
        />
        <CaseStudyList caseStudyListdata={CaseStudiesProps} {...props} />
      </CaseStudyPage>
    </Layout>
  )
})

export default CustomSoftwareDev

export const pageQuery = graphql`{
  bannerImage: file(relativePath: {regex: "../about-us-banner.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  case1: file(relativePath: {regex: "../purplenotes-case-banner@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 544, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`
