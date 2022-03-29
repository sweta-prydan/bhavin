import styled from 'styled-components'
import { xl, lg, md, metaFont, primaryColor } from '../../config/variables'

export const FasterdevelopmentsecStyles = styled.div`
  margin-bottom: 73px;
  position: relative;
  ${xl(`
      margin-bottom: 60px;
  `)}
  ${lg(`
      margin-bottom: 50px;
  `)}
  ${md(`
      margin-bottom: 40px;
  `)}

  .row {
    display: flex;
    justify-content: space-between;
    ${md(`
        flex-direction: column;
    `)}
    .col-head {
      max-width: 272px;
      flex: 0 1 272px;
      width: 100%;
      padding-right:32px;
      ${lg(`
          max-width: 152px;
          padding-right:20px;
      `)}
      ${md(`
          max-width: 100%;
          flex:1 1 auto;
          padding-right:0px;
      `)}
    h3 {
        font-size: 30px;
        line-height: 50px;
        font-family: ${metaFont};
        ${lg(`
          font-size: 22px;
            line-height: 35px;
            word-break:break-word;
        `)}
        ${md(`
            font-size: 18px;
            line-height:26px;
            word-break:break-word;
        `)}
      }
    }
    .col-content {
       flex: 1 1 700px;
       ${md(`
        flex: 1 1 auto;
        `)} 
        .DevservicBottomContent {
          p {
            margin-bottom:0px;
          }
        }
    }
    .FasterDevservicesRow {
        display:flex;
        flex-wrap:wrap;
        margin:0 -22.5px 10px;
        ${xl(`
              margin-bottom:18px;
          `)}
        ${md(`
            flex-direction:column;
        `)}
        .FasterDevServicCol {
            flex:  0 1 33.33%;
            padding:0 22.5px;
        }
        .FasterDevServiceBox {
            background-image: linear-gradient(135deg, rgba(222, 255, 252, 0.7), rgba(207, 254, 250, 0.7));
            width:100%;
            height:220px;
            position:relative;   
            padding:30px 15px 20px 30px;
            margin-bottom:50px;
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            ${xl(`
              padding:30px 15px 20px 20px;
              height:171px;
              margin-bottom:38px;
          `)}
          ${lg(`
              padding:7px 12px 9px 19px;
              height:136px;
              margin-bottom:30px;
          `)}
          ${md(`
              padding:7px 26px 9px 32px;
              height:238px;
              margin-bottom:30px;
          `)}
           .FasterDevServiceBoxBg {
                position:absolute;
                content:"";
                top:-8px;
                right:-8px;
                width:100%;
                height:100%;
                z-index:-1;
                background:#c2f4f0;
           }
           &.light-peach {
            background-image: linear-gradient(225deg, rgba(255, 240, 225, 0.7), rgba(255, 238, 219, 0.7));
            .FasterDevServiceBoxBg {
              background:#ffe1c1;
            }
           }
           &.light-sky-blue {
              background-image: linear-gradient(225deg, rgba(226, 247, 255, 0.7), rgba(225, 246, 255, 0.7));
              .FasterDevServiceBoxBg {
                background:#cceffd;
              }
            } 
            &.powder-blue {
            background-image: linear-gradient(225deg, rgba(218, 226, 240, 0.68), rgba(205, 213, 228, 0.68));
            .FasterDevServiceBoxBg {
              background:#cdd3e2;
            }
           }
           &.pale-mauve-two {
            background-image: linear-gradient(225deg, rgba(255, 229, 250, 0.7), rgba(255, 232, 251, 0.7));
            .FasterDevServiceBoxBg {
              background:#ffdcf9;
            }
           }
           &.light-peach-five {
              background-image: linear-gradient(225deg, rgba(242, 242, 242, 0.7), rgba(245, 245, 245, 0.7));
              .FasterDevServiceBoxBg {
                background:#e2dede;
              }
            }
           img {
             margin-bottom:10px;
             ${xl(`
                max-width:40px;
            `)}
            ${lg(` 
              max-width:30px;
              margin-bottom:6px;
          `)}
          ${md(` 
              max-width:54px;
              margin-bottom:14px;
          `)}
           }
           p{
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            color:${primaryColor};
            margin:0px;
            ${xl(`
              font-size: 15px;
                line-height: 18px;
            `)}
            ${lg(`
                font-size: 12px;
                line-height: 15px;
            `)}
            ${md(`
                font-size: 20px;
                line-height: 28px;
            `)}
           }
    }
  }
  .FasterDevservicContent {
      margin-bottom:70px;
      ${md(`
       margin-bottom:50px;
    `)}
}
`
