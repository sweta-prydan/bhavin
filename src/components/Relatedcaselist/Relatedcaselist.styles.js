import styled from 'styled-components'
import { lg, md } from '../../config/variables'

export const RelatedcaselistStyles = styled.div`
  margin-bottom: 110px;
  ${md(`   
      margin-bottom: 40px;
  `)}
  h2 {
    margin-bottom: 48px;
    ${lg(`   
      margin-bottom: 34px;
  `)}
  }
  .case-listing {
    display: flex;
    justify-content: space-between;
    ${lg(`   
      flex-direction: column;
    `)}
  }
`
