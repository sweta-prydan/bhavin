import styled from 'styled-components'
import { lg, sm, themeGrn, themeColor, headingFont, sh } from '../../config/variables'

export const TechstacksStyle = styled.section`
  .tabbing-section {
    text-align: center;
    max-width: 860px;
    margin: 0 auto;
    margin-top: 60px;
    width: 100%;
    ${sh(`
      margin-top: 54px;
    `)}
    ${sm(`
      margin-top: 25px;
      `)}
    .tabs-nav {
      display: inline-block;
      margin-bottom: 50px;
      position: relative;
      ${lg(`
        width: 100%;
        white-space: nowrap;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        `)}
      ${sm(`
        margin-bottom: 30px;
        `)}
      .tab-line {
        position: absolute;
        bottom: -15px;
        transition: all 0.3s ease;
        height: 3px;
        margin:0;
        border: 0;
        background: #ff017d;
        ${lg(`
          bottom: 0;
          `)}
      }
      li {
        list-style: none;
        padding: 7px 20px;
        display: inline-block;
        font-size: 18px;
        color: #6a6a6a;
        font-weight: 700;
        line-height: 23px;
        font-family: ${headingFont};
        cursor: pointer;
        transition: all 0.3s ease;
        ${sh(`
          font-size: 16px;
          line-height: 21px;
        `)}
        ${sm(`
          font-size: 16px;
          padding: 7px 15px;
          `)}
        &.active {
          color: ${themeColor};
          
        }
      }
    }
    .tabcontent-wrap {
      position: relative;
      .tabcontent {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        transition: all 0.3s ease;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        &.active {
          opacity: 1;
          position: relative;
        }
        .tabcontent-blk {
          width: 166px;
          background: #fff;
          box-shadow: 0 -2px 20px rgb(0 0 0 / 12%);
          margin: 0 3px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 13px;
          min-height: 93px;
          ${sh(`
            width: 150px;
            padding: 6px 12px;
            min-height: 84px;
          `)}
          ${sm(`
            width: 47%;
            padding: 6px 10px;
            min-height: 50px;
            `)}
          img {
            display: block;
            ${sh(`
              transform: scale(0.85);
            `)}
            ${sm(`
              max-height: 50px;
              `)}
          }
        }
      }
    }
  }
`
