import React, { Component } from 'react'

import { VideoplayerStyles } from './Videoplayer.styles'

class Videoplayer extends Component {
  constructor(props) {
    super(props)
    this.state = { initial: true }
  }

  videoState() {
    // Pause as well
    this.setState({
      initial: !this.state.initial,
    })
    this.state.initial ? this.refs.vidRef.pause() : this.refs.vidRef.play()
  }
  render() {
    return (
      <VideoplayerStyles className="videoPlayer">
        <video ref="vidRef" muted loop playsInline autoPlay>
          <source src={this.props.videoURL} type="video/mp4" />
        </video>
        <button
          onClick={this.videoState.bind(this)}
          className={`PlayButton ${this.state.initial ? 'Pause' : 'Play'}`}
        >
          <span className="play-pause__playhead"></span>
          <span className="play-pause__pausehead">
            <samp className="pause_icon"></samp>
            <samp className="pause_icon"></samp>
          </span>
        </button>
      </VideoplayerStyles>
    )
  }
}
export default Videoplayer
