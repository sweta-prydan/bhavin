import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout'
import { GatsbyImage } from "gatsby-plugin-image";
import { md } from '../config/variables'
import { images } from '../config/images'
import { IndexStyle } from './Post.styles'

function  Post({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

    return <>
     <Layout mainClass="home" 
       data={{
        img: images.contactAmit,
        img2x: images.contactAmit2x,
        name: 'Amit Kumar Trivedi',
        description:
          'Building great software products, Engineer at heart and handson React JS, React Native Developer',
      }}
     >
       <div
        css={`
          .stats-section {
            ${md(`
            display: none;
          `)}
          }
        `}
      >
             <IndexStyle>
             <div className="container" >
             <div className="page">
             <div className='article-card' >
                <h1>{page.title}</h1>
                    {!!featuredImage?.node?.remoteFile?.childImageSharp && (
                  <GatsbyImage image={featuredImage.node.remoteFile.childImageSharp.gatsbyImageData} />
                  )
                  }
          <span dangerouslySetInnerHTML={{__html: page.content}} />
              </div>
              </div>
              </div>
              </IndexStyle>
      </div>
      
      </Layout>
    </>;
  
}

 

export default Post

export const postQuery = graphql`
query post($id: String!, $nextPage: String, $previousPage: String) {
  page: wpPost(id: { eq: $id }) {
    title
    content
    featuredImage {
      node {
        remoteFile {
          ...HeroImage
        }
      }
    }
  }

  nextPage: wpPost(id: { eq: $nextPage }) {
    title
    uri
  }

  previousPage: wpPost(id: { eq: $previousPage }) {
    title
    uri
  }
}
`