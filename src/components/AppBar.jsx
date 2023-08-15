import { useSelector } from 'react-redux';
import Navigation from './Navigation';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spiner from './Spiner/Spiner';
import { authSelectors } from 'redux/auth';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import Footer from './Footer';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <header style={styles.header}>
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>

        <CssBaseline />
        <Container component="main">
          <Suspense fallback={<Spiner />}>
            <Outlet />
          </Suspense>
        </Container>

        <Footer />
      </Box>
    </>
  );
}
