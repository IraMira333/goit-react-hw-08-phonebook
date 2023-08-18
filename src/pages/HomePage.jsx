import React from 'react';

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { minBoxHeightPx, pageWidth } from 'support/support';
import backgroundImage from 'support/PhoonBookCanva2-min.jpeg';
//import { Typography } from '@material-ui/core';
//import { StyledNavLink } from 'components/TopBar/TopBar.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isUserName = useSelector(authSelectors.selectUsername);
  return (
    <Container
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#d1c4e9',
        paddingTop: '10px',
        minHeight: minBoxHeightPx,
        textAlign: 'center',
        '@media (min-width: 1200px)': {
          maxWidth: pageWidth,
        },
      }}
    >
      {!isLoggedIn ? (
        <div>
          <h1>
            Please{' '}
            <Link
              href="https://iramira333.github.io/goit-react-hw-08-phonebook/register"
              underline="hover"
            >
              Register
            </Link>{' '}
            or{' '}
            <Link
              href="https://iramira333.github.io/goit-react-hw-08-phonebook/login"
              underline="hover"
            >
              Login
            </Link>
            .
          </h1>
        </div>
      ) : (
        <div>
          <h1>Hello {isUserName?.name}.</h1>
          <h2>
            Would you like to see your <Link to="contacts"> contacts</Link>?
          </h2>
        </div>
      )}
    </Container>
  );
}
