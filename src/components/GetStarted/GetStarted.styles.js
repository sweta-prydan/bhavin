import styled from 'styled-components'
import { themeColor, headingFont, white } from '../../config/variables'

export const GetStartedStyle = styled.section`
  background: #ff017d;
  padding: 20px 0;
  .getstarted-wrapper {
    background: #f2edff;
    padding: 46px 0;
    text-align: center;
    h3 {
      font-size: 42px;
      line-height: 48px;
      letter-spacing: -0.46px;
      margin-bottom: 23px;
    }
    p {
      max-width: 716px;
      margin: 0 auto;
      font-size: 22px;
      line-height: 32px;
      margin-bottom: 41px;
    }
    .button {
      font-size: 14px;
      text-transform: uppercase;
      color: #fff;
      letter-spacing: 1.4px;
      background: ${themeColor};
      font-family: ${headingFont};
      font-weight: 500;
      line-height: 24px;
      padding: 10px 30px 11px;
      &:after,
      &:before {
        background: ${white};
      }
      &:hover {
        color: ${themeColor};
      }
    }
  }
`
