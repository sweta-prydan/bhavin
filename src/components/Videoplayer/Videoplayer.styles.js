import styled from 'styled-components'
import { themeColor } from '../../config/variables'

export const VideoplayerStyles = styled.div`
  position: relative;
  &:hover {
    .PlayButton {
      &.Pause {
        opacity: 1;
      }
    }
  }
  .PlayButton {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0;
    border: 0;
    outline: 0;
    background: #fff;
    filter: drop-shadow(0px 0px 50px #000);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -30px 0 0 -30px;
    &.Play {
      .play-pause__playhead {
        transform: scaleX(1);
      }
      .play-pause__pausehead {
        transform: scaleX(0);
      }
    }
    &.Pause {
      opacity: 0;
      transition: all 0.3s;
      .play-pause__playhead {
        transform: scaleX(0);
      }
      .play-pause__pausehead {
        transform: scaleX(1);
      }
    }
    .play-pause__playhead {
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 12px 0 12px 18px;
      border-color: transparent transparent transparent ${themeColor};
      transform-origin: 100% 50%;
      transition: all 0.3s;
      position: relative;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -12px;
      margin-left: -6px;
    }
    .play-pause__pausehead {
      display: flex;
      width: 22px;
      height: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: scaleX(0);
      transform-origin: 0 50%;
      transition: all 0.3s;
      margin: -12px 0 0 -11px;
      .pause_icon {
        flex: 1;
        width: 30%;
        height: 100%;
        background: ${themeColor};
        &:last-child {
          margin-left: 4px;
        }
      }
    }
  }
`
