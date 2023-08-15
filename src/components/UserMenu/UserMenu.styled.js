import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import styles from 'styled-components';

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  fontWeight: '700',
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export const StyledHelloUserDiv = styles.div`
  display: flex;
  align-items: center;
`;

export const StyledHelloUserSpan = styles.span`
  font-weight: 700;
  font-size: 18px;
  color: #2a363b;
  font-family: Roboto, sans-serif;
  margin-right: 12px;
`;
