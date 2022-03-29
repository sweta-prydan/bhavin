import styled from 'styled-components'
import { bodyFont, md, xl, lg } from '../../config/variables'

export const CaseengagementsecStyles = styled.div`
    margin-bottom: 120px;
    ${xl(`
        margin-bottom: 90px;
    `)}
    ${lg(`
        margin-bottom: 60px; 
    `)}
    ${md(`
        margin-bottom: 40px; 
    `)} 
  .businessHeading {
    h2 {
      ${xl(`
          margin-bottom: 27px;
      `)}
        } 
      }
  .engagementContent {
    display: flex;
    justify-content: space-between;
    
    .left-part {
      max-width: 200px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      ${xl(`
        padding-right: 40px;
      `)}
      ${lg(`
              max-width: 152px;
              padding-right: 27px;
          `)}
          ${md(`
              display:none;
          `)}
      .bottom-content {
        position: relative;
        padding-top: 21px;
        &:before {
          content: '';
          position: absolute;
          width: 55px;
          height: 3px;
          background: #6a6a6a;
          top: 0;
          left: 0;
        }
        h4 {
          font-size: 15px;
          font-weight: 600;
          font-family: ${bodyFont};
          margin-bottom: 6px;
          text-transform: uppercase;
          line-height: 21px;
        }
        p {
          font-size: 15px;
          letter-spacing: -0.16px;
          line-height: 21px;
          margin: 0;
        }
      }
    }
    .right-part {
      max-width: 867px;
      width: 100%;
      p {
        margin: 0px;
      }
    }
  }
`
