import styled from 'styled-components';

export const Container = styled.div``;

export const Field = styled.input`
  width: 100%;
  padding: 13px;
  border: 1px solid #E6ECEF;
  border-radius: 4px;
  font-size: inherit;
  background-color: #FFFFFF;
  outline: none;
  
  &::-webkit-input-placeholder {
    color: #868A8D;
    opacity: 1;
  }

  &::-moz-placeholder {
    color: #868A8D;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #868A8D;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: #868A8D;
    opacity: 1;
  }

  &::placeholder {
    color: #868A8D;
    opacity: 1;
  }
`;
