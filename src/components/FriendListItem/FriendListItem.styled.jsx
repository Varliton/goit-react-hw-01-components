import styled from "styled-components";

export const FriendsItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  
  
  align-items: center;
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.medium};
  background-color: ${props => props.theme.colors.background};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;


export const Name = styled.h3`
  color: ${props => props.theme.colors.gray};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.space(0.25)};
  margin-left: ${props => props.theme.space(2)};
  margin-bottom: 0;
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  
`;