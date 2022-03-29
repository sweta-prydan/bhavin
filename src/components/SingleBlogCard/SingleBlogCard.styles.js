import styled from 'styled-components'
import {
  lg,
  sm,
  md,
  themeColor,
  device,
  primaryColor,
  sh,
} from '../../config/variables'

export const SingleBlogCardStyle = styled.div`
  width: 360px;
  min-width: 360px;
  background: #fff;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.05),
    0 3px 5px -1px rgba(0, 0, 0, 0.07);
  transition: all 0.4s ease;
  ${sh(`
    width: 324px;
    min-width: 324px;
  `)}
  ${lg(`
    width: 300px;
    min-width: 300px;
    `)}
  ${sm(`
    width: 235px;
    min-width: 235px;
    `)}
  &:hover {
    box-shadow: 4px 4px 26px 5px rgba(0, 0, 0, 0.05),
      6px 8px 26px 0px rgba(0, 0, 0, 0.02);
    transform: translate(0px, -10px);
    ${device(`
        box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.05), 0 3px 5px -1px rgba(0, 0, 0, 0.07);
        transform: initial;
    `)}
    .content-part {
      h4 {
        color: ${themeColor};
      }
    }
  }
  figure {
    width: 100%;
    display: block;
    img {
      display: block;
    }
  }
  .content-part {
    padding: 29px 30px 26px;
    ${lg(`
      padding: 24px 26px;
      `)}
    ${md(`
      padding: 20px 18px;
      `)}
    h4 {
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.22px;
      font-weight: 500;
      margin-bottom: 17px;
      transition: all 0.3s ease;
      color: ${primaryColor};
      ${sh(`
        font-size: 18px;
        line-height: 26px;
      `)}
      ${md(`
        font-size: 18px;
        `)}
      ${sm(`
        font-size: 18px;
        line-height: 26px;
        `)}
    }
    .line {
      width: 60px;
      height: 3px;
      display: block;
      background: ${themeColor};
      border-radius: 1px;
      margin-bottom: 17px;
      ${sm(`
        height: 2px;
        width: 40px;
        `)}
    }
    .btn-readmore {
      font-size: 18px;
      color: ${themeColor};
      line-height: 24px;
      font-weight: 500;
      display: inline-block;
      position: relative;
      ${sh(`
        font-size: 17px;
        line-height: 23px;
      `)}
      ${md(`
        font-size: 16px;
        `)}
      ${sm(`
        font-size: 14px;
        `)}
    }
  }
`
