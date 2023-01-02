import { Profile } from './Profile/Profile';
import user from '../json/user.json';
import { Statistics } from './Statistics/Statistics';
import statistics from '../json/statistics.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../json/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: 50,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 100,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        backgroundColor: 'lightgray',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
