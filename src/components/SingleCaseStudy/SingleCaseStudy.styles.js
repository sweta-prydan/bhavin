import styled, { keyframes } from 'styled-components'
import {
  sm,
  lg,
  md,
  themeColor,
  primaryColor,
  black,
  sh,
} from '../../config/variables'

const Gradient = keyframes`
  0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`

export const SingleCaeStudyStyle = styled.div`
  max-width: 1068px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  margin-bottom: 40px;
  padding-top: 0px;
  overflow: hidden;
  ${sh(`
    max-width: 940px;
  `)}
  ${sm(`
    padding-top: 12px;
    `)}
  &.alignCenterImg {
    .case-study-wrap {
      .img-block {
        align-items:center;
      }
    }
  }
  &.duck-egg-blue {
    .case-study-bg {
      background: #c2f4f0;
    }
    .case-study-wrap {
      background-image: linear-gradient(
        113deg,
        rgba(222, 255, 252, 0.7),
        rgba(207, 254, 250, 0.7)
      );
      background-size: 400% 400%;
      transition: all 0.3s ease;
    }
  }
  &.light-peach {
    .case-study-bg {
      background: #ffe1c1;
    }
    .case-study-wrap {
      background-image: linear-gradient(
        247deg,
        rgba(255, 240, 225, 0.7),
        rgba(255, 238, 219, 0.7)
      );
      background-size: 400% 400%;
      transition: all 0.3s ease;
    }
  }
  &.light-grey-two {
    .case-study-bg {
      background: #bae597;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(209, 231, 191, 0.7),rgba(222, 254, 197, 0.7));
      background-size: 400% 400%;
      transition: all 0.3s ease;
    }
  }
  &.light-sky-blue {
    .case-study-bg {
      background: #cceffd;
    }
    .case-study-wrap {
      background-image: linear-gradient(
        247deg,
        rgba(226, 247, 255, 0.7),
        rgba(225, 246, 255, 0.7)
      );
      background-size: 400% 400%;
      transition: all 0.3s ease;
    }
  }
  &.very-light-pink-five {
    .case-study-bg {
      background: #ffe7de;
    }
    .case-study-wrap {
      background-image: linear-gradient(
        247deg,
        rgba(255, 244, 240, 0.7),
        rgba(250, 232, 226, 0.7)
      );
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.powder-blue {
    .case-study-bg {
      background: #cdd3e2;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(218, 226, 240, 0.68),rgba(205, 213, 228, 0.68));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.pale-mauve {
    .case-study-bg {
      background: #ffdcf9;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(255, 229, 250, 0.7),rgba(255, 232, 251, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.light-peach-five {
    .case-study-bg {
      background: #e2dede;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(242, 242, 242, 0.7),rgba(245, 245, 245, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.soft-pink {
    .case-study-bg {
      background: #f9bbc0;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(255, 220, 222, 0.7),rgba(252, 212, 215, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
 
  &.pale-blue {
    .case-study-bg {
      background: #d6e3fb;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(231, 237, 249, 0.7),rgba(218, 228, 246, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.robin-egg-blue {
    .case-study-bg {
      background: #97e4ea;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(188, 238, 242, 0.7),rgba(174, 232, 236, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.bluegrey {
    .case-study-bg {
      background: #7cb1d3;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(166, 211, 239, 0.7),rgba(160, 207, 237, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.pale-lilac-two {
    .case-study-bg {
      background: #e3d7ff;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(235, 228, 250, 0.7),rgba(247, 244, 255, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.pale-peach{
    .case-study-bg {
      background: #ffebb0;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(255, 244, 210, 0.59),rgba(246, 229, 181, 0.59));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.mint {
    .case-study-bg {
      background: #a7efb8;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(211, 241, 218, 0.7),rgba(221, 250, 228, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.light-lavender {
    .case-study-bg {
      background: #e3beff;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(244, 230, 255, 0.7),rgba(242, 226, 255, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.pastel-blue {
    .case-study-bg {
      background: #b1bef3;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg,rgba(212, 220, 255, 0.7),rgba(231, 236, 255, 0.7));
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.light-sky-blue {
    .case-study-bg {
      background: #cceffd;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg, rgba(226, 247, 255, 0.7) 100%, rgba(225, 246, 255, 0.7) 0%);
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.pastel-blue {
    .case-study-bg {
      background: #b1bef3;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg, rgba(212, 220, 255, 0.7), rgba(231, 236, 255, 0.7) 0%);
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.mint {
    .case-study-bg {
      background: #a7efb8;
    }
    .case-study-wrap {
      background-image:   background-image: linear-gradient(247deg, rgba(211, 241, 218, 0.7), rgba(221, 250, 228, 0.7) 0%);;
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  &.pale-peach {
    .case-study-bg {
      background: #ffebb0;
    }
    .case-study-wrap {
      background-image: linear-gradient(247deg, rgba(255, 244, 210, 0.7), rgba(246, 229, 181, 0.7) 0%);
      background-size: 400% 400%;
      transition: all 0.5s ease;
    }
  }
  a {
    display: block;
    .case-study-bg {
      max-width: calc(100% - 22px);
     
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      ${sm(`
        max-width: calc(100% - 12px);
       
        `)}
    }
    &:hover {
      .case-study-wrap {
        animation: ${Gradient} 5s ease infinite;
        box-shadow: 5px -5px 30px -10px rgba(0,0,0,0.1);
        transform: translate(3px,-3px);
        ${md(`
          animation: initial;
          box-shadow: inherit;
          transform: inherit;
        `)}
        .content-block {
          h3 {
            color: ${themeColor};
          }
          .line{
            &:before{
              width: 100%;
            }
          }
          .btn-read{
            color: ${black};
          }
        }
      }
    }

    .case-study-wrap {
      max-width: calc(100% - 22px);
      display: flex;
      ${lg(`
        flex-wrap: wrap;
        `)}
      ${sm(`
        max-width: calc(100% - 12px);
        `)}
      .content-block {
        width: 48%;
        padding: 50px 64px 60px 75px;
        ${sh(`
          padding: 54px 58px 68px 68px;
        `)}        
        ${lg(`
          width: 100%;
          padding: 45px 57px 55px 66px;
          `)}
        ${md(`
          padding: 35px 57px 45px 56px;
          `)}
        ${sm(`
          padding: 14px 26px;
          `)}
        h3 {
          font-size: 29px;
          line-height: 37px;
          margin-bottom: 19px;
          color: ${primaryColor};
          transition: all 0.3s ease;
          ${sh(`
            font-size: 26px;
            line-height: 34px;
          `)}
          ${md(`
            font-size: 25px;
            line-height: 32px;
            `)}
          ${sm(`
            font-size: 22px;
            line-height: 30px;
            margin-bottom: 10px;
            `)}
        }
        p {
          font-size: 22px;
          letter-spacing: -0.15px;
          line-height: 29px;
          margin-bottom: 45px;
          color: ${primaryColor};
          transition: all 0.5s ease;
          ${sh(`
            font-size: 20px;
            line-height: 27px;
            margin-bottom: 50px;
          `)}
          ${md(`
            font-size: 20px;
            line-height: 27px;
            margin-bottom: 40px;
            `)}
          ${sm(`
            font-size: 18px;
            line-height: 28px;
            margin-bottom: 30px;
            `)}
        }
        .line {
          width: 60px;
          height: 3px;
          background: ${themeColor};
          border-radius: 1px;
          margin-bottom: 25px;
          display: block;
          transition: all 0.5s ease;
          position: relative;
          ${sh(`
            margin-bottom: 21px;
          `)}
          &:before{
            content: '';
            height: 100%;
            background: ${black};
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            transition: all 0.5s ease;
          }
          ${sm(`
            height: 2px;
            margin-bottom: 20px;
            width: 40px;
            `)}
        }
        .btn-read {
          font-size: 18px;
          line-height: 24px;
          font-weight: 500;
          color: ${themeColor};
          position: relative;
          display: inline-block;
          padding-bottom: 8px;
          transition: all 0.5s ease;
        }
      }
      .img-block {
        width: 52%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        position: relative;
        ${lg(`
          width: 100%;
          `)}
        .gatsby-image-wrapper{
          width: 100%;
        }
        img {
          display: block;
          margin: 0 auto;
          vertical-align: middle;
          ${md(`
            margin: 0 auto;
            `)}
        }
      }
    }
  }
`
