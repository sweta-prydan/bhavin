import styled from 'styled-components'
import { md, sm, themeColor, lg, white, sh } from '../../config/variables'
import { images } from '../../config/images'

export const BuildAppStyle = styled.section`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: calc(100% + 110px);
    background-image: linear-gradient(to bottom,rgba(242,220,204,0),#fff);
    top: -110px;
    left: 0;
    z-index: -1;
  }
  .heading-para {
    max-width: 690px;
    margin: 0 auto;
    text-align: center;
    ${sh(`
      max-width: 615px;
    `)}
    ${md(`
      display: none;
    `)}
    p {
      font-size: 24px;
      letter-spacing: -0.15px;
      line-height: 33px;
      margin-bottom: 34px;
      ${sh(`
        font-size: 21px;
        line-height: 30px;
      `)}
      ${md(`
        font-size: 20px;
        line-height: 24px;
      `)}
      ${sm(`
        font-size: 18px;
        line-height: 28px;
        `)}
    }
  }
  .app-video-wrapper {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 85px;
    ${sh(`
      max-width: 615px;
      margin-bottom: 77px;
    `)}
    ${lg(`
      max-width: 640px;
    `)}
    ${md(`
      margin-top: 40px;
      margin-bottom: 60px;
    `)}
  .app-video-block {
    position: relative;
    padding-bottom:56.21%;
    border-radius: 5px;  
    overflow: hidden;
    &.active{
      &:hover{
        .full-screen{
          /* opacity: 1;
          visibility: visible;
          pointer-events: auto;       */
        }
      }
      .poster-wrapper{
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
    }
    .poster-wrapper{
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      top: 0;
      left: 0;
      transition: all 0.5s ease-in-out;
      opacity: 1;
      visibility: visible;
    }
    .full-screen{
      position: absolute;
      bottom: 10px;
      right: 10px;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: all 0.5s ease-in-out;
      img{
        display: block;
      }
    }
    video{
      width: 100%;
      /* &::-webkit-media-controls-timeline {
          display: none;
      }
      &::-webkit-media-controls {
          display: none;
      } */
      &::-webkit-media-controls-play-button, &::-webkit-media-controls-timeline, &::-webkit-media-controls-current-time-display, &::-webkit-media-controls-time-remaining-display, &::-webkit-media-controls-time-remaining-display, &::-webkit-media-controls-mute-button, &::-webkit-media-controls-toggle-closed-captions-button, &::-webkit-media-controls-volume-slider{
        display: none;
      }
    }
    iframe{
      width: 100%;
      height:100%;
      top:0;
      left:0;
      position: absolute;
    }
    audio{
      &::-webkit-media-controls-timeline{
        display: none;
      }
      &::-webkit-media-controls{
        display: none;
      }
    }
    iframe{
      width: 100%;
    }
    .btn-sound{
      width: 34px;
      height: 34px;
      background-image: url(${images.mute});
      background-color: rgba(0,0,0,0.3);
      background-position: 50% 50%;
      background-repeat: no-repeat;
      position: absolute;
      top: 15px;
      right: 15px;
      border-radius: 5px;
      cursor: pointer;
      ${sh(`
        width: 30px;
        height: 30px;
        background-size: 18px;
      `)}
      &.unmute{
        background-image: url(${images.unmute});        
      }
    }
    &.active{
      .play-pause-buttton{
        opacity: 0;
        visibility:hidden;
        pointer-events: none;
      }
    }
    .play-pause-buttton {
      width: 70px;
      height: 70px;
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${themeColor};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      outline: none;
      box-shadow: inherit;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      ${sh(`
        width: 62px;
        height: 62px;
        bottom: 22px;
      `)}
      ${sm(`
        width: 50px;
        height: 50px;
        bottom: 15px;
      `)}
      svg {
        margin-right: -4px;
        ${sh(`
          width: 14px;
        `)}
        ${sm(`
          width: 19px;
        `)}
        path + path{
          transition: all 0.5s ease-in-out;
        }
      }
      &:hover{
        background: ${white};
        svg {
          path + path{
            fill: ${themeColor}
          }
        }
      } 
    }
    .video-desc-block {
      max-width: 330px;
      width: 100%;
      position: absolute;
      top: 50%;
      left: calc(50% + 50px);
      transform: translateY(-50%);
      ${sh(`
        max-width: 280px;
      `)}
      ${lg(`
        max-width: 290px;
      `)}
      ${md(`
        left: 0;
        right: 0;
        margin: 0 auto;
        top: calc(50% + 40px);
        transform: initial;
      `)}
      ${sm(`
        max-width: 245px;
      `)}
      .video-des-bg {
        background-color: ${themeColor};
        background-repeat: repeat;
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 3px;
        ${sm(`
          width: calc(100% - 7px);
          height: calc(100% - 7px);
        `)}
      }
      .video-desc-content {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        border-radius: 3px;
        background: ${white};
        padding: 12px 18px 14px;
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        margin-top: 10px;
        position: relative;
        z-index: 1;
        ${sh(`
          font-size: 16px;
          line-height: 20px;
        `)}
        ${lg(`
          font-size: 16px;
          padding: 10px 12px;
        `)}
        ${md(`
          display: none;
        `)}
      }
    }
  }
  }
`
