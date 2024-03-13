import styled, { css } from 'styled-components';

interface Props {
    $placeholder?: string
    $isActive?: boolean
    $error?: boolean
}

export const Container = styled.div``;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownToggler = styled.button<Props>`
  position: relative;
  width: 100%;
  min-height: 42px;
  padding: 13px 27px 13px 13px;
  border: 1px solid ${(props: Props) => props.$error ? 'red' : '#E6ECEF'};
  border-radius: 4px;
  background-color: #FFFFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  font: inherit;
  text-align: left;
  outline: none;
  cursor: pointer;
  transition: ease .3s;

  &:after {
    content: '';
    position: absolute;
    top: 13px;
    right: 13px;
    width: 14px;
    height: 14px;
    background: url(/images/arrow-down.svg) center no-repeat;
    transform: rotate(${(props: Props) => props.$isActive ? '180deg' : '0'});
    transition: ease .3s;
  }

  ${(props: Props) => props.$placeholder && css`
    &:before {
      content: '${props.$placeholder}';
      color: #868A8D;
    }
  `}
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  padding: 0 13px;
  border: 1px solid #E6ECEF;
  border-radius: 4px;
  background-color: #FFFFFF;
`;

export const DropdownItem = styled.button<Props>`
  width: 100%;
  padding: 14px 0;
  border: none;
  border-top: 1px solid #E6ECEF;
  background-color: transparent;
  font: inherit;
  text-align: left;
  color: #868A8D;
  outline: none;
  cursor: pointer;
  transition: ease .3s;
  
  &:first-child {
    border: none;
  }
  
  &:hover {
    color: #212229;
    font-weight: 700;
  }
  
  ${(props: Props) => props.$isActive && css`
    color: #212229;
    font-weight: 700;
    pointer-events: none;
  `}
`;

export const Error = styled.div`
  margin-top: 4px;
  color: red;
`;