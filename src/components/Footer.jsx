import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import purple from '@material-ui/core/colors/purple';

function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://iramira333.github.io/goit-react-hw-08-phonebook/"
      >
        PhoneBook
      </Link>
      {' by '}
      <Link
        color="inherit"
        href="https://github.com/IraMira333/goit-react-hw-08-phonebook"
      >
        Trynkal Iryna
      </Link>
      {' in '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',

          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Typography variant="body1" align="center">
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
