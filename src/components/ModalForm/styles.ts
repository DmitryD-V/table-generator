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
