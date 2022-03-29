import React, { Component } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/Layout/Layout'
import { images } from '../config/images'

import { md } from '../config/variables'
import { IndexStyle } from './Post.styles'


function Page({ data }) {

  const { page } = data
  const { title, content, featuredImage } = page


  return <>
    <Layout mainClass="home"

      data={{
        img: images.contactAmit,
        img2x: images.contactAmit2x,
        name: 'Amit Kumar Trivedi',
        description:
          'Building great software products, Engineer at heart and hands on React JS, React Native Developer',
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
            <h1>{title}</h1>
            <div className="page">
              <div>
                {!!featuredImage?.node?.remoteFile?.childImageSharp && (
                  <GatsbyImage image={featuredImage.node.remoteFile.childImageSharp.gatsbyImageData} />
                )
                }
              </div>
              <span dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </IndexStyle>
      </div>

    </Layout>
  </>;
}


export default Page

export const pageQuery = graphql`
query page($id: String!, $nextPage: String, $previousPage: String) {
  page: wpPage(id: { eq: $id }) {
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