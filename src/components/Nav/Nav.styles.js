import styled from 'styled-components'
import {
  lg,
  headingFont,
  themeColor,
  bodyFont,
  primaryColor,
  sh,
  white,
  xl,
} from '../../config/variables'

export const NavStyle = styled.nav`
  ${lg(`
    display: none;
    `)}
  > ul {
    display: flex;
    align-items: center;
    > li {
      list-style: none;
      padding: 0 0 0 16px;
      font-family: ${headingFont};
      letter-spacing: 1.4px;
      line-height: 18px;
      font-weight: 700;
      font-size: 14px;
      display: flex;
      align-items: center;
      ${xl(`
        font-size: 13px;
        padding: 0 0 0 5px;
      `)}
      ${sh(`
        font-size: 13px;
      `)}
      &:last-child {
        &:after {
          display: none;
        }
      }
      &:after {
        content: '/';
        color: ${themeColor};
        font-weight: 500;
        font-family: ${bodyFont};
        padding: 0 0 0 10px;
        margin-top: -4px;
        ${xl(`
          padding: 0 0 0 5px;
        `)}
      }
      > a {
        transition: all 0.3s cubic-bezier(0.29, 0.19, 0.405, 1);
        color: ${primaryColor};
        padding: 10px 0 10px;
        display: block;
        position: relative;
        ${sh(`
          padding: 8px 0 8px;
        `)}
        &:before {
          content: '';
          width: 16px;
          height: 16px;
          transform: translateY(10px) rotate(45deg);
          position: absolute;
          background: ${white};
          left: 50%;
          margin-left: -8px;
          top: 51px;
          z-index: 1;
          border-top-left-radius: 2px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.29, 0.19, 0.405, 1);
          pointer-events: none;
        }
        &:after {
          transition: all 0.3s cubic-bezier(0.29, 0.19, 0.405, 1);
          transform: scaleX(0);
          position: absolute;
          bottom: 0;
          left: 0;
          transform-origin: 50%;
          background: ${themeColor};
          width: 100%;
          height: 2px;
          content: '';
        }
        &.active {
          color: ${themeColor};
          &:after {
            transform: scaleX(1);
          }
        }
      }
      &:hover {
        a {
          color: ${themeColor};
          &:after {
            transform: scaleX(1);
          }
        }
        .submenu {
          transform: translate(-50%, 0px);
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }
        .submenu + a {
          &:before {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) rotate(45deg);
          }
        }
      }
      .submenu {
        position: absolute;
        width: 1065px;
        left: 50%;
        transform: translate(-50%, 10px);
        top: 58px;
        background: ${white};
        box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s ease 0s;
        pointer-events: none;
        border-radius: 5px;
        transition: all 0.3s ease;
        margin-top: 25px;
        ${xl(`
          width: 95%;
        `)}
        ${sh(`
          margin-top: 18px;
        `)}
        &:after {
          content: '';
          width: 100%;
          height: 25px;
          position: absolute;
          background: transparent;
          left: 0;
          top: -25px;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          z-index: 1;
          position: relative;
          background: ${white};
          padding: 9px;
          li {
            list-style: none;
            width: calc(20% - 16px);
            margin: 0 8px;
            a {
              display: block;
              padding: 13px 16px;
              height: 100%;
              transition: all 0.3s cubic-bezier(0.29, 0.19, 0.405, 1);
              border-radius: 3px;
              .icon {
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 50px;
                transition: all 0.5s ease 0s;
                  top: 0px;
                position: relative;
                border-radius: 50%;
              }
              .title {
                font-size: 12px;
                line-height: 16px;
                letter-spacing: -0.11px;
                color: ${primaryColor};
                text-transform: initial;
                transition: all 0.3s cubic-bezier(0.29, 0.19, 0.405, 1);
              }
              &.very-light-pink-six {
                .icon {
                  background: rgba(0);
                }
              }
              &.very-light-pink-seven {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
              &.pale-grey-three {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
              &.ice-three {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
              &.ice-blue-two {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
              &.pale-grey-five {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
              &.very-light-pink-nine {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
              &.off-white-two {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
              &.very-light-pink-eight {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
              &.pale-grey-four {
                .icon {
                  background: #fff;
                  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
                }
              }
            }
            &:hover {
              a {
                .title {
                  color: ${themeColor};
                }
              }
            }
          }
        }
      }
    }
  }
`
