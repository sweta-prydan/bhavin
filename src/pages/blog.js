import React, { Component } from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/Layout/Layout'
import { GatsbyImage } from "gatsby-plugin-image";
import { md } from '../config/variables'
import { IndexStyle } from '../templates/Post.styles'
import { normalizePath } from "../utils/get-url-path"
import { images } from '../config/images'

function  BlogPost({ data }) {
  const {  page } = data
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

               <h1>Blog </h1>
               <h3>Insights from our experience </h3>
             <div className="container" >
             <div className="page">
             {page.edges.map((post) => ( 
               <div className='article-card' >
                 <Link to={normalizePath(post.node.uri)}>
               <div key={post.node.uri} >          
               
                    
             <div >
           
                <h5>{post.node.title}</h5>
           
                {!!post.node.featuredImage?.node?.remoteFile?.childImageSharp && (
     <GatsbyImage
       image={post.node.featuredImage.node.remoteFile.childImageSharp.gatsbyImageData} />
     )
    }
                <span dangerouslySetInnerHTML={{__html: post.node.excerpt}} />
             
              </div>
              </div>
              </Link>
              </div>
                ) )
            }
      </div>
      </div>
      </IndexStyle>
      </div>
      
      </Layout>
    </>;
  
}

 

export default BlogPost

export const postQuery = graphql`
query blogpost  {
  page:  allWpPost {
    totalCount
    edges {
      node {
        id
        title
        excerpt
        uri
        featuredImage {
          node {
            remoteFile {
              ...HeroImage
            }
          }
        }
      }
    }
  }
  }

  

  
 
`