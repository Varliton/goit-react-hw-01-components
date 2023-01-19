import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  Avatar,
  Username,
  Tag,
  Location,
  StatsList,
  StatsListItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
      <Card>
        <CardBody>
          <Avatar
            src={avatar}
            alt="User avatar"
            class="avatar"
          />
          <Username>{username}</Username>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </CardBody>

        <StatsList>
          <StatsListItem >
            <span class="label">Followers: </span>
            <span class="quantity">{followers}</span>
          </StatsListItem>
          <StatsListItem >
            <span class="label">Views: </span>
            <span class="quantity">{views}</span>
          </StatsListItem>
          <StatsListItem >
            <span class="label">Likes: </span>
            <span class="quantity">{likes}</span>
          </StatsListItem>
        </StatsList>
      </Card>
    );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
};