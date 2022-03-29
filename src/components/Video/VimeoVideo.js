import React, { memo, useRef } from 'react'
import styled from 'styled-components'
import { md } from '../../config/variables'

const VimeoVideoStyles = styled.iframe`
  max-width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  border: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  width: 560px;
  height: 315px;
  ${md(`
    width: 70%;
    height: auto;
    `)};
`

const VimeoVideo = memo(({ videoUrl, className = '' }) => {
  const playerRef = useRef()

  return (
    <VimeoVideoStyles
      ref={playerRef}
      width="700"
      className={className}
      height="393"
      src={`${videoUrl}?autoplay=1&loop=1&autopause=0`}
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></VimeoVideoStyles>
  )
})

export default VimeoVideo
