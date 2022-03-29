import React, { Component } from 'react'
import Button from '../Button/Button'
import { ContactInfoCardStyle } from './ContactInfoCard.styles'

class ContactInfoCard extends Component {
  constructor() {
    super()
    this.state = {
      isHovered: false,
      isbtnHovered: false,
    }
  }

  handleHover = () => {
    const { isHovered } = this.state
    this.setState({
      isHovered: !isHovered,
    })
  }

  handlebtnHover = () => {
    const { isbtnHovered } = this.state
    this.setState({
      isbtnHovered: !isbtnHovered,
    })
  }

  render() {
    return (
      <ContactInfoCardStyle
        ref={myRef => (this.myRef = myRef)}
        className="contact-info-card"
        onMouseOver={() => this.handleHover()}
        onMouseOut={() => this.handleHover()}
      >
        <div className="container">
          <div className="content-part">
            <h4>{this.props.title}</h4>
            {this.props.para ? <p>{this.props.para}</p> : ''}
          </div>
          <div className="button-col">
            <div
              className={`right-arrow ${this.state.isHovered ? 'enter' : ''}`}
            />
            <div className="btn-col">
              <div
                className={`top-sign sign-blk ${this.state.isbtnHovered ? 'active' : ''
                  }`}
              />
              <Button
                onMouseOver={() => this.handlebtnHover()}
                onMouseOut={() => this.handlebtnHover()}
                buttonLink={this.props.buttonLink}
                buttonName={this.props.buttonName}
              />
              <div
                className={`bottom-sign sign-blk ${this.state.isbtnHovered ? 'active' : ''
                  }`}
              />
            </div>
          </div>
        </div>
      </ContactInfoCardStyle>
    )
  }
}

export default ContactInfoCard
