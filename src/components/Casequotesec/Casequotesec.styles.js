import styled from 'styled-components'
import { images } from '../../config/images'
import { xl, lg, md, metaFont } from '../../config/variables'
export const CasequotesecStyles = styled.div`
  position: relative;
  padding-bottom: 100px;
  margin-top: 93px;
  margin-bottom: 120px;
  ${xl(`
    margin-top: 80px;
    margin-bottom: 100px;
  `)}
  ${lg(`
    margin-top: 67px;
    padding-bottom: 80px;
    margin-bottom: 90px;
  `)}
  ${md(`
    margin-top: 40px;
    padding-bottom: 40px;
    margin-bottom: 40px;
  `)}

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 790px;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(252, 253, 255, 0), #f8f9ff);
    z-index: -1;
  }
  .container {  
      position: relative; 
    .quote-content {
      padding-left: 113px;
      padding-top: 30px;
      width: 100%;
      position: relative; 
      ${md(`
          padding-left: 60px;
          padding-top: 14px;
        `)}
      .iconquote {
        position: absolute;
        width: 83px;
        height: 59px;
        left: 0;
        top: 0;
        background: url(${images.lgQuote});
        ${md(`
          width: 40px;
          height: 28px;
          background-size:cover;
        `)}
      }
      .quote-content-wrapper {
        border-top: 1px solid #e3e3e3;
        padding: 63px 25px 0;
        ${md(`
          padding: 34px 0 0 5px;
        `)}
        .quote {
          font-size: 32px;
          line-height: 50px;
          font-family: ${metaFont};
          font-weight: 700;        
          ${lg(`
            font-size: 30px;
            line-height: 48px;
          `)}
          ${md(`
            font-size: 20px;
            margin-bottom: 20px;
            line-height: 30px;
          `)}
          span {
            color: #00d7fc;
          }
        }
        .user-info {
          margin-top: 31px;
          display: flex;
          align-items: center;
          ${xl(`
            margin-bottom: 25px;
          `)}
          ${md(`
            margin-bottom: 20px;
          `)}
          .user-img {
            width: 50px;
            margin-right: 16px;
          }
          .username {
            font-size: 18px;
            line-height: 24px;
            font-weight: 500;
            ${md(`
            font-size: 17px;
            line-height: 21px;
          `)}
            .designation {
              font-weight: 400;
              position: relative;
              padding-left: 15px;
              margin-left: 15px;
              ${md(`
                  display:block;
                  padding-left: 0;
              margin-left: 0;
              `)}
              &:after {
                content: '';
                position: absolute;
                width: 2px;
                height: 18px;
                background: #6a6a6a;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                ${md(`
                  display:none;
                `)}
              }
            }
          }
        }
      }
    } 
  }
`
