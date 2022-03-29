import styled from 'styled-components'
import { lg, md, xl, xll, sm } from '../../config/variables'

export const ResultimgsectionStyles = styled.div`
  padding: 58px 0 38px;
  position: relative;
  margin-bottom: 180px;
  background: #cce7ff;
  border: 1px solid #99cfff;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.06),
    0 3px 5px -1px rgba(0, 0, 0, 0.1);
  
  ${xl(`
      margin-bottom: 100px;
  `)}
  ${lg(`
      margin-bottom: 60px;
  `)}
  ${md(`
      padding: 30px 0 20px;
      margin-bottom: 40px;
  `)}
  .container {
    display: flex;
    justify-content: flex-start;
    .content-blk {
      flex: 0 1 534px;
      ${xl(`
        flex: 1 1 auto;
        padding-bottom:36px;
      `)} 
      ${lg(`
        flex: 1 1 auto;
        padding-bottom:36px;
      `)} 
      ${md(`
        padding-bottom:06px;
      `)} 
      h3 {
        font-size: 38px;
        line-height: 48px;
        letter-spacing: -0.41px;
        margin-bottom: 18px;
      }
    }
  }
  .img-blk {
    position: absolute;
    bottom: -50px;
    right: -1px;
    width: 741px;
    overflow:hidden;
    ${xll(`
      width: 640px;
    `)} 
    ${xl(`
      position: static;
      width:100%;
      padding:0 40px;
    `)} 
    ${lg(`
      position: static;
      width:100%;
      padding:0 40px;
    `)} 
    ${md(`
      padding:0 30px;
    `)} 
    ${sm(`
      padding:0 20px;
    `)} 
    .imageWrap {
      width:883px;
      ${xll(`
        width: 710px;
      `)} 
      ${xl(`
        width: 100%;
      `)} 
      ${lg(`
        width: 100%;
      `)} 
    }
  }
`
