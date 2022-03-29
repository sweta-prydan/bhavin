import React, { Component } from 'react'
import { FaqSectionStyle } from './FaqSection.styles'
import Button from '../Button/Button'
import { Accordion, AccordionItem } from '../Accordion'

class FaqSection extends Component {
  componentDidMount() {
    let parentRef = document.getElementsByClassName('accordion-item')
    let titleRef = document.getElementsByClassName('accordion-item').childNodes
    let contentRef = document.getElementsByClassName('panel')

    for (let i = 0; i < parentRef.length; i++) {
      console.log('titleRef', titleRef)
      parentRef[i].children[0].setAttribute('itemprop', 'name')
      parentRef[i].setAttribute('itemprop', 'mainEntity')
      parentRef[i].setAttribute('itemtype', 'https://schema.org/Question')
      parentRef[i].setAttribute('itemscope', '')
      contentRef[i].setAttribute('itemprop', 'acceptedAnswer')
      contentRef[i].setAttribute('itemtype', 'https://schema.org/Answer')
      contentRef[i].setAttribute('itemscope', '')
    }
  }

  render() {
    const { faqSectionProps } = this.props.faqSectiondata
    return (
      <FaqSectionStyle className="faq-section">
        <div className="container">
          <div className="heading-wrapper">
            <h2>{faqSectionProps.heading}</h2>
          </div>
          <div className="faq-listing-wrapper">
            <div className="contact-support-block">
              <div className="img-block">
                <img src={faqSectionProps.supportImg} alt="" />
              </div>
              <div className="content-blk">
                <h4>{faqSectionProps.contactHeading}</h4>
                <p>{faqSectionProps.contactPara}</p>
                <Button
                  buttonName={faqSectionProps.buttonName}
                  buttonLink={faqSectionProps.buttonLink}
                />
              </div>
            </div>
            <div className="faq-listing">
              <div
                className="faq-accoridon-wrapper"
                itemscope=""
                itemtype="https://schema.org/FAQPage"
              >
                <Accordion>
                  {faqSectionProps.faqProps.map((faqProps, i) => {
                    return (
                      <AccordionItem
                        itemscope
                        itemprop="mainEntity"
                        itemtype="https://schema.org/Question"
                        key={i}
                        title={faqProps.faqTitle}
                      >
                        <div className="content" itemprop="text">
                          {faqProps.faqPara}
                        </div>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </div>
              <div className="wrapper-shadow" />
            </div>

          </div>
        </div>
      </FaqSectionStyle>
    )
  }
}

export default FaqSection
