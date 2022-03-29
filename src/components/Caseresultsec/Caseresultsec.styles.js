import styled from 'styled-components'
import { bodyFont, md, xl, lg, sm } from '../../config/variables'

export const CaseresultsecStyles = styled.div`
  padding-bottom: 95px;
  position: relative;
  margin-bottom: 126px;
  ${xl(`
      margin-bottom: 100px;
  `)}
  ${lg(`
    margin-bottom: 90px;
    padding-bottom: 80px;
  `)}
  ${md(`
       margin-bottom: 40px;
       padding-bottom: 40px;
  `)}  
  &:after {
    position: absolute;
    content: '';
    background: linear-gradient(to bottom, rgba(252, 253, 255, 0), #f7f7f7);
    width: 100%;
    height: 676px;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  .video-section {
    width: 100%;
    position: relative;
    margin-bottom: 90px;
    ${xl(`
      margin-bottom: 78px;
    `)}
    ${lg(`
      margin-bottom: 50px;
    `)}
    ${md(`
      margin-bottom: 26px;
    `)}
    video{
      width: 100%;
      height: auto;
    }
    .video-bg {
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      right: 0;
      top: 0;
      position: absolute;
      background: #b6c3d8;
      opacity: 0.3;
      z-index: -1;
      ${lg(`
        width: calc(100% - 16px);
        height: calc(100% - 16px);
      `)}
      ${md(`
        width: calc(100% - 10px);
        height: calc(100% - 10px);
      `)}
    }
    .video-blk {
      width: calc(100% - 20px);
      background: rgba(182, 195, 216, 0.3);
      text-align: center;
      display: flex;
      ${lg(`
        width: calc(100% - 16px);
      `)}
      ${md(`
        width: calc(100% - 10px);
      `)}
      img {
        display: block;
        margin: 0 auto;
        margin-top: -39px;
        ${lg(`
          margin-top: -23px;
          max-width: 472px;
          width:100%;
        `)}
        ${md(`
          margin-top: -10px;
          max-width: 320px;

        `)}
        ${sm(`
          margin-top: -10px;
          max-width: 194px;

        `)}
      }
    }
  }
  .youtube-video-section {
    width:100%;
    margin-bottom: 120px;
    iframe {
      width:100%;
    }
  }
  .result-sec {
    display: flex;
    justify-content: space-between;
    ${md(`
        flex-direction: column;
      `)}
    .left-part {
      max-width: 200px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      ${xl(`
        padding-right: 40px;
      `)}
      ${lg(`
        max-width: 152px;
        padding-right: 27px;
      `)}
      ${md(`
        max-width:100%;
      `)}
      .bottom-content {
        position: relative;
        padding-top: 21px;
        margin-bottom: 42px;
        ${md(`
          display:none;
        `)}
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
      .case-images {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: calc(100% + 60px);
        margin-left: -30px;
        ${md(`
            width: calc(100% + 20px);
            margin-left: -20px;
          `)}
        .img-blk {
          max-width: 309px;
          width: 100%;
          ${xl(`
            max-width: 257px;
          `)}
          ${lg(`
            max-width: 33.33%;
          `)}
        }
      }
    }
  }
`
