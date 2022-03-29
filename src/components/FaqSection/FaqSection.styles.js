import styled from 'styled-components'
import { white, xl, lg, md, sm, sh, themeColor, } from '../../config/variables'
import { images } from '../../config/images'

export const FaqSectionStyle = styled.section`
  padding: 0 0 150px;
  ${sh(`
    padding: 0 0 135px;
  `)}
  ${xl(`
    padding: 0 0 120px;
  `)}
  ${lg(`
    padding: 0 0 90px;
  `)}
  ${md(`
    padding: 0 0 60px;
  `)}
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 70%;
    background-image: linear-gradient(
      to bottom,
      rgba(243, 243, 243, 0),
      #f8f9ff
    );
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  .faq-listing-wrapper {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    ${lg(`
      flex-wrap: wrap;
    `)}
    .faq-listing {
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 750px;
      ${xl(`
        max-width: 600px;
      `)}
      ${lg(`
        max-width: 100%;
        height: 800px;
      `)}
      .faq-accoridon-wrapper {
        position: absolute;
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        margin-left: 16px;
        padding-right: 26px;
        padding-left: 10px;
        ${lg(`
          margin: 0;
          padding: 0;
        `)}
        .accordion-item {
          margin-bottom: 16px;
          padding: 21px 36px 25px 30px;
          border: 1px solid #00d7fc;
          background-color: #fff;
          box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border-bottom: 0;
          ${md(`
            padding: 14px 20px 18px 15px;
          `)}
          &:last-child{
            border-bottom: 1px solid #00d7fc;
          }
          &.active {
            background-color: rgb(249, 255, 255);
            .panel{
              max-height: 500px;
              overflow-y: auto;
            }
            .title{
              &:after {
                  transform: rotate(180deg);
              }
            }
          }
          .title {
            color: #171c3f;
            font-size: 20px;
            line-height: 32px;
            font-weight: 600;
            letter-spacing: -0.22px;
            position: relative;
            padding-right: 86px;
            display: block;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 0;
            background: transparent;
            box-shadow: initial;
            text-align: left;
            width: 100%;
            z-index: 1;
            ${sh(`
              font-size: 18px;
              line-height: 30px;
            `)}
            ${md(`
              font-size: 18px;
              line-height: 26px;
              padding-right: 50px;
            `)}
            ${sm(`
              padding-right: 30px;
            `)}
            &:after {
              content: '';
              position: absolute;
              width: 18px;
              height: 12px;
              background: url(${images.faqDownArrow});
              top: 50%;
              margin-top: -6px;
              right: 0;
              transition: all 0.3s ease;
              z-index: 99;
            }
          }
          .panel {
            padding-right: 34px;
            max-height: 0;
            transition: max-height .15s ease-out;
            overflow: hidden;                     
            ${sm(`
              padding-right: 0;
            `)}
            .content{
              padding-top: 15px;
              margin-bottom: 0px;
              color: #6a6a6a;
              font-size: 17px;
              line-height: 26px;
              letter-spacing: -0.18px;
              ${sh(`
                font-size: 16px;
                line-height: 25px;
              `)}
              p {
                padding-top: 15px;
                margin-bottom: 0px;
                color: #6a6a6a;
                font-size: 17px;
                line-height: 26px;
                letter-spacing: -0.18px;
                ${sh(`
                  font-size: 16px;
                  line-height: 25px;
                `)}
              }
              ul{
                  padding-left: 15px;
                li {
                  color: #6a6a6a;
                  font-size: 17px;
                  line-height: 26px;
                  letter-spacing: -0.18px;
                  ${sh(`
                    font-size: 16px;
                    line-height: 25px;
                  `)}
                }
              }
            }           
          }
        }
      }
      .wrapper-shadow {
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -10px;
        width: 100%;
        height: 65px;
        background-image: linear-gradient(to bottom, rgba(251, 251, 250, 0), #fafaff);
      }
    }
    .contact-support-block {
      width: 360px;
      margin-left: 20px;
      padding: 0 20px;
      padding-top: 32px;
      background-color: #00d7fc;
      text-align: center;
      position: relative;
      padding-top: 263px;
      overflow: hidden;      
      ${lg(`
        width: 100%;
        margin: 0;
        margin-top: 40px;
        text-align: left;
        padding-top: 30px;
      `)}
      ${md(`
        display: none;
      `)}
      .content-blk{
        position: relative;
        z-index: 1;
        h4 {
          margin-bottom: 14px;
          color: #6a6a6a;
          font-size: 20px;
          line-height: 28px;
          font-weight: 500;
          text-align: center;
          letter-spacing: -0.22px;
          ${sh(`
            font-size: 18px;
            line-height: 26px;
          `)}
          ${lg(`
            text-align: left;
          `)}
        }
        p {
          margin-bottom: 20px;
          font-size: 16px;
          line-height: 25px;
          text-align: center;
          letter-spacing: -0.18px;
          ${lg(`
            text-align: left;
          `)}
        }
        .button {
          margin-right: auto;
          margin-bottom: 20px;
          margin-left: auto;
          padding: 15px 20px 16px;
          border: 1px solid ${themeColor};
          background-color: transparent;
          box-shadow: 0 0 7px -2px rgba(0, 0, 0, 0.1);
          color: ${themeColor};
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          ${sh(`
            padding: 15px 16px 16px;
          `)}
          ${sm(`
            padding: 12px 16px 15px;
            margin-bottom: 10px;
          `)}
          &:hover {
            color: ${white};
          }
        }
      }
      .img-block {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        display: block;
        margin: 0 auto;
        z-index: 0;
        ${lg(`
          display: none;
        `)}
        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
`
