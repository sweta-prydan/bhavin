import styled from 'styled-components'
import {
  md,
  sm,
  white,
  bodyFont,
  device,
  primaryColor,
  sh,
} from '../../config/variables'

export const SingleServiceStyle = styled.div`
  max-width: 354px;
  width: 100%;
  padding: 21px 24px 23px;
  display: flex;
  align-items: flex-start;
  background-color: ${white};
  box-shadow: -2px 0 20px rgb(0 0 0 / 20%)
    0 3px 5px -1px rgba(0, 0, 0, 0.1);
  transition: all 800ms cubic-bezier(0.2, 0.8, 0.2, 1);
  border: 1px solid ${white};
  ${sh(`
    max-width: 310px;
    padding: 18px 21px 20px;
  `)}
  ${md(`
    padding: 20px;
    `)}
  ${sm(`
    max-width: 280px;
    padding: 17px;
    flex-wrap: wrap;
    flex-direction: column;
    `)}
  &.very-light-pink {
    border-color: #ff017d;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #ff017d;
          }
        }
      }
    }
  }
  &.pale {
    border-color: #ffbc00;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #ffbc00;
          }
        }
      }
    }
  }
  &.pale-grey {
    border-color: #ff017d;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #ff017d;
          }
        }
      }
    }
  }
  &.sky-blue {
    border-color: #4b68c1;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #4b68c1;
          }
        }
      }
    }
  }
  &.ice-blue {
    border-color: #4b68c1;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #4b68c1;
          }
        }
      }
    }
  }
  &.ice {
    border-color: #00d7fc;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #00d7fc;
          }
        }
      }
    }
  }
  &.pale-lavender {
    border-color: #ff017d;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #ff017d;
          }
        }
      }
    }
  }
  &.very-light-pink-two {
    border-color: #ffbc00;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #ffbc00;
          }
        }
      }
    }
  }
  &.off-white {
    border-color: #00d7fc;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #00d7fc;
          }
        }
      }
    }
  }
  &.very-light-pink-three {
    border-color: #4b68c1;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #4b68c1;
          }
        }
      }
    }
  }
  &.duck-egg-blue {
    border-color: #ff017d;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #ff017d;
          }
        }
      }
    }
  }
  &.beige-four {
    border-color: #ffbc00;
    box-shadow: -2px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.5s ease 0s;
    &:hover {
      background-color: #fff;
      .service-content-blk {
        h4 {
          a {
            color: #ffbc00;
          }
        }
      }
    }
  }
  &:hover {
    box-shadow: 0 11px 15px -3px rgba(0, 0, 0, 0.1),
      0 9px 30px 3px rgba(0, 0, 0, 0.04), 0 20px 30px 3px rgba(0, 0, 0, 0.04);
    transform: translateY(-5px);
    ${device(`
        box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.06), 0 3px 5px -1px rgba(0, 0, 0, 0.1);
        transform: initial;
    `)}
    .service-img-blk {
      transform: translateY(-11px);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 40px;
      ${device(`
          box-shadow: initial;
          transform: initial;
      `)}
    }
    .service-content-blk {
      h4 {
        transform: translateY(-7px);
        ${device(`
          box-shadow: initial;
          transform: initial;
      `)}
      }
      p {
        transform: translateY(-4px);
        ${device(`
          box-shadow: initial;
          transform: initial;
      `)}
      }
    }
  }
  .service-img-blk {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 16px;
    transition: all 800ms cubic-bezier(0.2, 0.8, 0.2, 1);
    ${sh(`
      width: 43px;
      height: 43px;
      margin-right: 14px;
    `)}
    ${sm(`
      margin-bottom: 15px;
      `)}
  }
  .service-content-blk {
    flex: 1;
    ${sm(`
      width: 100%;
      `)}
    h4 {
      font-size: 18px;
      font-family: ${bodyFont};
      margin-bottom: 7px;
      line-height: 24px;
      transition: all 800ms cubic-bezier(0.2, 0.8, 0.2, 1);
      ${sh(`
        font-size: 16px;
        line-height: 22px;
      `)}
      ${md(`
        margin-bottom: 10px;
      `)}
      a {
        color: ${primaryColor};
        transition: all 800ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }
    }
    p {
      font-size: 17px;
      line-height: 23px;
      margin: 0;
      transition: all 800ms cubic-bezier(0.2, 0.8, 0.2, 1);
      ${sh(`
        font-size: 15px;
        line-height: 21px;
      `)}
    }
  }
`
