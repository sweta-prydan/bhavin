import { keyframes, createGlobalStyle } from 'styled-components'
import {
  bodyFont,
  primaryColor,
  headingFont,
  themeColor,
  md,
  sm,
  white,
  lg,
  xl,
  sh,
} from '../../config/variables'
import { images } from '../../config/images'


/*---------Back-patern animation--------*/
const slide = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 400px 0;
  }
`
const slideInUp = keyframes`
  from {
    transform: translate3d(0, 25px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const GlobalStyles = createGlobalStyle` 
  /*----------Default-CSS--------------*/
  body {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    font-family: ${bodyFont};
    color: ${primaryColor};
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  body.over-hidden{
    overflow: hidden;
  }

  body.current-openings {
    #chat-widget-container, .livechat_button {
      display: none !important;  
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:after, *:before{
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${headingFont};
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 48px;
    line-height: 57px;
    letter-spacing: -0.52px;
    ${sh(`
      font-size: 42px;
      line-height: 51px;
      margin-bottom: 18px;
		`)}
    ${md(`
      font-size: 42px;
      line-height: 50px;
      `)}
    ${sm(`
      font-size: 36px;
      line-height: 42px;
      `)}
    br{
      ${md(`
        display: none;
      `)}
    }
  }

  .services-page{
    h1 {
      font-size: 45px;
      line-height: 54px;
      ${sh(`
        font-size: 42px;
        line-height: 51px;
      `)}
      ${md(`
        font-size: 40px;
        line-height: 49px;
        `)}
      ${sm(`
        font-size: 36px;
        line-height: 42px;
      `)}
    }
    .banner{
      .banner-content{
        p{
          font-size: 23px;
          line-height: 32px;
          ${sh(`
            font-size: 21px;
            line-height: 30px;
          `)}
          ${md(`
            display: none;
          `)}
        }
      }
    }
  }

  h2 {
    font-size: 44px;
    line-height: 53px;
    letter-spacing: -0.48px;
    ${sh(`
      font-size: 38px;
      line-height: 47px;
      margin-bottom: 18px;
		`)}
    ${md(`
      font-size: 42px;
      line-height: 50px;
      `)}
    ${sm(`
      font-size: 36px;
      line-height: 42px;
      `)}
    br{
      ${md(`
        display: none;
      `)}
    }
  }

  h3 {
    font-size: 44px;
    line-height: 53px;
    letter-spacing: -0.48px;
    ${sh(`
      font-size: 38px;
      line-height: 47px;
      margin-bottom: 18px;
		`)}
    ${md(`
      font-size: 42px;
      line-height: 50px;
      `)}
    ${sm(`
      font-size: 36px;
      line-height: 42px;
      `)}
    br{
      ${md(`
        display: none;
      `)}
    }
  }

  h4 {
    font-size: 30px;
    line-height: 36px;
  }

  h5 {
    font-size: 24px;
    line-height: 30px;
  }

  h6 {
    font-size: 20px;
    line-height: 26px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 40px;
    ${sh(`
      max-width: 1100px;
      padding: 0 36px;
    `)}
    ${md(`
      padding: 0 30px;
      `)}
    ${sm(`
      padding: 0 20px;
      `)}
  }

  .content-area {
    position: relative;
    z-index: 99;
    background: ${white};
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 970px;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0;
      transition: all 0.3s ease;
    }
    &.home{
      &:after {
        background-image: linear-gradient(to top,#fff,#f2f4f9);
        opacity: 1;
      }
    }
    &.custom-software-development{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #f9f4ff);
        opacity: 1;
      }
    }
    &.software-testing{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #fff5fa);
        opacity: 1;
      }
    }
    &.enterprise-mob-dev{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #f4f6ff);
        opacity: 1;
      }
    }
    &.web-app-dev{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #f4faff);
        opacity: 1;
      }
    }
    &.api-integration-dev{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #f9fffe);
        opacity: 1;
      }
    }
    &.hire-dedicated-dev{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #deefef);
        opacity: 1;
      }
    }
    &.application-dev{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #fff7f4);
        opacity: 1;
      }
    }
    &.dedicated-dev-team{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #f8f4ff);
        opacity: 1;
      }
    }
    &.product-dev-service{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #f4fbff);
        opacity: 1;
      }
    }
    &.contact-page{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #ecf5ff);
        opacity: 1;
      }
    }
    &.about-page{
      &:after {
        background-image: linear-gradient(to top, #ffffff, #dbdbdb);
        opacity: 1;
      }
    }
    &.how-it-works-page{
      &:after {
        background-image: linear-gradient(to top, #ffffff, rgba(236, 245, 255, 0.91));
        opacity: 1;
        height: 465px;
      }
    }
    &.casestudy-page{
      &:after {
        background-image: linear-gradient(to top, #fff, #ecf5ff);
        opacity: 1;
        height: 465px;
      }
    }
    &.not-found-page{
      &:after {
        background-image: linear-gradient(to top, #fff, #ecf5ff);
        opacity: 1;
        height: 465px;
      }
    }
  }

  .heading-wrapper {
    max-width: 610px;
    margin: 0 auto;
    text-align: center;
    ${sh(`
      max-width: 520px;
    `)}
    ${md(`
      max-width: 90%;
      `)}
  }

  .highlight-head {
    position: relative;
    background: linear-gradient(-225deg,transparent 5px, #ff017d 0) bottom left, linear-gradient(-45deg ,transparent 5px, #ff017d 0) bottom right;
    background-size: 51% 7px;
    background-repeat: no-repeat;
    ${sm(`
      background-size: 51% 5px;
    `)}
  }
  .color-through {
    color: ${themeColor};
    position: relative;
    background: url(${images.redShape});
    background-size: 0 15px;
    background-repeat: no-repeat;
    background-position: 0 13px;
    transition: all 0.5s ease;
    transition-delay: 0.5s;
    ${sh(`
      background-size: 100% 10px;
    `)}
    ${md(`
      background-size: 100% 10px;
    `)} 
    ${sm(`
      background-size: 100% 6px;
    `)}
    &.animated{
      background-size: 100% 15px;
    }
  }
  .back-animate {
    animation: ${slide} 70s linear infinite;
  }
  .slideInUp {
    animation-name: ${slideInUp};
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  header + div{
    transition: ease-out;
  }

  section{
    margin: 0 0 151px;
    ${sh(`
      margin: 0 0 135px;
    `)}
    ${xl(`
      margin: 0 0 100px;
    `)}
    ${lg(`
      margin: 0 0 100px;
    `)}
    ${md(`
      margin: 0 0 60px;
    `)}
  }

  .ScrollbarsCustom{
    position: relative !important;
    .ScrollbarsCustom-Wrapper{
      position: relative !important;
      .ScrollbarsCustom-Scroller{
        position: relative !important;
        .ScrollbarsCustom-Content{
          display: block
        }
      }
    }
    .ScrollbarsCustom-TrackX{
      width: 240px !important
    }
  }
  /*-------------Case Study global css---------------*/
  .case-studie-pages{
    .banner-part{
      h1 {
        padding-top: 43px;
        position: relative;
        font-size: 70px;
        line-height: 65px;
        margin-bottom: 35px;
        letter-spacing: -0.76px;
        &:before {
          content: '';
          width: 95px;
          height: 3px;
          background: ${primaryColor};
          position: absolute;
          top: 0;
          left: 0;
          ${xl(`
            width: 55px;
          `)}
          ${lg(`
            width: 70px;
          `)}
        }
        ${xl(`
          font-size: 46px;
          line-height: 55px;
          margin-bottom: 33px;
        `)}
        ${lg(`
            font-size: 46px;
            line-height: 55px;
            margin-bottom: 30px;
        `)}
        ${md(`
            font-size: 44px;
            line-height: 52px;
            margin-bottom: 25px;
        `)}
        ${sm(`
            font-size: 38px;
            line-height: 44px;
            margin-bottom: 20px;
        `)}
      }
      p {
        font-size: 30px;
        line-height: 38px;
        font-family: ${headingFont};
        ${xl(`
          font-size: 28px;
          line-height: 33px;
        `)}
        ${lg(`
          font-size: 26px;
          line-height: 31px;
        `)}
        ${md(`
          font-size: 24px;
          line-height: 29px;
        `)}
      }
    }
    h2 {
      font-size: 50px;
      line-height: 60px;
      letter-spacing: -0.54px;
      margin-bottom: 38px;
      ${xl(`
          font-size: 44px;
          line-height: 53px;
          margin-bottom: 33px;
      `)}
      ${lg(`
          font-size: 44px;
          line-height: 53px;
          margin-bottom: 30px;
      `)}
      ${md(`
          font-size: 42px;
          line-height: 50px;
          margin-bottom: 25px;
      `)}
      ${sm(`
          font-size: 36px;
          line-height: 42px;
          margin-bottom: 20px;
      `)}
    }
    h3 {
      font-size: 30px;
      line-height: 40px;
      letter-spacing: -0.5px;
      ${md(`
        font-size: 25px;
        line-height: 32px;
      `)}
      ${sm(`
        font-size: 22px;
        line-height: 30px;
      `)}
    }
    p {
      font-size: 22px;
      line-height: 32px;
      letter-spacing: -0.15px;
      ${sh(`
        font-size: 20px;
        line-height: 30px;
      `)}
      ${md(`
        font-size: 20px;
        line-height: 30px;
      `)}
      ${sm(`
          font-size: 18px;
          line-height: 28px;
      `)}
    }
    figure {
      margin: 74px 0 42px;
      width: 100%;
      .img-caption {
        margin-top: 32px;
        font-size: 16px;
        line-height: 22px;
        color: #171c3f;
        display: block;
        text-align: center;
      ${lg(`
          margin-top: 27px;
      `)}
      ${md(`
          margin-top: 15px;
          font-size: 14px;
          line-height: 20px;
      `)}
      }
      ${lg(`
        margin: 50px 0 40px;
      `)}
      ${md(`
        margin: 30px 0 20px;
      `)}
    }
  }
  /*-------------End Case Study global css---------------*/  
  .ril-image-current.ril__image{
    position: relative;
    width: 100%;
    height: 100%;
    ${md(`
      overflow: hidden;
      padding-top: 54.25%;
      position: relative;
      top: 50%;
      transform: translateY(-50%) !important;
      width: 100%;
      height: auto;
    `)}
    iframe {
      width: 100%;
      height: 100%;
      ${md(`
        border: 0;
        height: 100%;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
      `)}
    }
  }  



  /***** Live Chat Button scss Start *****/
  .livechat_button {
    position: fixed;
    right: 65px;
    bottom: 16px;
    z-index: 9999999;
    a {
      font-size: 0px;
    display: block;
    line-height: 1;
      img {
        height:58px;
      }
    }
  }
  /***** Live Chat Button scss End  *****/
`
