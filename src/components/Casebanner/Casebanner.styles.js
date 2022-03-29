import styled from 'styled-components'
import { md, lg, xl, sh } from '../../config/variables'

export const CasebannerStyles = styled.section`
  padding-top: 110px;
  margin-bottom:126px;
  ${xl(`   
          margin-bottom:100px;
  `)}
  ${lg(`
          margin-bottom:90px;
  `)}
  ${md(`
          padding-top: 97px;
          margin-bottom:40px;
  `)}
  .container {
    display: flex;
    justify-content: space-between;
    ${md(`
          flex-direction: column;
      `)}
    .content-part {
      max-width: 455px;
      width: 100%;
      padding-top: 105px;
      ${xl(`
          max-width: 438px;
          padding-top: 86px;
          padding-right:42px;
      `)}
      ${lg(`
          max-width: 330px;
          padding-top: 30px;
          padding-right:24px;
          padding-top:30px;
      `)}
      ${md(`
          max-width: 100%;
          padding-top: 0;
          padding-right:0px;
          padding-bottom:20px;
      `)}     
      ${sh(`
          padding-right:42px;
      `)}      
    }
    .img-block {
      max-width: 590px;
      width: 100%;
      .banner-img {
        width: calc(100% - 30px);
        position: relative;
        margin-right: 30px;
        margin-bottom: 20px;
        ${xl(`
            width: calc(100% - 25px);
            margin-right: 25px;
            margin-bottom: 25px;
      `)}
        ${lg(`
            width: calc(100% - 20px);
            margin-right: 20px;
            margin-bottom: 20px;
      `)}
        ${md(`
            width: calc(100% - 15px);
            margin-right: 15px;
            margin-bottom: 15px;
            max-width:420px;
      `)}
        .banner-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          right: -30px;
          top: 30px;
          background: #f0f1f8;
          ${xl(`
            right: -25px;
            top: 25px;
          `)}
          ${lg(`
            right: -20px;
            top: 20px;
          `)}
          ${md(`
            right: -15px;
            top: 15px;
        `)}
        }
      }
    }
  }
`
