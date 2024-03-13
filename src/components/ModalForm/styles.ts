import styled, { createGlobalStyle, css } from 'styled-components';

interface Props {
    $opened?: boolean
    $scroll?: boolean
}

export const Global = createGlobalStyle<Props>`
  ${(props: Props) => props.$opened && css`
    body {
      overflow: hidden!important;
      padding-right: ${props.$scroll ? '17px' : '0'};
    }
  `}
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  overflow: auto;
  background-color: rgba(0, 0, 0, .5);
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100%;
`;

export const Content = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  max-width: 376px;
  margin: 20px 0;
  padding: 48px;
  border-radius: 4px;
  background-color: #E5E8ED;

  @media screen and (max-width: 768px) {
    padding: 32px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 20px;
  height: 20px;
  background: url(/images/cross.svg) transparent center no-repeat;
  border: 0;
  outline: none;
  cursor: pointer;
  z-index: 15;

  @media screen and (max-width: 768px) {
    top: 6px;
    right: 6px;
  }
`;
