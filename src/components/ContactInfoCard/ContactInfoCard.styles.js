import styled, { keyframes } from 'styled-components'
import { themeColor, white, md, sm, lg, device, xl, sh } from '../../config/variables'
import { images } from '../../config/images'

const bounce = keyframes`
  0% {
    transform: translateX(0);
  }	
	50% {
    transform: translateX(-10px);
  }
`

export const ContactInfoCardStyle = styled.div`
  max-width: 1140px;
  width: 100%;
  background-image: linear-gradient(164deg, #4e66d3, #35439e);
  border-radius: 10px;
  padding: 34px 60px;
  margin: 0 auto;
  transition: all 800ms ease;
  margin-bottom: 50px;
  ${sh(`
    max-width: 1020px;
    padding: 65px 83px;
  `)}
  &.active {
    max-width: 100%;
    border-radius: 0;
    transform: scale(1.1);
    margin-bottom: 0;
    ${device(`
        max-width: 90%;
        transform: initial;
        border-radius: 10px;
        margin-bottom: 40px;
    `)}
  }
  ${xl(`
    max-width: 90%;
    padding: 47px 60px;
    `)}
  ${lg(`
    max-width: 90%;
    padding: 47px 60px;
    `)}
  ${md(`
    padding: 40px;
    `)}
  ${sm(`
    padding: 28px 20px 30px;
    `)}
  .container {
    padding: 0;
    display: flex;
    align-items: center;
    max-width: 100%;
    ${lg(`
      flex-wrap: wrap;
      `)}
    .content-part {
      flex: 1;
      padding-right: 20px;
      position: relative;
      ${lg(`
        flex: 100%;
        margin: 0;
        padding-bottom: 35px;
        `)}
      ${sm(`
        padding-bottom: 15px;
        `)}
        
      h4 {
        font-size: 34px;
        line-height: 48px;
        letter-spacing: -0.37px;
        color: ${white};
        margin: 0;
        ${sh(`
          font-size: 30px;
          line-height: 44px;
        `)}
        ${md(`
          font-size: 28px;
          line-height: 42px;
          `)}
        ${sm(`
          font-size: 20px;
          line-height: 30px;
        `)}
      }
      p {
          color: ${white};  
          font-size:22px;
          line-height:30px;
          font-weight:400;
          margin:0px;
        }
    }
    .button-col{
      position: relative;
      display: flex;
      align-items: center;
      .right-arrow{
        background: url(${images.RightArrow}) no-repeat;
        width: 151px;
        height: 55px;
        margin-right: 36px;
        transition: all 0.3s ease;
        &.enter{
          animation: ${bounce} 2s infinite;
        }
        ${md(`
          display: none;  
        `)}
      }
      .btn-col{
        .sign-blk{
          width: 103px;
          height: 33px;
          display: block;
          margin: 0 auto;
          transition: all 0.3s ease;
          &.active{
            transform: scale(1.05) translateY(-10px);
          }
        }
        .top-sign{
          background: url(${images.topSign});
          ${md(`
            display: none;  
          `)}
        }
        .bottom-sign{
          background: url(${images.bottomSign});
          ${md(`
            display: none;  
          `)}
          &.active{
            transform: scale(1.1) translateY(10px);
          }
        }
        .button {
          background: ${themeColor};
          text-transform: uppercase;
          font-size: 18px;
          font-weight: 600;
          color: ${white};
          letter-spacing: 1.8px;
          padding: 18px 42px 20px;
          line-height: 20px;
          margin: 22px 0 20px;
          ${sh(`
            font-size: 17px;
            padding: 16px 35px 18px;
            line-height: 19px;
          `)}
          ${md(`
            font-size: 16px;
            padding: 12px 35px 16px;
            margin: 12px 0 0;
            `)}
          ${sm(`
            font-size: 14px;
            line-height: 17px;
            padding: 10px 23px 12px;
            `)}
          &:before,
          &:after {
            background: ${white};
          }
          &:hover {
            color: ${themeColor};
          }
        }
      }
    }
  }
`
