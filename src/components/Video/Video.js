import React, { memo, useRef } from 'react'
import styled from 'styled-components'
import { md } from '../../config/variables'

const VideoStyles = styled.iframe`
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

const Video = memo(({ videoUrl }) => {
  const playerRef = useRef()

  // useEffect(() => {
  //   if (playerRef.current) {
  //     playerRef.current.requestFullscreen()
  //   }
  // }, [playerRef])

  return (
    <VideoStyles
      ref={playerRef}
      width="700"
      height="393"
      src={`${videoUrl}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></VideoStyles>
  )
})

export default Video
