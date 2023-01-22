import styled from 'styled-components';

export const StatisticsBlock = styled.section`
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const StatisticTitle = styled.h3`
  font-size: ${props => props.theme.normal}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  list-style: none;
`;

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[2]}px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.normal};
  box-shadow: ${props => props.theme.shadows.small};
  padding-top: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
`;

export const StatisticText = styled.p`
  margin-bottom: 0;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 300;
`;

export const StatisticCounter = styled.span`
  font-size: ${props => props.theme.space[8]};

  color: ${props => props.theme.colors.accent};
`;
