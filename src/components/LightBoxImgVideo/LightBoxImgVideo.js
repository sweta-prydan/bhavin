import React, { Component } from 'react'
import 'lightbox-react/style.css'
import VimeoVideo from '../Video/VimeoVideo'
import Video from '../Video/Video'
import Lightbox from 'lightbox-react'

class LightBoxImgVideo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
      lightboxImgVids: props.lightboxImgVid,
    }
  }

  render() {
    const { photoIndex, isOpen, lightboxImgVids } = this.state
    return (
      <div>
        <button
          className={this.props.lightButtonClassName}
          type="button"
          onClick={() => this.setState({ isOpen: true })}
        >
          {this.props.buttonText}
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={
              this.props.vimeo ? (
                <VimeoVideo videoUrl={lightboxImgVids[photoIndex]} />
              ) : (
                <Video videoUrl={lightboxImgVids[photoIndex]} />
              )
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + lightboxImgVids.length - 1) %
                  lightboxImgVids.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % lightboxImgVids.length,
              })
            }
            enableZoom={false}
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          />
        )}
      </div>
    )
  }
}

export default LightBoxImgVideo
