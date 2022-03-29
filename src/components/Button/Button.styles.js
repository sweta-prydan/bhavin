import styled from 'styled-components'
import { Link } from 'gatsby'
import { black, white, themeColor, md, sm, sh } from '../../config/variables'

export const ButtonStyle = styled(Link)`
  font-size: 19px;
  line-height: 27px;
  letter-spacing: -0.16px;
  text-align: center;
  color: ${black};
  background: ${white};
  border: 1px solid ${themeColor};
  border-radius: 4px;
  padding: 9px 30px 11px;
  position: relative;
  overflow: hidden;
  display:inline-block;
  transition-delay: 0s, .15s;
  transition: color 0.2s ease-in-out, background-color 0.1s ease 0.02s;
  &:hover {
    color: ${white};
    background-color:${themeColor}; 
    transition-delay: 0s, .15s; 
  } 
  span {
    position: relative;
    font-weight:700;
  z-index: 10;
  }
  ${sh(`
    font-size: 16px;
    line-height: 24px;
    padding: 9px 27px 11px;
  `)}
  ${md(`
    font-size: 18px;
    line-height: 26px;
    padding: 8px 24px 10px;
    `)}
  ${sm(`
    font-size: 16px;
    line-height: 22px;
    padding: 9px 20px 10px;
    `)} 
  &:after,
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width:101%;
    right:0;
    top: 0;
    left: 0;
    transform: translate(0);
    background: ${themeColor};
  }
  &:before {
    transform: translateY(-100%);
    transition: transform 15ms ease-in-out;
  }
  &:after {
    transform: translateY(100%);
    transition: transform 0.2s  ease-in-out;
  }
  &:hover:before {
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;
  }
  &:hover:after {
    transform: translateY(0);
    transition: transform 0ms ease-in-out;
    transition-delay: 0.2s;
  }
`
