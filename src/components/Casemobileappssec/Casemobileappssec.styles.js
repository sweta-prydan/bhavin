import styled from 'styled-components'
import { primaryColor, metaFont, md, lg, xl } from 'config/variables'
export const CasemobileappssecStyles = styled.div`
  margin-bottom: 107px;
  ${lg(`
      margin-bottom: 67px;
  `)}
  ${md(`
      margin-bottom: 40px;
  `)} 
  .mobileAppsheading {
    h4 {
      font-size: 15px;
      font-weight: 600;
      margin: 0px;
      letter-spacing: -0.16px;
      line-height: 21px;
      text-transform: uppercase;
      display:inline-block;
      background:#fff;
      padding-right:10px;
      position:relative;
      z-index:10;
    }
    ${md(`
      display:none;
  `)} 
  }
  .mobileAppsContent {
    display: flex;
    justify-content: space-between;
    padding-bottom: 62px;
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
        ${md(`
          padding: 20px 0;
        `)} 
        &:after {
          content: '';
          position: absolute;
          top: -12px;
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
          top: -12px;
          left: 0px;
          width: 100%;
          height: 3px;
          background: ${primaryColor};
           ${md(`
            display:none;
        `)} 
        }
      }
    }
  }
  .mobileAppsImages {
    padding-bottom: 40px;
  }
  .performanceContentRow {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    ${xl(`
         align-items:center;
      `)}
       ${lg(`
         flex-direction: column;
      `)}
    .performancDetails {
      flex: 0 1 521px;
      padding-right: 17px;
      ${lg(`
         flex: 1 1 auto;
         padding-bottom:25px;
      `)}
      h3 {
        margin: 0px 0 10px;
      }
    }
    .performancThumb {
      flex: 0 1 618px;
      padding-left: 17px;
      ${lg(`
          flex: 1 1 auto;
      `)}
      figure {
        margin: 0px;
      }
    }
  }
  .RAMConsumptionContentRow {
    display: flex;
    justify-content: space-between;
    ${md(`
          flex-direction: column;
      `)}
    .RAMConsumptionTitle {
      flex: 0 0 250px;
      ${lg(`
          flex: 0 0 130px;
      `)}
      ${md(`
          flex: 1 1 auto;
          padding-bottom:5px;
      `)}
      h3 {
        font-family: ${metaFont};
        font-weight: bold;
        line-height: 1.67;
      }
    }
    .RAMConsumptionDetails {
      flex: 1 1 auto;
      padding-left: 23px;
      ${lg(`
             padding-left: 21px;
      `)}
       ${md(`
          
      padding-left: 0px;
      `)}
    }
  }
`
