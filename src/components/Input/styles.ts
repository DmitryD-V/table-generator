import styled from 'styled-components';

interface Props {
    $error?: boolean
}

export const Container = styled.div``;

export const Field = styled.input<Props>`
  width: 100%;
  padding: 13px;
  border: 1px solid ${(props: Props) => props.$error ? 'red' : '#E6ECEF'};
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

  &:focus {
    &::-webkit-input-placeholder {
      opacity: 0;
    }

    &::-moz-placeholder {
      opacity: 0;
    }

    &:-ms-input-placeholder {
      opacity: 0;
    }

    &::-ms-input-placeholder {
      opacity: 0;
    }

    &::placeholder {
      opacity: 0;
    }
  }
`;

export const Error = styled.div`
  margin-top: 4px;
  color: red;
`;