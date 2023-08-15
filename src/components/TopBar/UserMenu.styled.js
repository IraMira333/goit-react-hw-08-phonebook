import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  fontWeight: '700',
  boxShadow: '2px 2px 2px 2px #5c2e6c',
  border: '1px solid #7b2697',
  '&:hover': {
    backgroundColor: purple[700],
  },
}));
