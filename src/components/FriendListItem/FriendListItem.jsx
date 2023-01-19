import PropTypes from 'prop-types';
import { BiBadge, BiBadgeCheck } from 'react-icons/bi';
import { Status, FriendsItem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Status>{isOnline ? <BiBadgeCheck /> : <BiBadge />}</Status>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
