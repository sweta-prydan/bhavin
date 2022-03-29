import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { TechstacksStyle } from './Techstacks.styles'

class Techstacks extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.getWidth()
    }, 2000)
  }

  state = {
    tabIndex: 0,
    width: 0,
    left: 0,
  }

  getWidth = () => {
    const currentRef = this.props.techstacksdata.techstacksProps.tabContents[
      this.state.tabIndex
    ].tabName
    let width = this[currentRef] ? this[currentRef].offsetWidth : 0
    let left = this[currentRef] ? this[currentRef].offsetLeft : 0
    this.setState({ width, left })
  }

  tabItemClick = i => {
    this.setState({ tabIndex: i }, () => {
      this.getWidth()
    })
  }

  render() {
    const { tabIndex } = this.state
    const { techstacksProps } = this.props.techstacksdata
    return (
      <TechstacksStyle className="techstacks-section">
        <div className="container">
          <div className="heading-wrapper">
            <h3>{techstacksProps.heading}</h3>
          </div>
          <div className="tabbing-section">
            <ul className="tabs-nav">
              {techstacksProps.tabContents.map(({ tabName }, i) => {
                return (
                  <li
                    ref={elem => (this[tabName] = elem)}
                    key={i}
                    onClick={() => this.tabItemClick(i)}
                    className={`tab-link ${tabIndex === i ? 'active' : ''}`}
                  >
                    {tabName}
                  </li>
                )
              })}
              <hr
                className="tab-line"
                style={{ width: this.state.width, left: this.state.left }}
              />
            </ul>
            <div className="tabcontent-wrap">
              {techstacksProps.tabContents.map(({ tabimages }, i) => {
                return (
                  <div
                    className={`tabcontent ${tabIndex === i ? 'active' : ''}`}
                    key={i}
                  >
                    {tabIndex === i &&
                      tabimages.map(({ alt, ...imageProps }, i) => {
                        return (
                          <div
                            key={`${i}${i}`}
                            className="tabcontent-blk"
                            title={imageProps.alt}
                          >
                            <LazyLoad height={50} once offset={2000}>
                              <img {...imageProps} alt={alt} />
                            </LazyLoad>
                          </div>
                        )
                      })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </TechstacksStyle>
    )
  }
}

export default Techstacks
