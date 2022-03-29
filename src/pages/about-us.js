import React, { memo, useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/Seo'
import { AboutProps } from '../components/Props/about'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import AboutBanner from '../components/AboutBanner/AboutBanner'
import { images } from '../config/images'
 
import { useAnimationClass } from '../components/hooks/useAnimationClass'

export const AboutPage = styled.div``

const DDT = memo(props => {
  const { data } = props
  const freshteams = useRef()
  const { location } = props
  useAnimationClass()


  return (
    <Layout mainClass="about-page" location={location} 
    data={{
      img: images.contactAmit,
      img2x: images.contactAmit2x,
      name: 'Amit Kumar Trivedi',
      description:
        'Building great software products, Engineer at heart and handson React JS, React Native Developer',
    }}
    
    >
      <SEO
        title="About Us"
        keywords={[`Prydan Software`]}
        description="Tech company on a mission to help companies extend their tech capacity. We help you decide the right architecture and oversee the successful delivery of your software projects."
        links={[
          {
            href: 'https://www.prydansoftware.com/about-us/',
            rel: 'canonical',
          },
        ]}
        meta={[
          {
            property: 'og:url',
            content: 'https://www.prydansoftware.com/about-us/',
          },
           
        ]}
      />
      <AboutPage>
        <AboutBanner
          aboutBannerData={AboutProps}
          {...props}
          showImages={true}
        />
       
        
      </AboutPage>
    </Layout>
  )
})

export default DDT

export const pageQuery = graphql`{
  bannerImage: file(relativePath: {regex: "../about-us-banner.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 848, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`
