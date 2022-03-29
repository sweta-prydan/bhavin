import styled from 'styled-components'
import { bodyFont, lg, md } from '../../config/variables'

export const CaseintroductionStyles = styled.div`
  margin-bottom: 73px;
  ${lg(`
    margin-bottom: 60px;
  `)}
  ${md(`
    margin-bottom: 40px;
  `)}
  p {
    margin-bottom: 43px;
  }
  .sub-content {
    h3 {
      font-family: ${bodyFont};
      font-weight: 500;
      margin-bottom: 23px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      ${md(`
        flex-direction: column;
      `)}
      .col {
        width: 47.5%;
        ${md(`
        width: 100%;
      `)}
        &:last-child {
          p {
            ${md(`
        margin-bottom:0px;
      `)}
          }
        }
      }
    }
  }
`
