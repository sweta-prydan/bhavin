import React, { Component } from 'react'
import { SingleBlogCardStyle } from './SingleBlogCard.styles'
import Image from '../ImgOptimized'

class SingleBlogCard extends Component {
  render() {
    return (
      <SingleBlogCardStyle className="single-blog-card">
        <a href={this.props.blogLink}>
          <figure>
            <Image
              fluid={this.props.fluid}
              lazyload={{
                enabled: true,
                once: true,
                offset: 1000,
                heigth: 210,
              }}
            />
          </figure>
          <div className="content-part">
            <h4>{this.props.featurecardTitle}</h4>
            <span className="line" />
            <div className="btn-readmore" to="/">
              Read More
            </div>
          </div>
        </a>
      </SingleBlogCardStyle>
    )
  }
}

export default SingleBlogCard
