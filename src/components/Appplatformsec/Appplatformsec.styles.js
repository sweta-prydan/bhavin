import styled from 'styled-components'
import {
  md,
  lg,
  xl,
  primaryColor,
  headingFont,
  metaFont,
} from '../../config/variables'

export const AppplatformsecStyles = styled.div`
.mobileAppsheading {
    h4 {
      font-size: 15px;
      font-weight: 600;
      margin: 0px;
      letter-spacing: -0.16px;
      line-height: 21px;
      text-transform: uppercase;
    }
    ${md(`
      display:none;
  `)} 
  }
  .mobileAppsContent {
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;
    ${xl(`
      padding-bottom: 78px;
  `)}
    ${lg(`
      padding-bottom: 50px;
  `)}
    ${md(`
        flex-direction: column; 
        padding-bottom: 40px;
    `)} 
    .mobileAppsContentLeft {
      flex: 0 1 515px;
      padding-right: 40px;
      padding-left: 84px;
      max-height:283px;
      ${xl(`
          padding-right: 25px;
          padding-left: 82px;
      `)}
      ${lg(`
          padding-right: 15px;
          padding-left: 73px;
      `)}
        ${md(`
            flex: 1 1 auto;
            padding:0px;
        `)} 
      .mobileAppsTitle {
        position: relative;
        padding: 40px 0;
        height:100%;
        ${md(`
          padding: 20px 0;
        `)} 
        &:after {
          content: '';
          position: absolute;
          top: -10px;
          left: 0px;
          width: 100%;
          height: 3px;
          background: ${primaryColor};
          ${md(`
            top:0px;
            width:200px;
        `)} 
        }
        &::before {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          max-width: 160px;
          height: 3px;
          background: ${primaryColor};
          ${md(`
            width:120px;
        `)} 
        }
        h2 {
          margin-bottom: 0px;
          br{
            ${lg(`
                display:none;
            `)} 
          }
        }
      }
    }
    .mobileAppsContentRight {
      flex: 0 1 625px;
      padding-left: 40px;
      ${xl(`
          padding-left: 25px;
      `)}
      ${lg(`
          padding-left: 15px;
      `)}
      ${md(`
          padding-left: 0;
          flex: 1 1 auto;
      `)}
      .mobileAppsDetails {
        position: relative;
        padding: 40px 0 0;
        ${md(`
            padding: 26px 0 0;
        `)} 
        &:after {
          content: '';
          position: absolute;
          top: -10px;
          left: 0px;
          width: 100%;
          height: 3px;
          background: ${primaryColor};
          ${md(`
            display:none;
        `)} 
        }
        p {
          margin-bottom:0px;
        }
      }
    }
  }
  .app-platform-block{
    width: 100%;
    padding-bottom:100px;
    ${lg(`
        padding-bottom:90px;
    `)} 
    ${md(`
        padding-bottom:40px;
    `)} 
    .single-platform-block {
      background: linear-gradient(287deg, #, #f0f1f8);
      border-radius: 3.5px;
      display: flex;
      align-items: center;
      padding-left: 104px;
      position: relative;
      margin-bottom: 15px;
      ${md(`
          padding-left: 73px;
          
      `)} 
      .title {
        position: absolute;
        font-size: 16.8px;
        letter-spacing: -0.18px;
        font-family: ${headingFont};
        font-weight: 700;
        display: inline-block;
        max-width: 150px;
        width: 100%;
        text-align: center;
        left: -25px;
        top: 50%;
        transform: translateY(-50%) rotate(-90deg);
        ${md(`
          padding: 20px 15px 20px;
          text-align: center;
          left: -40px;
        `)}
      }
      .stack-listing {
        width: 100%;
        padding: 22px 32px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 3.5px;
        ${md(`
          padding: 20px;
        `)}
        .single-platform {
          margin: 8px;
          width: calc(25% - 16px);
          background: #fff;
          box-shadow: 0 7px 21px 0 rgba(0, 0, 0, 0.06);
          border-radius: 5.6px;
          font-size: 14px;
          line-height: 16.8px;
          letter-spacing: -0.15px;
          text-align: center;
          padding: 16.5px 15px 17.5px;
          font-family: ${headingFont};
          display: flex;
          align-items: center;
          justify-content: center;
          ${lg(`
            width: calc(50% - 16px);
            min-height:66px;
          `)}
          ${md(`
            width: 100%;
            margin:8px 0;
            min-height:auto;
            padding: 9px 10px;
            min-height:50px;
          `)}
          
        }
      }
      .separator-row {
        max-width: 730px;
        width: 100%;
        right: 32px;
        bottom: -27px;
        display: flex;
        justify-content: space-around;
        position: absolute;
        z-index: 1;
        ${lg(`
          max-width: 75%;
        `)}
        ${md(`
          max-width: 100%;
          right: 0;
          justify-content: space-between;
          padding:0 20px 0 93px;
        `)}

        .divider {
          height: 35px;
          width: 3px;
          border-left: 3px dotted #f0f1f8;
          &:nth-child(2) {
            ${md(`
              display:none;
            `)}
          }
        }
      }
      &:nth-child(2) {
        background: transparent;
      
        .stack-listing {
          background: linear-gradient(
            309deg,
            rgba(203, 244, 255, 0.8),
            rgba(10, 216, 255, 0.8)
          );
        }
      }
      &:last-child {
        background: linear-gradient(287deg, #f0f1f8, #f0f1f8);
        .separator-row {
            display:none;
        }
      }
    }
  }
  .featuresDetailsWrap {
      max-width:1068px;
      margin:0 auto;
      .featuresDetailsBlock {
            margin: 20px 20px 20px 0;
            background-image: linear-gradient(259deg, rgba(212, 220, 255, 0.7), rgba(231, 236, 255, 0.7));
            position: relative;
          padding:52px 41px 74px 60px;
          ${lg(`
              padding:36px 40px 52px 60px;
          `)}
          ${md(`
              padding:24px 25px 38px 42px;
              margin: 16px 16px 0px 0;
          `)}
          .featuresDetailsBg {
            position: absolute;
                width: 100%;
                height: 100%;
                right: -20px;
                top: -20px;
                background: #f0f1f8;
                z-index: -1;
                ${md(`
                    right: -16px;
                    top: -16px;
                `)}
            }
          }
          p {
              font-family:${metaFont};
              font-size:24px;
              line-height:36px;
              letter-spacing:-0.34px;
              color:${primaryColor};
              margin-bottom:0px;
              ${md(`
                  font-size:16px;
                  line-height:30px;
                  letter-spacing:-0.29px;
              `)}
          }
      }
  }
`
