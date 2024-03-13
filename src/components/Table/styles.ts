import styled from 'styled-components';

interface Props {
    $color?: string
    $mobileHead?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 596px;
  margin-top: 48px;
`;

export const TableButtons = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 12px auto;
`;

export const CopyBtn = styled.button`
  padding: 5px 17px;
  font: inherit;
  color: #FFFFFF;
  background-color: #1193FF;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
`;

export const RemoveBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-left: 22px;
  background: url(/images/cross.svg) transparent center no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const TableWrapper = styled.div``;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 95px 130px 97px 80px 1fr;
  align-content: center;
  border-top: 1px solid #EBEBEB;
  background-color: #FFFFFF;

  &:first-child {
    border-radius: 2px 2px 0 0;
    background-color: #0A508B;
  }


  &:first-child,
  &:nth-child(2) {
    border-top: none;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 4px;
    border-radius: 2px;
    
    &:first-child {
      display: none;
    }
    
    &:nth-child(2) {
      margin-top: 0;
    }
  }
`;

export const TableHeader = styled.div`
  padding: 9px 12px 7px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: normal;
  text-align: left;
  border-left: 1px solid #0A508B;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-child {
    border: none;
  }
`;

export const TableCell = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 32px;
  padding: 9px 12px;
  color: #868A8D;
  border-left: 1px solid #EBEBEB;

  &:first-child {
    border-left: none;
  }
  
  ${TableRow}:last-child & {
    min-height: 72px;
  }

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid #EBEBEB;
    font-size: 16px;

    &:nth-child(odd) {
      border-left: none;
    }
    
    &:last-child {
      grid-column: 1/-1;
      border-bottom: none;
      text-align: center;
    }
    
    &:before {
      content: '${(props: Props) => props.$mobileHead}';
      display: block;
      margin-bottom: 4px;
      font-size: 12px;
    }
  }
`;
export const CellText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TableButton = styled.button<Props>`
  width: 50%;
  max-width: 81px;
  padding: 0;
  border: none;
  background-color: transparent;
  font: inherit;
  color: ${(props: Props) => props.$color || 'inherit'};
  text-decoration: underline;
  cursor: pointer;
`;
