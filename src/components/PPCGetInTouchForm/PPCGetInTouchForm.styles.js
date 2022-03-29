import styled from 'styled-components'
import { themeColor, white, sm, sh } from '../../config/variables'

export const PPCGetInTouchFormStyle = styled.div`
  width: 100%;
  border-radius: 3px 3px 0px 0px;
  background-color: #fff;
  form {
    .input-field-row {
      display: flex;
      margin-bottom: 16px;
      justify-content: space-between;
      .form-field-blk {
        position: relative;
        width: 100%;
        &.column {
          width: 48%;
        }
        .label-input-field {
          width: 100%;
          height: 55px;
          max-width: 100%;
          margin-bottom: 0px;
          padding: 16px 20px 17px 22px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          background-color: #fff;
          background-image: linear-gradient(180deg, transparent, transparent);
          transition: all 300ms ease;
          color: #6a6a6a;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.17px;
          appearance: none;
          outline: none;
          ${sh(`            
            font-size: 15px;
            line-height: 21px;
            height: 50px;
            padding: 14px 18px 15px 20px;
          `)}
          ${sm(`
            padding: 11px 15px 12px 16px;
            height: 40px;
            font-size: 12px;
          `)}
          & + label {
            pointer-events: none;
          }
          &:focus {
            border-color: #ff017d;
          }
          &:focus + label {
            top: -6px;
            font-size: 11px;
            line-height: 12px;
            padding: 0 2px;
            background: #fff;
            z-index: 9;
          }
          &.fill + label {
            top: -6px;
            font-size: 11px;
            line-height: 12px;
            padding: 0 2px;
            background: #fff;
            z-index: 9;
          }
          &.textarea {
            height: 105px;
            resize: none;
          }
        }
        label {
          position: absolute;
          left: 22px;
          top: 16px;
          margin-bottom: 0px;
          transition: all 300ms ease;
          color: #6a6a6a;
          font-size: 16px;
          line-height: 22px;
          font-weight: 400;
          letter-spacing: -0.17px;
          cursor: text;
          ${sh(`            
            font-size: 15px;
            line-height: 21px;
            top: 13px;
            left: 18px;
          `)}
          ${sm(`
            left: 16px;
            top: 9px;
            font-size: 12px;
          `)}
        }
      }
    }
    .submit-row {
      margin-top: 8px;
      display: flex;
      align-items: center;
      width: 180px;
      img {
        width: 30px;
        margin-left: 5px;
      }
      .btn-submit {
        flex: 1;
        border-radius: 4px;
        background-color: ${themeColor};
        box-shadow: 0 0 7px -2px rgba(0, 0, 0, 0.1);
        transition: all 0.15s ease-in-out;
        border: 1px solid ${themeColor};
        position: relative;
        overflow: hidden;
        z-index: 1;
        text-align: center;
        font-size: 16px;
        line-height: 22px;
        font-weight: 600;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        color: ${white};
        cursor: pointer;
        display: flex;
        align-items: center;
        ${sm(`
          font-size: 14px;
          margin-top: 10px;
        `)}
        &:hover {
          .btn-submit-inner {
            color: ${themeColor};
          }
        }
        transition: all 0.15s ease;
        transition: color 0.15s ease-in-out;
        display: inline-block;
        &:after,
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: ${white};
          z-index: -1;
        }
        &:before {
          transform: translateY(-100%);
          transition: all 15ms ease-in-out;
        }
        &:after {
          transform: translateY(100%);
          transition: all 0.2s ease-in-out;
        }
        &:hover:before {
          transform: translateY(0);
          transition: all 0.2s ease-in-out;
        }
        &:hover:after {
          transform: translateY(0);
          transition: all 0ms ease-in-out;
          transition-delay: 0.2s;
        }
        .btn-submit-inner {
          padding: 13px 15px 15px;
          width: 100%;
          border: 0;
          background: transparent;
          cursor: pointer;
          font-size: 16px;
          line-height: 22px;
          font-weight: 600;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: ${white};
          transition: all 0.15s ease-in-out;
          ${sm(`
            padding: 10px 15px 12px;
            font-size: 14px;
          `)}
        }
      }
    }
    .bottomAlert {
      display: flex;
      align-items: center;
      margin-top: 19px;
    }
    .bottomSuccessText {
      color: #6a6a6a;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      padding-left: 12px;
      margin-bottom: -6px;
      ${sm(`
          font-size:14px;
      `)}
    }
    .bottomErrorText {
      color: #ff017d;
      font-size: 16px;
      font-weight: 500;
      padding-left: 12px;
    }
  }
`
