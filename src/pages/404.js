import React from 'react'
import { md } from '../config/variables'
import Layout from '../components/Layout/Layout'
import { IndexStyle } from '../templates/Post.styles'

export default () => (
    <Layout mainClass="home"  >
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
           <h1>Page not found </h1>
           </IndexStyle>   
        </div>
       </Layout>
)