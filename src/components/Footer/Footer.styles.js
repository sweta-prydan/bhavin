import styled from 'styled-components'
import {
  lg,
  md,
  sm,
  primaryColor,
  themeColor,
  sh,
  headingFont,
  xl,
  xll,
  bodyFont,
} from '../../config/variables'
import { images } from '../../config/images'

export const FooterStyle = styled.footer`
  &.service-footer{
    .address-row-wrap{
      padding: 145px 0 154px;
      ${xl(`
        padding: 145px 0 140px;
      `)}
      ${lg(`
        padding: 130px 0 120px;
      `)}
      ${md(`
        padding: 40px 0 80px;
      `)}
    }
    .foot-info-row-wrap{
      .foot-info-row{
        padding: 120px 0 0;
        ${lg(`
          padding: 100px 0 0;
        `)}
        ${md(`
          padding: 80px 0 0;
        `)}
      }
    }
  }
  .address-row-wrap{
    padding: 145px 0 40px;
    position: relative;
    background: #fff;
    ${lg(`
      padding: 130px 0 50px;
    `)}
    ${md(`
      padding: 50px 0 20px;
    `)}
    ${sm(`
      padding: 40px 0 25px;
    `)}
    &:after{
      content: '';
      position: absolute;
      width: 778px;
      height: 331px;
      background: url(${images.footermap}) no-repeat center;
      top: 0;
      right: 0;
      ${lg(`
        width: 560px;
        height: 260px;
        background-size: 560px;
      `)}
      ${md(`
        width: 100%;
        height: 250px;
        background-size: 560px;
      `)}
      ${sm(`
        width: 100%;
        height: 180px;
        background-size: 400px;
      `)}
    }
    .container {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      ${lg(`
        flex-wrap: wrap;
      `)}
      .address-row {
        max-width: 100%;
        h5 {
          font-size: 20px;
          line-height: 25px;
          letter-spacing: -0.22px;
          margin-bottom: 25px;
          ${sh(`
            font-size: 19px;
            line-height: 24px;
          `)}
          ${md(`
            margin-bottom: 10px;
          `)}
        }
        .address-listing {
          padding: 30px 0;
          ${sm(`
            padding: 20px 40px;
          `)}
          .slick-slider{
            user-select: text;
            ${xl(`
              padding: 0 40px;
            `)}
            ${lg(`
              padding: 0 40px;
            `)}
            ${sm(`
              padding: 0;
            `)}
            .slick-slide{
              > div{
                ${sm(`
                  text-align: center;
                `)}
                .address-single {
                  max-width: 240px;
                  width: 100%;
                  ${xl(`
                    padding: 0 10px;
                  `)}
                  ${lg(`
                    padding: 0 10px;
                  `)}
                  ${md(`
                    padding: 0 10px;
                    text-align: left;
                  `)}
                  ${sm(`
                    max-width: 270px;
                    margin: 0 auto;
                    padding: 0;
                  `)}
                  h6 {
                    font-size: 18px;
                    line-height: 22px;
                    letter-spacing: -0.17px;
                    margin-bottom: 8px;
                    ${sh(`
                      font-size: 17px;
                      line-height: 21px;
                    `)}
                    a{
                      font-size: 18px;
                      line-height: 22px;
                      letter-spacing: -0.17px;
                      font-weight: 700;
                      ${sh(`
                        font-size: 17px;
                        line-height: 21px;
                      `)}
                    }
                  }
                  p {
                    font-size: 14px;
                    line-height: 26px;
                    margin-bottom: 10px;
                    ${sh(`
                      font-size: 15px;
                      line-height: 25px;
                    `)}
                  }
                  a {
                    font-size: 14px;
                    line-height: 26px;
                    font-weight: 500;
                    color: ${primaryColor};
                    transition: all 0.3s ease;
                    ${sh(`
                      font-size: 15px;
                      line-height: 25px;
                    `)}
                    ${sm(`
                      font-size: 14px;
                      line-height: 18px;
                      `)}
                    &:hover {
                      color: ${themeColor};
                    }
                  }
                }
              }
            }
          }
          .slick-arrow {
            width: 32px;
            position: absolute;
            padding: 0;
            top: 50%;
            z-index: 9;
            height: 24px;
            background-color: transparent;
            margin-top: -12px;
            transition: all 0.3s ease;
            outline: none;
            opacity: 1;
            border: 0;
            cursor: pointer;
            svg{
              width: 100%;
            }
            ${md(`
              width: 25px;
            `)}
            &:hover {
              opacity: 0.8;
            }
            &.slick-prev {
              left: -100px;
              ${xll(`
                left: -60px;
              `)}
              ${xl(`
                left: -10px;
              `)}
              ${lg(`
                left: -10px;
              `)}
              ${sm(`
                left: -42px;
              `)}
            }
            &.slick-next {
              right: -100px;
              ${xll(`
                right: -60px;
              `)}
              ${xl(`
                right: -10px;
              `)}
              ${lg(`
                right: -10px;
              `)}
              ${sm(`
                right: -42px;
              `)}
            }
          }
        }
      }
    }
  }
  .foot-info-row-wrap{
    position: relative;
    background-color: white;
    z-index: 1;
    padding: 0 0 80px;
    ${xl(`
      padding: 0 0 60px;
    `)}
    ${lg(`
      padding: 0 0 50px;
    `)}
    ${sm(`
      padding: 0 0 25px;
    `)}
    .footer-form{
      box-shadow: 0 2px 24px 0 #rgb(240,241,248);
      border-radius: 6px;
      background: #171c3f;
      width: calc(100% - 20px);
      position: relative;
      padding: 40px 50px;
      display: flex;
      margin-top: -80px;
      align-items: center;
      ${lg(`
        padding-right: 20px;
      `)}
      ${md(`
        flex-wrap: wrap;
        justify-content: center;
        padding: 30px;
      `)}
      ${sm(`
        padding: 30px 25px;
      `)}
      &:after{
        content: '';
        width: 100%;
        height: 100%;
        top: 0px;
        right: -0px;
        background: #EDEFFF;
        position: absolute;
        z-index: -1;
        border-radius: 6px;
      }
      .form-part{
        max-width: calc(100% - 255px);
        padding-right: 40px;
        width: 100%;
        ${lg(`
          padding-right: 20px;
        `)}
        ${lg(`
          max-width: 100%;
          border: 0;
          margin-bottom: 50px;
          padding: 0;
        `)}
        h3{
          font-size: 28px;
          line-height: 32px;
          letter-spacing: -0.26px;
          margin-bottom: 25px;
          color: ${themeColor};
        }
        .form{
          background: transparent;
          position: relative;
          margin-bottom: -15px;
          .input-field-row{
            margin-bottom: 15px;
            ${sm(`
              flex-wrap: wrap;
            `)}
            .form-field-blk{  
              &.column{
                ${sm(`
                  width: 100%;
                  margin-bottom: 15px;
                `)}
                &:last-child{
                  ${sm(`
                    margin-bottom: 0;
                  `)}
                }
              }
              .label-input-field {
                border: 0;
                background: transparent;
                border-bottom: 2px solid rgba(98, 108, 121, 0.5);
                border-radius: 1px;
                color: #fff;
                height: 44px;
                padding: 10px 0;
                font-size: 18px;
                ${lg(`
                    font-size: 16px;
                  `)}
                &.textarea{
                  height: 102px;
                  width: calc(100% - 190px);
                  display: block;
                  ${lg(`
                    width: calc(100% - 160px);
                  `)}
                  ${sm(`
                    width: 100%;
                  `)}
                }
                &#Select{
                  width: 100%;
                  padding: 10px 40px 10px 0;
                  -webkit-appearance: none;
                  background: url(${images.selectarrowred}) no-repeat 100% 50%;
                }
                &:focus, &.fill{
                  border-color: ${themeColor};
                }
                &:focus + label, &.fill + label{
                  background: transparent;
                  top: -5px;
                  left: 0;
                  font-size: 12px;
                }
              }
              label{
                text-transform: unset;
                color: #fff;
                top: 7px;
                left: 0;
                font-size: 18px;
                ${lg(`
                  font-size: 16px;
                `)}
              }
            }
          }
          .submit-row{
            position: absolute;
            right: 0;
            bottom: 20px;
            padding: 0;
            ${sm(`
              position: relative;
            `)}
            button{
              padding: 13px 40px 13px;
              ${sm(`
                padding: 10px 30px 11px;
              `)}
            }
          }
          .bottomErrorText{
            padding-left: 0;
            position: absolute;
            bottom: -10px;
            left: 0;
          }
        }
      }
      .admin-info{
        max-width: 255px;
        width: 100%;
        padding-left: 30px;
        text-align: center;
        ${lg(`
          padding-left: 20px;
        `)}
        ${md(`
          padding: 0;
        `)}
        .img-blk{
          max-width: 110px;
          margin: 0 auto;
          margin-bottom: 13px;
        }
        h3{
          font-size: 20px;
          line-height: 25px;
          margin-bottom: 5px;
        }
        p{
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
          font-weight: 500;
          color: #fff;
        }
        .btn-call{
          font-size: 14px;
          font-family: ${headingFont};
          line-height: 22px;
          letter-spacing: 1.4px;
          color: ${themeColor};
          font-weight: 600;
          position: relative;
          padding-left: 19px;
          text-transform: uppercase;
          &:before{
            content: '';
            position: absolute;
            width: 17px;
            height: 22px;
            top: -2px;
            left: -3px;
            background: url(${images.iconCallRed})
          }
        }
      }
    }
    .foot-info-row{
      padding: 70px 0 0;
      position: relative;
      display: flex;   
      max-width: 100%;
      width: 100%;
      ${lg(`
        flex-wrap: wrap;
        padding: 60px 0 0;
      `)}
      .top-row {
        max-width: 260px;
        width: 100%;
        ${sh(`
          max-width: 245px;
        `)}
        ${lg(`
          max-width: 100%;
          margin-bottom: 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        `)}
        ${md(`
          justify-content: space-between;
        `)}
        .foot-logo {
          max-width: 161px;
          width: 100%;
          margin-bottom: 30px;
          ${lg(`
            margin-bottom: 0px;
            margin-right: 30px;
          `)}
          ${sm(`
            max-width: 130px;
            margin-right: 10px;
          `)}
          ${md(`
            display: none;
          `)}
          a {
            display: block;
          }
        }
        .foot-description {
          
          width: 100%;
          margin-bottom: 30px;
          ${lg(`
            margin-bottom: 0px;
            margin-right: 30px;
          `)}
          ${sm(`
            max-width: 130px;
            margin-right: 10px;
          `)}
          ${md(`
            display: none;
          `)}
          a {
            display: block;
          }
        }

        .social-icon {
          display: flex;
          align-items: center;
          ${sm(`
            justify-content: flex-end;
            `)}
          ${md(`
            margin-bottom: 0;
          `)}
          a {
            margin-right: 20px;
            display: block;
            position: relative;
            img{
              display: block;
              &.hvr{
                position: absolute;
                opacity: 0;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                transition: all 0.3s ease;
              }
            }
            &:hover {
              img{
                &.hvr{
                  opacity: 1;
                }
              }
            }
            ${md(`
              margin-right: 11px;
              `)}
          }
        }
        .foot-right {
          max-width: 170px;
          margin-top: 30px;
          width: 100%;
          ${lg(`
            margin-top: 0px;
          `)}
          ${md(`
            margin-top: 0px;
            display: block;
          `)}
          ${sm(`
            max-width: 120px;
            margin: 0;
          `)}
          .dmca-badge{
            margin-top: 20px;
            display: block;
          }
        }
      }
      .foot-link-row {
        display: flex;
        margin-bottom: 0px;
        ${md(`
          flex-wrap: wrap;
          `)}
        .link-col {
          max-width: 200px;
          width: 100%;
          ${lg(`
            max-width: 140px;
            `)}
          ${md(`
            max-width: 100%;
            margin-bottom: 20px;
            `)}
          ul{
            ${md(`
              display: flex;
              flex-wrap: wrap;
            `)}
          }
          &.large {
            flex: 1;
            max-width: 100%;
            display: flex;
            
            ${md(`
              margin-bottom: 0;
            `)}
            ${sm(`
              flex: 100%;
              flex-direction:column;
            `)}
            .column{
              flex: 1;
              padding-right: 15px;
              ${sm(`
                flex: 1 0 250px;
                margin-bottom: 20px;
                margin-right: 20px;
              `)}
              ${sm(`
                flex: 1 1 auto;
                margin-right:0px
              `)}
              &:last-child {
                padding-right:0;
                ${sm(`
                  margin-bottom:0px
                `)}
              }
              ul {
                display: flex;
                flex-wrap: wrap;
                li {
                  width: 100%;
                  ${sm(`
                    width: 100%;
                    `)}
                }
              }
              .custom-select{
                max-width: 260px;
                margin-bottom:26px;
                &:last-child {
                  margin-bottom:0px;
                }
                select{
                  width: 100%;
                  height:36px;
                  padding:10px 15px; 
                  border-radius: 4px;
                  border: solid 1px  ${themeColor};
                  color:${primaryColor};
                  font-size:12px;
                  line-height:1;
                  letter-spacing:0.32px;
                  background: url(${images.footDropdownIcon}) no-repeat 96% 50%;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  -ms-appearance: none;
                  appearance: none;
                  cursor: pointer;
                  padding-right: 30px;
                  text-overflow: ellipsis;
                  outline: 0;
                  box-shadow: none;
                  option{
                    font-size: 14px;
                    padding: 5px 0;
                  }
                  optgroup{
                    font-size: 14px;
                    padding: 5px 0;
                  }
                }
              }
            }
          }
          h5 {
            font-size: 20px;
            line-height: 25px;
            letter-spacing: -0.22px;
            ${sh(`
              font-size: 19px;
              line-height: 24px;
            `)}
            ${sm(`
              font-size: 18px;
              line-height: 22px;
              `)}
          }
          ul {
            li {
              list-style: none;
              padding-bottom: 10px;
              padding-right: 58px;
              font-size: 16px;
              line-height: 22px;
              ${sh(`
                font-size: 15px;
                line-height: 21px;
              `)}
              ${xl(`
                padding-right: 20px;
                `)}
              ${lg(`
                padding-right: 10px;
                `)}
              ${sm(`
                font-size: 16px;
                line-height: 21px;
                padding-bottom: 8px;
                `)}
              a {
                display: block;
                color: ${primaryColor};
                transition: all 0.3s ease;
                &:hover {
                  color: ${themeColor};
                }
              }
            }
          }
        }
      }    
    }
  }
  .footer-copyright{
    background: #f0f1f8;
    font-family: ${bodyFont};
    padding: 15px 0;
    p{
      font-size: 15px;
      line-height: 20px;
      color: #6a6a6a;
      margin: 0;
      text-align: center;
    }
  }
`
