import styled from 'styled-components'
import { images } from '../../config/images'
import {
  themeColor,
  primaryColor,
  bodyFont,
  xl,
  lg,
  md,
  sm,
} from '../../config/variables'

export const ServicesScrollSecStyle = styled.section`
  position: relative;
  overflow: visible;
  ${lg(`
    margin: 0px;
  `)}
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    padding: 0;
    ${lg(`
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
    `)}
    .sticky-sidebar-wrapper {
      position: sticky;
      top: 69px;
      margin-bottom: 40px;
      padding-left: calc((100vw - 1068px)/2);
      ${xl(`        
        padding-left: 40px;
      `)}
      ${lg(`
        max-width: 100%;
        z-index: 9;
        top: 49px;
        margin-bottom: 0;
      `)}
      ${md(`        
        top: 44px;
      `)}
      .service-sticky-sidebar {
        position: relative;
        display: block;
        width: 290px;
        .sticky-sidebar-bg {
          position: absolute;
          left: 10px;
          top: 10px;
          z-index: -1;
          width: 100%;
          height: 100%;
          background-color: #ffe1e1;
          background-image: url(${images.paternBackground});
          background-position: 0px 0px;
          background-size: 24px;
          ${lg(`
              display: none;
          `)}
        }
        .sticky-sidebar {
          position: relative;
          z-index: 1;
          padding: 27px 20px 14px 30px;
          background-color: #fff;
          box-shadow: 14px 0 20px 0 rgba(0, 0, 0, 0.1);
          ${lg(`
            display: flex;
            align-items: center;
            padding: 15px;
            box-shadow: initial;
          `)}
          ${md(`
              flex-wrap: wrap;
          `)}
          h4 {
            margin-bottom: 30px;
            font-size: 24px;
            line-height: 28px;
            ${lg(`
              margin-bottom: 0;
              margin-right: 0px;
              font-size: 13px;
              position: absolute;
              top: 7px;
              left: 50%;
              transform: translateX(-50%);
              background: #fff;
              padding: 0 10px;
              font-weight: 400;
              line-height: 18px;
            `)}
            ${md(`
            `)}
          }
          #servicemenu {
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
            border: 1px solid ${themeColor};
            padding: 13px 40px 14px 20px;
            font-size: 20px;
            line-height: 27px;
            -webkit-appearance: none;
            background: transparent url(${images.faqDownArrow}) no-repeat 96%
              50%;
            border-radius: 4px;
            display: none;
            ${lg(`
              display: block;
              font-size: 18px;
              line-height: 25px;
              padding: 12px 40px 13px 15px;
            `)}
            ${md(`
              font-size: 16px;
              line-height: 25px;
              padding: 10px 40px 11px 15px;
            `)}
          }
          ul {
            ${lg(`
              display: none;
            `)}
            li {
              margin-bottom: 20px;
              list-style-type: none;
              a {
                display: flex;
                color: #6a6a6a;
                font-size: 18px;
                line-height: 22px;
                letter-spacing: -0.2px;
                transition: all 300ms ease;
                .count {
                  margin-right: 10px;
                }
                &:hover {
                  color: ${themeColor};
                }
              }
            }
          }
        }
      }
    }
    .service-right-wrapper {
      margin-left: 60px;
      max-width: calc(50% + 184px);
      width: 100%;
      ${xl(`
        max-width: calc(50% + 130px);
        padding-right: 40px;
      `)}
      ${lg(`
        max-width: 100%;
        margin-left: 0;
        padding: 0 40px;
        margin-top: 40px;
      `)}
      ${md(`
        padding: 0 30px;
      `)}
      ${sm(`
        padding: 0 20px;
      `)}
      .service-right-section {
        position: relative;
        .service-content-block {
          position: relative;
          display: block;
          width: 100%;
          padding-top: 60px;
          padding-bottom: 147px;
          ${xl(`
            padding-bottom: 90px;
          `)}
          ${lg(`
            padding-bottom: 80px;
          `)}
          ${md(`        
            padding-top: 40px;
            padding-bottom: 60px;
          `)}
          .service-content-block-bg {
            position: absolute;
            left: -1500px;
            top: 0px;
            z-index: -1;
            width: 3000px;
            height: 100%;
            background-image: linear-gradient(180deg, #fffcf9, #fff);
            ${lg(`
              width: calc(100% + 80px);
              left: -40px;
            `)}
            ${md(`
              width: calc(100% + 60px);
              left: -30px;
            `)}
            ${sm(`
              width: calc(100% + 40px);
              left: -20px;
            `)}
          }
          &.custom-software {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #fffcf9, #fff);
            }
          }
          &.software-testing {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #fffbff, #fff);
            }
          }
          &.enterprise-mobile {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #fbfcff, #fff);
            }
          }
          &.web-application {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #f5ffff, #fff);
            }
          }
          &.dedicated-software {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #f9fffb, #fff);
            }
          }
          &.product-development {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #fffff8, #fff);
            }
          }
          &.api-integration {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #fbfbfb, #fff);
            }
          }
          &.application-development {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #fffcfc, #fff);
            }
          }
          &.hire-dedicated {
            .service-content-block-bg {
              background-image: linear-gradient(180deg, #f7fffb, #fff);
            }
          }
          .content-wrapper{
            max-width: 718px;
            h3 {
              margin-bottom: 27px;
              font-size: 42px;
              line-height: 50px;
              letter-spacing: -0.46px;
              color: ${themeColor};
              text-decoration: underline;
              ${md(`        
                font-size: 36px;
                line-height: 42px;
              `)}
              a {
                color: ${themeColor};
                text-decoration:none;
              }
            }
            p {
              font-size: 22px;
              line-height: 32px;
              letter-spacing: -0.15px;
              margin-bottom: 50px;
              ${md(`        
                font-size: 18px;
                line-height: 28px;
                margin-bottom: 40px;
              `)}
            }
            .service-sub-content-block {
              padding: 35px 38px 15px;
              border: 1px solid #e8e9f3;
              background: rgba(255, 255, 255, 0.5);
              margin-bottom: 50px;
              ${md(`        
                padding: 25px 20px 15px;
              `)}
              h4 {
                margin-bottom: 20px;
                font-size: 22px;
                line-height: 30px;
                letter-spacing: -0.24px;
              }
              p {
                font-size: 22px;
                line-height: 32px;
                letter-spacing: -0.15px;
                margin-bottom: 40px;
                ${md(`        
                  font-size: 18px;
                  line-height: 28px;
                  margin-bottom: 30px;
                `)}
              }
              ul {
                li {
                  padding-left: 35px;
                  margin-bottom: 25px;
                  color: ${themeColor};
                  list-style-type: none;
                  position: relative;
                  ${md(`        
                    padding-left: 25px;
                    margin-bottom: 15px;
                  `)}
                  &:before {
                    content: '';
                    width: 7px;
                    height: 7px;
                    background: #ff017d;
                    top: 11px;
                    position: absolute;
                    left: 0;
                  }
                  p {
                    font-size: 20px;
                    line-height: 27px;
                    margin-bottom: 0;
                    color: ${primaryColor};
                    ${md(`        
                      font-size: 18px;
                      line-height: 28px;
                    `)}
                    a {
                      transition: all 300ms ease;
                      color: ${themeColor};
                      margin-right: 5px;
                      text-decoration: underline;
                      :hover {
                        color: ${primaryColor};
                      }
                    }
                  }
                }
              }
            }
          }
          .blog-listing-wrapper {
            width: 100%;
            > h4 {
              font-size: 22px;
              line-height: 30px;
              letter-spacing: -0.24px;
              font-weight: 500;
              font-family: ${bodyFont};
              margin-bottom: 0;
            }
            .blog-listing {
              padding: 26px 0;
              display: flex;
              overflow: auto;
              padding-left: 20px;
              margin-left: -20px;
              cursor: grab;
              .single-blog-card {
                max-width: 304px;
                min-width: 304px;
                margin-right: 36px;
                ${md(`        
                  max-width: 260px;
                  min-width: 260px;
                  margin-right: 20px;
                `)}
                .content-part {
                  padding: 29px 20px;
                  h4 {
                    font-size: 20px;
                    line-height: 28px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
