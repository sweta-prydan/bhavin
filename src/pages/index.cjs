import React from 'react'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'
import fetch from 'node-fetch'
import {myPackage} from 'my-package'
import Banner from '../components/Banner/Banner'
import { DashboardProps } from '../components/Props/dashboard'
import { useLazyLoad } from '../components/hooks/useLazyload'
import Techstacks from '../components/TechStakes/Techstacks'
import { md } from '../config/variables'
import { images } from '../config/images'
import HomeService from '../components/HomeService/HomeService'
import CaseStudy from '../components/CaseStudy/CaseStudy'
import { useAnimationClass } from '../components/hooks/useAnimationClass'
import { ErrorBoundary } from '../components/ErrorBoundary'
import SEO from '../components/Seo'
import Homebanner from '../components/HomeBanner/homebanner'

const IndexPage = props => {
  const { location } = props
  const { showContent } = useLazyLoad('.lazy-load-div')
  useAnimationClass({ showContent })

  return (

    <ErrorBoundary>
      <Layout mainClass="home" location={location}
        data={{
          img: images.contactAmit,
          img2x: images.contactAmit2x,
          name: 'Amit Kumar Trivedi',
          description:
            'Building great software products, Engineer at heart and hands on React JS, React Native Developer',
        }}
      >
        <SEO
          title="Prydan Consultancy - Web and Mobile App Development Company"
          description="Prydan Consultancy is the technology solution company offering Wed and Mobile App Development services. "
          keywords={[`Prydan Consultancy`]}
          links={[
            {
              href: 'https://www.prydan.com/',
              rel: 'canonical',
            },
          ]}
          meta={[
            {
              property: 'og:locale',
              content: 'en_US',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:site_name',
              content: 'Prydan Consultancy',
            },
            {
              property: 'og:url',
              content: 'https://prydan.com',
            },
            {
              itemProp: 'name',
              content: 'Prydan Consultancy',
            },
            {
              property: 'og:image',
              content: 'https://www.PrydanSoftware.com/banner.png',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:site',
              content: '@prydan2',
            },
            {
              name: 'twitter:creator',
              content: '@prydan2',
            },
            {
              name: 'twitter:image',
              content: 'https://www.prydansoftware.com/banner.png',
            },
          ]}
        />
        <div
          css={`
          .stats-section {
            ${md(`
            display: none;
          `)}
          }
        `}
        >
          <Homebanner
            homebannerData={DashboardProps}
            {...props}
          />
          <banner
          // bannerData={DashboardProps}
          // showBannerImage={true}
          // {...props} 
          />
          <div className="lazy-load-div">
            <HomeService homeServiceData={DashboardProps} />

          </div>


          {showContent && (
            <>
              <CaseStudy caseStudydata={DashboardProps} {...props} />
              <Techstacks techstacksdata={DashboardProps} />
            </>
          )}

        </div>
      </Layout>
    </ErrorBoundary>





  )
}

export default IndexPage


export const pageQuery = graphql`
  query {
    bannerImage: file(relativePath: { regex: "../home-hero-banner@2x.png/" }) {
      childImageSharp {
        fluid(quality: 99, maxWidth: 1140) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
          presentationWidth
        }
      }
    }
    case1: file(relativePath: { regex: "../case-qwetu@544.png/" }) {
      childImageSharp {
        fluid(quality: 99, maxWidth: 544) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
          presentationWidth
        }
      }
    }
    case2: file(relativePath: { regex: "../case-purplenotes@544.png/" }) {
      childImageSharp {
        fluid(quality: 99, maxWidth: 544) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
          presentationWidth
        }
      }
    }
    case3: file(relativePath: { regex: "../case-hetero@544.png/" }) {
      childImageSharp {
        fluid(quality: 99, maxWidth: 544) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
          presentationWidth
        }
      }
    }
  }
`