import styled from 'styled-components'
import { xl, lg, md } from '../../config/variables'

export const CasecontentfullwimgStyles = styled.div`
  margin-bottom: 120px;
  ${xl(`
      margin-bottom: 90px;
  `)}
  ${lg(`
      margin-bottom: 60px;
  `)}
  ${md(`
      margin-bottom: 40px;
  `)}
  .container {
    figure {
      ${xl(`
          margin-top: 70px;
          margin-bottom:40px;
      `)} 
      ${lg(`
          margin-top: 50px;
          margin-bottom:40px;
      `)} 
      ${md(`
          margin-top: 40px;
          margin-bottom:26px;
      `)} 
      .img-caption {
        ${xl(`
          margin-top: 27px;
      `)}
        ${lg(`
          margin-top: 27px;
      `)}
      ${md(`
          margin-top: 16px;
      `)}
      }
    }
  }
  .content-container {
    max-width: 867px;
    width: 100%;
    margin: 0 auto;
  }
`
