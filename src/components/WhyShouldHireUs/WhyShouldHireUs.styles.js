import styled from 'styled-components'
import { sh, md, sm, xl, lg } from '../../config/variables'

export const WhyShouldHireUsStyle = styled.section`
  margin: 0 0 45px 0;
  ${md(`
    margin: 0 0 15px 0;
  `)}
  .heading {
    h2 {
      font-size: 42px;
      margin-bottom: 17px;
      ${md(`
        font-size: 36px;
      `)}
    }
    p {
      font-size: 25px;
      line-height: 34px;
      letter-spacing: -0.15px;
      ${md(`
        font-size: 18px;
        line-height: 28px;
      `)}
    }
  }
  .container{
    max-width: 1148px;
    .our-service-list {
      margin-top: 80px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      ${lg(`
        flex-wrap: nowrap;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      `)}
      ${md(`
        margin-top: 50px;
      `)}
      .service-single {
          max-width: 320px;
          min-width: 320px;
          position: relative;
          flex-direction: column;
          padding: 30px;
          text-align: left;
          align-items: flex-start;
          margin-bottom: 44px;
          ${sh(`
            max-width: 310px;
            padding: 27px;
            min-width: 310px;
          `)}
          ${xl(`
              max-width: 301px;
              min-width: 301px;
          `)}
          ${lg(`
              max-width: 290px;
              min-width: 290px;
              margin-right: 30px;
          `)}
          ${md(`
              padding: 25px;
              max-width: 280px;
              min-width: 280px;
              margin-right: 20px;
          `)}
          ${sm(`
              padding: 20px;
              max-width: 260px;
              min-width: 260px;
          `)}
          .service-img-blk {
            width: 89px;
            height: 89px;
            margin: 0;
            margin-bottom: 26px;
            ${sh(`
              width: 80px;
              height: 80px;
            `)}
            img {
              width: 100%;
            }
            ${md(`
                {
                width: 60px;
                height: 60px;
                margin-bottom: 15px;
              }
            `)}
          }
          .service-content-blk{
            h4{
              font-size: 21px;
              line-height: 27px;
              margin-bottom: 11px;
            }
            p{
              font-size: 18px;
              line-height: 25px;
              letter-spacing: -0.15px;
            }
          }
        }
    }
  }
`
