import React, { Component } from 'react'
import SingleService from '../SingleService/SingleService'
import styled from 'styled-components'
import { lg, sm, device } from '../../config/variables'

const CustomDevBlock = styled.section`
  margin-bottom: 54px;
  .heading-wrapper {
    max-width: 670px;
  }
  .custom-dev-listing {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    border: 1px solid #d8d8d8;
    border-right: 0;
    border-bottom: 0;
    ${lg(`
      flex-wrap: nowrap;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      border: 0;
    `)}
    .service-single {
      max-width: 33.33%;
      border: 1px solid #d8d8d8;
      border-top: 0;
      border-left: 0;
      box-shadow: inherit;
      padding: 24px;
      &:hover {
        transform: translateY(0);
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.05),
          0 9px 46px 8px rgba(0, 0, 0, 0.01),
          0 24px 38px 3px rgba(0, 0, 0, 0.05);
        position: relative;
        z-index: 1;
        ${device(`
          box-shadow: inherit;
        `)}
      }
      ${lg(`
          min-width: 314px;
          margin-right: 20px;
          border: 1px solid #d8d8d8;
          padding: 20px;
      `)}
      ${sm(`
        min-width: 270px;
      `)}
      .service-img-blk {
        ${sm(`
          margin-bottom: 15px;
        `)}
      }
    }
  }
`

class CustomDevelopment extends Component {
  render() {
    const { customDevProps } = this.props.customServicedata
    return (
      <CustomDevBlock>
        <div className="container">
          <div className="heading-wrapper">
            <h2>{customDevProps.serviceHeading}</h2>
          </div>
          <div className="custom-dev-listing">
            {customDevProps.serviceContents.map((serviceContent, i) => {
              return <SingleService key={i} {...serviceContent} />
            })}
          </div>
        </div>
      </CustomDevBlock>
    )
  }
}

export default CustomDevelopment
