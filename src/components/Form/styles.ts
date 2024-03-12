import styled from 'styled-components';
import { Input } from '../Input/Input';

export const Container = styled.div`
  width: 100%;
  max-width: 280px;
  padding: 20px 16px;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
`;

export const InputField = styled(Input)`
  margin-bottom: 16px;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  background-color: #1493FE;
  color: #FFFFFF;
  font: inherit;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  outline: none;
`;