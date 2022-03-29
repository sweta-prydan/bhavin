import styled from 'styled-components'
import { lg, md, xl } from '../../config/variables'

export const ReliabilityinstancessecStyles = styled.div`
 position: relative;
  margin-bottom: 130px;
  ${xl(`
    margin-bottom: 100px;
  `)}
  ${lg(`
    margin-bottom: 80px;
  `)}
  ${md(`
    margin-bottom: 40px;
  `)}
.track-content {
    margin-top: 40px;
    .contentRow { 
      .row {
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom:88px;
        ${lg(`
            flex-direction: column;
            margin-bottom:50px;    
        `)}   
        .col { 
          ${lg(`
              flex:1 1 auto;
              padding:0px;
              width:100%;
          `)}     
          &.colImages {
            flex:0 1 49%;
            padding-right:30px;
            ${xl(`      
                padding-right:22px;
            `)}
            ${lg(`      
                padding-right:0; 
                order:2;
            `)} 
            .video-section {
              video {
                display:block;
                width:100%;
              }
            }
          }
          &.colDetails {
              flex: 0 1 51%;
              padding-left:30px; 
              ${xl(`      
                padding-left:22px;
            `)}
            ${lg(`      
                padding-left:0;
                order:1;
                padding-bottom: 40px;
            `)}  
            ${md(`
                padding-bottom: 20px;
              `)}  
          }
          figure {
            margin: 0;
            margin-top: 0;
            margin-left: -17px;
            width:calc(100% + 17px);
            ${xl(`
                margin-top: 0px;
                margin-left: -10px;
            `)}
            ${lg(`
                margin-left: 0;
                width:100%;
                margin-bottom:0;
            `)} 
          }
          p {
            margin:0px;
          }
        } 
        &:nth-child(even) {
          .col {  
            &.colDetails {
              order: 1;
              padding-right: 30px;
              padding-left: 0;
              ${lg(`
                padding: 0;
                order: 1;
                padding-bottom: 40px;
              `)} 
              ${md(`
                padding-bottom: 20px;
              `)} 
            }
            &.colImages {
              order: 2;
              padding-left: 30px;
              padding-right: 0px;
              ${lg(`
                padding: 0 0 00px;
                order: 2;
              `)} 
            }
          }
        }
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
    .bottomContent {
      margin-top:36px;
      ${lg(`
        margin-top:30px;
      `)} 
      ${md(`
        margin-top:20px;
      `)} 
    }
  }
`
