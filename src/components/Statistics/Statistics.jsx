import PropTypes from 'prop-types';
import {
  StatisticTitle,
  StatisticsList,
  StatisticsBlock,
  StatisticBox,
  StatisticCounter,
} from './Statistics.styled';
export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsBlock>
      {title && <StatisticTitle>Upload stats</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ label, percentage, id }) => {
          return (
            <StatisticBox key={id} label={label} percentage={percentage}>
              <StatisticCounter>{label}: </StatisticCounter>
              <StatisticCounter>{percentage}</StatisticCounter>
            </StatisticBox>
          );
        })}
      </StatisticsList>
    </StatisticsBlock>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
