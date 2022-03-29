import styled, { keyframes } from 'styled-components'
import {
  lg,
  themeColor,
  headingFont,
  sm,
  bodyFont,
  primaryColor,
  md,
} from '../../config/variables'
import { images } from '../../config/images'

/*-------Animation---------*/
const slideRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`

const slideLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-100%);
    opacity: 1;
  }
`
/*-------Animation---------*/

export const MobileMenuStyle = styled.div`
  display: none;
  ${lg(`
    display: block;
    `)}
  .menu-btn {
    position: fixed;
    top: 22px;
    right: 20px;
    z-index: 99;
    display: block;
    justify-content: flex-end;
    background-color: transparent;
    cursor: pointer;
    transition: all 300ms ease;
    ${md(`top: 20px;`)}
    ${sm(`top: 18px;`)}
    .menu-icon {
      position: relative;
      display: inline-block;
      width: 22px;
      height: 16px;
      margin-top: 0px;
      padding-top: 0px;
      .top-line {
        position: absolute;
        left: 0px;
        top: 2px;
        right: 0px;
        width: 22px;
        height: 2px;
        margin-bottom: 0px;
        border-radius: 1px;
        background-color: ${themeColor};
      }
      .middle-line {
        position: absolute;
        left: 0px;
        top: 9px;
        right: 0px;
        width: 22px;
        height: 2px;
        margin-bottom: 0px;
        border-radius: 1px;
        background-color: ${themeColor};
      }
      .bottom-line {
        position: absolute;
        left: 0px;
        top: 16px;
        right: 0px;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        background-color: ${themeColor};
      }
    }
    .title {
      display: inline-block;
      margin-left: 9px;
      font-family: ${headingFont};
      color: ${themeColor};
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
      letter-spacing: 0.21px;
    }
  }
  .mobilemenu {
    position: fixed;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    width: 200%;
    height: 100vh;
    z-index: 99;
    transform: translate(-100%, 0px);
    .mobile-menu-content {
      position: fixed;
      left: 0%;
      top: 0%;
      right: auto;
      bottom: auto;
      z-index: 1;
      width: 50%;
      height: 100vh;
      background: linear-gradient(to top, #fff, #f0efff);
      .menu-head {
        padding: 30px 40px 54px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${md(`
          padding: 20px 24px 40px;
        `)}
        .close-btn {
          font-size: 18px;
          text-transform: uppercase;
          line-height: 24px;
          color: ${themeColor};
          padding-right: 36px;
          font-weight: 500;
          background: url(${images.iconClose}) no-repeat 100% 50%;
          ${md(`
            font-size: 0;
          `)}
        }
      }
      > ul {
        margin: 0;
        text-align: left;
        overflow: auto;
        height: calc(100vh - 87px);
        -webkit-overflow-scrolling: touch;
        padding: 0 100px 30px;
        ${md(`
          padding: 0 38px 110px;
        `)}
        li {
          list-style: none;
          padding-bottom: 28px;
          font-size: 38px;
          line-height: 57px;
          letter-spacing: -0.52px;
          font-weight: 900;
          font-family: ${headingFont};
          ${md(`
            font-size: 30px;
            line-height: 47px;
            padding-bottom: 18px;
          `)}
          a {
            color: #171c3f;
            display: inline-block;
            opacity: 0;
            transition: all 200ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
            transform: translateX(-5px);
          }
          .menu-iteam {
            color: #171c3f;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            .menu-title {
              position: relative;
              &:after {
                transition: all 0.3s cubic-bezier(0.29, 0.19, 0.405, 1);
                transform: scaleX(0);
                position: absolute;
                bottom: 0;
                left: 0;
                transform-origin: 50%;
                background: ${themeColor};
                width: 100%;
                height: 3px;
                content: '';
              }
            }
            .menu-icon {
              width: 24px;
              height: 24px;
              display: inline-block;
              margin-left: 20px;
              position: relative;
              ${md(`
                width: 20px;
                height: 20px;
              `)}
              &:after {
                content: '';
                width: 24px;
                height: 6px;
                background: #171c3f;
                position: absolute;
                top: 50%;
                margin-top: -3px;
                left: 0;
                transition: all 0.3s ease;
                ${md(`
                  width: 20px;
                  height: 4px;
                  margin-top: -2px;
                `)}
              }
              &:before {
                content: '';
                width: 6px;
                height: 24px;
                background: #171c3f;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                transition: all 0.3s ease;
                ${md(`
                  width: 4px;
                  height: 20px;
                `)}
              }
            }
          }
          &.active {
            .menu-iteam {
              color: ${primaryColor};
              .menu-title {
                &:after {
                  transform: scaleX(1);
                }
              }
              .menu-icon {
                &:after {
                  background: ${primaryColor};
                }
                &:before {
                  transform: rotate(90deg);
                  background: ${primaryColor};
                }
              }
            }
            ul {
              max-height: 1700px;
              opacity: 1;
              pointer-events: auto;
              padding-top: 22px;
            }
          }
          &:hover {
            > a {
              color: ${themeColor};
            }
            .menu-iteam {
              color: ${primaryColor};
            }
          }
          ul {
            padding-left: 40px;
            width: 100%;
            transition: all 0.3s ease;
            max-height: 0;
            opacity: 0;
            pointer-events: none;
            ${md(`
              padding-left: 20px;
            `)}
            li {
              padding-bottom: 12px;
              line-height: 27px;
              font-size: 20px;
              ${md(`
                font-size: 16px;
                line-height: 24px;
              `)}
              a {
                font-family: ${bodyFont};
                font-weight: 500;
              }
              &:hover {
                a {
                  color: ${primaryColor};
                }
              }
            }
          }
        }
      }
    }
    .mobile-menu-background {
      position: fixed;
      left: 0%;
      top: 0%;
      right: auto;
      bottom: auto;
      z-index: 100;
      width: 50%;
      height: 100vh;
      background-color: #171c3f;
      transform: translate(100%, 0px);
    }
  }
  &.menu-open {
    .mobilemenu {
      animation: ${slideRight} 1.1s;
      animation-timing-function: cubic-bezier(1, 0, 0, 1);
      transform: translateX(0);
      ul {
        li {
          a {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }
  }
  &.menu-close {
    .mobilemenu {
      animation: ${slideLeft} 1.1s;
      animation-timing-function: cubic-bezier(1, 0, 0, 1);
      transform: translateX(-100%);
    }
  }
`