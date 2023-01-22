import styled from 'styled-components';

export const TableBox = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.theme.space[8]}px;
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.small};
`;

export const TableHead = styled.th`
  padding: ${props => props.theme.space[3]}px;
  background-color: ${props => props.theme.colors.primary};
`;

export const TableData = styled.td`
  padding: ${props => props.theme.space[3]}px;
  text-align: center;
`;

export const TableRow = styled.tr`
  :nth-child(2n) {
    background-color: ${props => props.theme.colors.gray};
  }
`;
