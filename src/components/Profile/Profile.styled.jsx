import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.theme.space[8]}px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${props => props.theme.shadows.regular};
  border-radius: ${props => props.theme.radii.normal};
  background: ${props => props.theme.colors.white};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[3]}px;
`;

export const Avatar = styled.img`
  display: block;
  height: ${props => props.theme.space[7]}px;
  width: ${props => props.theme.space[7]}px;
  border-radius: ${props => props.theme.radii.circle};
`;

export const Username = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.medium}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: ${props => props.theme.space[0]};
`;

export const Tag = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.small}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  margin: ${props => props.theme.space[0]};
`;

export const Location = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.small}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  margin: ${props => props.theme.space[0]};
`;

export const StatsList = styled.ul`
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  list-style: none;
`;

export const StatsListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;
