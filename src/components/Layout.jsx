import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Spiner from './Spiner/Spiner';
import AppBar from './AppBar';
import Footer from './Footer';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Layout() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <AppBar />

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
