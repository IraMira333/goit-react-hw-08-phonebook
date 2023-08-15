import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import { StyledHeader } from './TopBar/TopBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <>
      <StyledHeader>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledHeader>
    </>
  );
}
