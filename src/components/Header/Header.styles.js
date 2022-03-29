import styled from 'styled-components'
import { lg, headingFont, sh, md, xl } from '../../config/variables'

export const HeaderStyle = styled.header`
  width: 100%;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: padding 100ms ease;
  ${lg(`
    padding: 16px 0;
    `)}
  ${sh(`
    padding: 18px 0;
	`)}
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }
  &.sticky {
    padding: 10px 0;
    .navigation-menu {
      > ul {
        > li {
          .submenu {
            top: 48px;
          }
        }
      }
    }
    .mobile-menu {
      .menu-btn {
        top: 15px;
        ${md(`
          top: 13px;
        `)}
      }
    }
    &:after {
      opacity: 1;
    }
  }
  .header-container {
    max-width: 1320px;
    padding: 0px 10px;
    margin: 0px auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${sh(`
      max-width: 1188px;
		`)}
    .button {
      text-transform: uppercase;
      font-size: 14px;
      font-family: ${headingFont};
      font-weight: 500;
      letter-spacing: 1.4px;
      padding: 12px 20px 10px;
      line-height: 21px;
      ${sh(`
        font-size: 12px;
        padding: 11px 16px;
        line-height: 18px;
      `)}
      ${xl(`
        padding: 12px 10px 10px;
      `)}
      ${lg(`
        display: none;
      `)}
      
    }
  }
`
