import styled from 'styled-components'
import { lg, sm, md, sh } from '../../config/variables'

export const BannerStyles = styled.section`
  padding-top: 107px;
  margin-bottom: 100px;
  text-align: center;
  position: relative;
  ${sh(`
    padding-top: 96px;
    margin-bottom: 67px;
	`)}
  ${lg(`
    padding-top: 90px;
    margin-bottom: 60px;
  `)}
  ${md(`
    padding-top: 90px;
  `)}
  ${sm(`padding-top: 80px`)}
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 80%;
    top: 0;
    left: 0;
    z-index: -1;
    /* background-image: linear-gradient(to top, #fff, #f0efff); */
  }
  .banner-content {
    max-width: 900px;
    margin: 0 auto;
    .heading-red {
      background-image: linear-gradient(100deg, #ff017d, #ff017d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }
    p {
      font-size: 25px;
      letter-spacing: -0.15px;
      line-height: 34px;
      margin-bottom: 30px;
      ${sh(`
        font-size: 21px;
        line-height: 30px;
        margin-bottom: 27px;
      `)}
      ${md(`
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 20px;
      `)}
      br{
        ${md(`
          display: none;
        `)}
      }
    }
    .button {
      letter-spacing: 0.025em;
      padding: 9px 20px 11px;
    }
  }
  .banner-img {
    margin-top: 40px;
    img{
    }
    ${sh(`
      max-width: 70%;
      margin: 0 auto;
      margin-top: 30px;
		`)}
    ${sm('margin: 35px 0 20px')}
  }
`
