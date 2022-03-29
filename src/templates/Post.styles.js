import styled from 'styled-components'

import { lg, sh, md, xl, sm } from '../config/variables'

export const IndexStyle = styled.section`

font-size: 18px;
    line-height: 28px;
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

.article-card {
  display:block
  background: #fff; 
  border-radius: 5px; 
  box-shadow: 0 -2px 20px rgb(0 0 0 / 12%); 
  padding-bottom:30px ; 
  margin:40px; 
  width: 75%;
  margin: 20px; 
  padding:30px;
  margin-top: 50px; 
  a {
    color: #6a6a6a;
    :hover{
      color: #171c3f;

    }
  }
 
${sh(`
 
`)}
${xl(`
 
`)}
${lg(`
 
`)}
${md(`
width: 100%;
box-shadow: none; 
 
margin: 0px;  
`)}

${sm(`
width: 100%;
box-shadow: none; 
`)}
}


 
}  

.page {
  padding :20px; 
  margin-bottom: 100px;
  
  position: relative;
 
  border-radius: 5px; 
  text-align:left; 
 
   
${sh(`
 
`)}
${xl(`
 
`)}
${lg(`
 
`)}
${md(`
width: 100%;
box-shadow: none; 
`)}
  
  
${sm(`
width: 100%;
box-shadow: none;  
`)}
}

`
