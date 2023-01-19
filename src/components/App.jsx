import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user'
import data from '../data/data'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="Upload Stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
