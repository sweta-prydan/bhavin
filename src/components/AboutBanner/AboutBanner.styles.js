import styled from 'styled-components'
import { lg, sm, md, sh } from '../../config/variables'

export const AboutBannerStyle = styled.section`
  padding-top: 107px;
  margin-bottom: 75px;
  text-align: center;
  position: relative;
  ${sh(`
    padding-top: 96px;
    margin-bottom: 67px;
	`)}
  ${lg(`
    padding-top: 117px;
    margin-bottom: 60px;
  `)}
  ${md(`
    padding-top: 90px;
  `)}
  ${sm(`padding-top: 70px`)}
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 80%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .banner-content {
    max-width: 900px;
    margin: 0 auto;
    h1{
      margin-bottom: 43px;
      ${md(`margin-bottom: 20px`)}
    }
    .heading-red {
      background-image: linear-gradient(100deg, #6a6a6a, #ff017d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      font-size: 23px;
      line-height: 32px;
      margin-bottom: 30px;
      ${sh(`
        font-size: 21px;
        line-height: 30px;
        margin-bottom: 27px;
      `)}
      ${md(`
        font-size: 20px;
        line-height: 30px;
      `)}
    }
  }
  .banner-img {
    margin: 10px 0 50px;
    img{
    }
    ${sh(`
      max-width: 70%;
      margin: 0 auto;
      margin-bottom: 40px;
		`)}
    ${sm('margin: 20px 0')}
  }
`
