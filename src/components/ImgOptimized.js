import React from 'react'
import LazyLoad from 'react-lazyload'
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ lazyload = {}, ...rest }) => {
  let normalizedProps = { ...rest }
  if (rest.fluid && rest.fluid.presentationWidth) {
    normalizedProps = {
      ...rest,
      style: {
        ...(rest.style || {}),
        maxWidth: rest.fluid.presentationWidth,
        margin: '0 auto',
      },
      fadeIn: true,
      loading: 'eager',
    }
  }

  return lazyload.enabled ? (
    <LazyLoad {...lazyload}>
      <GatsbyImage {...normalizedProps} />
    </LazyLoad>
  ) : (
    <GatsbyImage {...normalizedProps} />
  );
}

export default Image
