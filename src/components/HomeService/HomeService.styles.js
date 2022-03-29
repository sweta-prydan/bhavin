import styled from 'styled-components'
import { md, sm, sh, device } from '../../config/variables'

export const HomeServicestyle = styled.section`
  .indicator-container{
    width: 180px;
    height: 1px;
    background: #dddddd;
    margin: 0 auto;
    position: relative;
    margin-top: 20px;  
    .indicator-inner{
      width: 40px;
      height: 6px;
      left: 0;
      position: absolute;
      top: -6px;
      background: #6a6a6a;
    }
    ${device(`
      display:none;
    `)}
  }
  overflow: hidden;
  .heading-wrapper{
    ${md(`
      padding: 0 15px;
    `)}
  }
  .home-service-list-wrap {
    overflow: hidden;
    position: relative;
    ${device(`
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    `)}
    .home-service-list {
      padding: 40px 0 80px;
      align-items: stretch;
      padding-left: calc((100vw - 1140px)/2);
      display: flex;
      ${md(`
        padding: 40px 0 40px;
      `)}
      .single-service-wrap{
        position: relative;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar { width: 0 !important }  
        &:nth-child(3n) {
          top: 30px;
        }
        .service-single {
          height: 100%;
          margin: 0 18px;
          min-width: 354px;
          position: relative;
          padding: 20px 18px 22px;
          ${sh(`
            margin: 0 19px;
            padding: 18px 18px 20px;
          `)}
          ${md(`
            margin: 0 15px;
            padding: 20px 18px;
            `)}
          ${sm(`
            margin: 0 12px;
            min-width: 280px;
            padding: 17px;
            `)}
          .service-img-blk{
            margin-right: 18px;
            ${md(`
              margin-right: 16px;
            `)}
            ${sm(`
              position: absolute;
              top: 17px;
              left: 17px;
              margin: 0;
            `)}
          }
          .service-content-blk{
            h4{
              ${sm(`
                min-height: 50px;
                padding-left: 62px;
              `)}
            }
          }
        }
      }
    }
  }
`
