import React, { memo } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/Layout'
import SEO from '../../components/Seo'
import { graphql } from 'gatsby'
import { useLazyLoad } from '../../components/hooks/useLazyload'
import { useAnimationClass } from '../../components/hooks/useAnimationClass'
import Casebanner from '../../components/Casebanner/Casebanner'
import { purplenotesProps } from '../../components/Props/purplenotes'
import Caseintroduction from '../../components/Caseintroduction/Caseintroduction'
import Fasterdevelopmentsec from '../../components/Fasterdevelopmentsec/Fasterdevelopmentsec'
import Caseresultsec from '../../components/Caseresultsec/Caseresultsec'
import Appplatformsec from '../../components/Appplatformsec/Appplatformsec'
import PurplenoteAppScreenSec from '../../components/PurplenoteAppScreenSec/PurplenoteAppScreenSec'
import Resultimgsection from '../../components/Resultimgsection/Resultimgsection'
import { xl, lg, md, xll } from '../../config/variables'
import Caseintegrate from '../../components/Caseintegrate/Caseintegrate'
import Reliabilityinstancessec from '../../components/Reliabilityinstancessec/Reliabilityinstancessec'
import Relatedcaselist from '../../components/Relatedcaselist/Relatedcaselist'
import Casecontactcardinfo from '../../components/Casecontactcardinfo/Casecontactcardinfo'
import { images } from '../../config/images'

export const FitcomStyles = styled.div`
  .casebanner {
    .container {
      .img-block {
        .banner-img {
          .banner-bg {
            background-color: #b7b1a5;
          }
        }
      }
    }
  }
  .Resultimgsection {
    margin-bottom:120px;
    overflow:hidden;
    ${xl(`
      margin-bottom:90px;
    `)}
    ${lg(`
       margin-bottom:60px;
    `)}
    ${md(`
        margin-bottom:40px;
    `)}
    .container {
      .content-blk{
        flex: 0 1 533px;
        ${xl(`
          flex: 1 1 auto;
        `)}
        ${lg(`
          flex: 1 1 auto;
        `)}
      }
      
    }
    .img-blk {
      bottom:0;
      top:0px;
      width:741px;
      margin:0 auto;
      display:flex;
      right:-10px;
      ${xll(`
          width:641px;
      `)}
      ${xl(`
          right:0px;
          width:100%;
      `)}
      ${lg(`
          right:0px;
          width:100%;
      `)}
      .imageWrap {
        flex: 0 0 812px;
        margin:auto;
        ${xll(`
            flex: 0 0 712px;
        `)}
        ${xl(`
          flex: 1 1 auto;
        `)}
        ${lg(`
          flex: 1 1 auto;
        `)}
      }
    }
  }
  .AppplatformsecStyles {
    margin-bottom:120px;
    ${xl(`
      margin-bottom:90px;
    `)}
    ${lg(`
       margin-bottom:60px;
    `)}
    ${md(`
        margin-bottom:40px;
    `)}
  }
`
const Fitcom = memo(props => {
  const { data } = props
  const { location } = props
  const { showContent } = useLazyLoad('.lazy-load-div')

   
   
  useAnimationClass({ showContent })
  console.log(purplenotesProps)

  return (
    <Layout mainClass="case-studie-pages" location={location}
    data={{
      img: images.contactAmit,
      img2x: images.contactAmit2x,
      name: 'Amit Kumar Trivedi',
      description:
        'Building great software products, Engineer at heart and handson React JS, React Native Developer',
    }}
    
    >
      <SEO
        title="Purple Notes"
        description="Prydan Software has made Purple Notes from Zero to Hero. Prydan Software has build complete brand idenityt for Purple Notes start from Logo, website, mobile app."
        keywords={[`Prydan Software`]}
        links={[
          {
            href: 'https://www.prydansoftware.com/case-studies/purplenotes/',
            rel: 'canonical',
          },
        ]}
        meta={[
          {
            property: 'og:url',
            content: 'https://www.prydansoftware.com/case-studies/purplenotes/',
          },
        
        ]}
      />
      <FitcomStyles>
        
        <Caseintroduction
          caseintrodata={purplenotesProps}
          {...props}
          showFullimages={false}
        />
        <div className="lazy-load-div">
          <Fasterdevelopmentsec
            FasterdevelopmentData={purplenotesProps.FasterdevelopmentData}
            {...props}
          />
          
        </div>
        {showContent && (
          <>
            <Appplatformsec AppplatformData={purplenotesProps} />
            
            
          
            
            
            
            <Casecontactcardinfo Casecontactcardinfodata={purplenotesProps} />
          </>
        )}
      </FitcomStyles>
    </Layout>
  )
})
export default Fitcom



export const pageQuery = graphql`{
  bannerImage: file(relativePath: {regex: "../purplenotes-case-banner@2x.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 570, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  microservicesArchitecture: file(
    relativePath: {regex: "../micro-architech-data@2x.png/"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 99, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  caseScreen1: file(relativePath: {regex: "../swifts1@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 309, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  caseScreen2: file(relativePath: {regex: "../swifts2@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 309, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  integrateImg: file(relativePath: {regex: "../testing-diagram@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 867, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  mixpanel: file(relativePath: {regex: "../reliability-instances-image@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 552, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  mixpanel2: file(relativePath: {regex: "../reliability-instances-image@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 552, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  mixpanel1: file(relativePath: {regex: "../reliability-vonage-image@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 552, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  singlecase1: file(relativePath: {regex: "../tryg-casestudies-thumb@2x.jpg/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 220, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  singlecase2: file(relativePath: {regex: "../decora-casestudies-thumb@2x.jpg/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 220, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  FitcomAppScreen1: file(relativePath: {regex: "../fitcom-app-screens1@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 246, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  FitcomAppScreen2: file(relativePath: {regex: "../fitcom-app-screens2@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 246, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  FitcomAppScreen3: file(relativePath: {regex: "../fitcom-app-screens3@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 246, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  FitcomAppScreen4: file(relativePath: {regex: "../fitcom-app-screens4@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 246, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  FitcomAppScreen5: file(relativePath: {regex: "../fitcom-app-screens5@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 246, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  FitcomAppScreen6: file(relativePath: {regex: "../fitcom-app-screens6@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, width: 246, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  businessFullImage: file(relativePath: {regex: "/way-point-intro-img@2x.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 99, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`


 