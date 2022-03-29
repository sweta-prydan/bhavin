import styled from 'styled-components'
import { headingFont, themeColor } from '../../config/variables'
import { images } from '../../config/images'

export const CaseStudyListStyle = styled.section`
  position: relative;
  z-index: 1;
  .filter-row {
    display: block;
    margin-bottom: 55px;
    .filter-box {
      max-width: 475px;
      width: 100%;
      margin: 0 auto;
      position: relative;
      .title {
        font-size: 14px;
        font-family: ${headingFont};
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 1.4px;
        padding: 0 19px;
        background: #f9fcff;
        z-index: 1;
        position: absolute;
        top: -9px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        text-transform: uppercase;
      }
      .filtercase {
        width: 100%;
        border: 1px solid ${themeColor};
        padding: 13px 40px 14px 20px;
        font-size: 20px;
        line-height: 27px;
        -webkit-appearance: none;
        background: transparent url(${images.faqDownArrow}) no-repeat 96% 50%;
        border-radius: 4px;
      }
    }
  }
`
