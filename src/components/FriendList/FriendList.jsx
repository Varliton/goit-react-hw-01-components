import PropTypes from 'prop-types'
import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import {Friends} from './FriendList.styled'

export const FriendList = ({ friends }) => {
    return (
      <Friends>
        {friends.map(({ avatar, id, isOnline, name }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </Friends>
    );
    }


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        }),
    ).isRequired
}