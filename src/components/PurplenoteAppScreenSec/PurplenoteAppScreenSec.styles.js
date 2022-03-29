import styled from 'styled-components'
import { xl, lg, md } from '../../config/variables'
import { images } from '../../config/images'

export const PurplenoteAppScreenSecStyles = styled.div`
    margin-bottom: 128px;
    ${xl(`
        margin-bottom: 100px;
    `)}
    ${lg(`
        margin-bottom: 90px;
    `)} 
    ${md(`
        margin-bottom: 40px;
    `)} 
    .AppScreenMain {
    background:url('${images.purplenotesAppSecBg}');
    padding:0 70px;
    background-size: 100% 100%;
    overflow:auto;
    ${xl(`
        padding:80px;
    `)} 
    ${lg(`
        padding:45px;
    `)} 
    ${md(`
        padding:15px;
    `)} 
    .AppScreenRow {
        width:100%;
        display:flex;
        align-items:flex-start;
        ${md(`
            width: 507px;
            min-width: 100%;
        `)} 
        .AppScreenItem {
            flex:0 1 33.33%;
            text-align:center;
            padding:0 15px;
            &:nth-child(2) {
                padding-top:80px;
            }
            &:last-child {
                align-self:center;
            }
            .appScreenMockup {
                padding-bottom:80px;
                ${xl(`
                    padding-bottom:70px;
                `)} 
                ${lg(`
                    padding-bottom:50px;
                `)} 
                ${md(`
                    padding-bottom:20px;
                `)} 
                &:last-child {
                    padding-bottom:0px;
                }
            }
        }
    }
}
`
