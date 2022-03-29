import styled from 'styled-components'
import { themeColor, headingFont, xl, lg, md, sh } from '../../config/variables'

export const SinglerelatedcasestudyStyles = styled.div`
  max-width: 544px;
  width: 100%;
  padding-top: 20px;
  ${sh(`   
      max-width: 500px;
  `)} 
  ${xl(`   
      max-width: 450px;
  `)} 
  ${lg(`   
      max-width: 100%;
      margin-bottom:30px;
  `)} 
  ${md(`   
      padding-top: 16px;
  `)} 
  &:last-child{
    ${lg(`   
      margin-bottom:0px;
  `)} 
  ${md(`   
      margin-bottom:0px;
  `)} 
  }
  &.light-peach {
    .content-wrap {
      background: linear-gradient(
        238deg,
        rgba(255, 240, 225, 0.7),
        rgba(255, 238, 219, 0.7)
      );
      .case-bg {
        background: #ffe1c1;
      }
    }
  }
  &.pale-mauve-three {
    .content-wrap {
      background-image: linear-gradient(238deg, rgba(255, 229, 250, 0.7), rgba(255, 232, 251, 0.7));
      .case-bg {
        background: #ffdcf9;
      }
    }
  }
  &.duck-egg-blue {
    .content-wrap {
      background-image: linear-gradient(122deg, rgba(222, 255, 252, 0.7), rgba(207, 254, 250, 0.7));
      .case-bg {
        background: #c2f4f0;
      }
    }
  }
  &.powder-blue {
    .content-wrap {
      background-image: linear-gradient(238deg, rgba(218, 226, 240, 0.68), rgba(205, 213, 228, 0.68));
      .case-bg {
        background: #cdd3e2;
      }
    }
  }
  &.light-peach-five{
    .content-wrap {
      background-image: linear-gradient(238deg, rgba(242, 242, 242, 0.7), rgba(245, 245, 245, 0.7));
      .case-bg {
        background: #e2dede;
      }
    }
  }
  &.soft-pink-two{
    .content-wrap {
      background-image: linear-gradient(238deg, rgba(255, 220, 222, 0.7), rgba(252, 212, 215, 0.7));
      .case-bg {
        background: #f9bbc0;
      }
    }
  }
  &.pale-blue{
    .content-wrap {
      background-image: linear-gradient(238deg, rgba(231, 237, 249, 0.7), rgba(218, 228, 246, 0.7));
      .case-bg {
        background: #d6e3fb;
      }
    }
  }
  &.robin-egg-blue{
    .content-wrap {
      background-image: linear-gradient(238deg, rgba(188, 238, 242, 0.7), rgba(174, 232, 236, 0.7));
      .case-bg {
        background: #97e4ea;
      }
    }
  }
  &.bluegrey{
    .content-wrap {
      background-image: linear-gradient(238deg, rgba(166, 211, 239, 0.7), rgba(160, 207, 237, 0.7));
      .case-bg {
        background: #7cb1d3;
      }
    }
  }
  &.pale-peach{
    .content-wrap { 
      background-image: linear-gradient(238deg, rgba(255, 244, 210, 0.59), rgba(246, 229, 181, 0.59) 0%);
      .case-bg {
        background: #ffebb0;
      }
    }
  }
  &.mint{
    .content-wrap { 
      background-image: linear-gradient(238deg, rgba(211, 241, 218, 0.7), rgba(221, 250, 228, 0.7) 0%);
      .case-bg {
        background: #a7efb8;
      }
    }
  }
  &.light-lavender{
    .content-wrap { 
        background-image: linear-gradient(238deg, rgba(244, 230, 255, 0.7) 100%, rgba(242, 226, 255, 0.7) 0%);
      .case-bg {
        background: #e3beff;
      }
    }
  }
  &.pastel-blue{
    .content-wrap { 
      background-image: linear-gradient(238deg, rgba(212, 220, 255, 0.7), rgba(231, 236, 255, 0.7) 0%);
      .case-bg {
        background: #b1bef3;
      }
    }
  }
  .content-wrap {
    position: relative;
    width: calc(100% - 20px);
    background: linear-gradient(
      238deg,
      rgba(226, 247, 255, 0.7),
      rgba(225, 246, 255, 0.7)
    );
    display: flex; 
    padding: 20px;
    ${xl(`   
         padding: 15px;
      `)} 
      ${md(`   
      width: calc(100% - 16px);
      padding: 16px 13px 16px 16px;
      justify-content: flex-start;
    `)} 
    .case-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -20px;
      right: -20px;
      z-index: -1;
      background: #cceffd;
      ${md(`   
       top: -16px;
      right: -16px;
      `)} 
    }
    .img-blk {
      max-width: 220px;
      width: 100%;
      margin-right: 34px;
      
      ${xl(`   
      max-width: 179px;
      margin-right: 20px;
      `)} 
      ${md(`   
      max-width: 110px;
      margin-right: 13px;
      `)} 
    }
    .content-blk {
      max-width: calc(100% - 254px);
      position: relative;
      padding-bottom: 110px;
      ${xl(`   
      max-width: calc(100% - 199px);
      padding-bottom: 78px;
      `)} 
      ${md(`   
        max-width: calc(100% - 123px);
        padding-bottom: 0;
      `)} 
      h4 {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 11px;
        margin-top: 7px;
        ${xl(`   
         font-size: 20px;
        line-height: 26px;
        margin-bottom: 10px;
      `)} 
       ${md(`   
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 10px;
      `)} 
      }
      p {
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 17px;
        ${md(`   
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 20px;
      `)} 
      }
      .btn-readmore {
        font-size: 22px;
        color: ${themeColor};
        font-family: ${headingFont};
        line-height: 28px;
        position: absolute;
        bottom: 28px;
        left: 0;
        ${md(`   
          font-size: 12px;
          line-height: 16px;
          margin-bottom: 15px;
          position: relative  ;
          bottom: 0;
        `)} 
        &:before {
          content: '';
          width: 74px;
          height: 2px;
          position: absolute;
          top: -26px;
          left: 0;
          background: ${themeColor};
          ${xl(`   
            top: -18px;
          `)} 
          ${md(`   
          top: -11px;
        `)} 
        }
      }
    }
  }
`
