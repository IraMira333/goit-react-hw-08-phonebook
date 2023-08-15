import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <>
      <header style={styles.header}>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}
