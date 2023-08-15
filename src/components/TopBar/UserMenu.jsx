import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';

import { authSelectors, logOut } from 'redux/auth';
import { ColorButton } from './UserMenu.styled';
import { StyledHelloUserDiv, StyledHelloUserSpan } from './TopBar.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);

  return (
    <StyledHelloUserDiv>
      <StyledHelloUserSpan>Hello, {name}</StyledHelloUserSpan>
      <ColorButton
        variant="contained"
        sx={{ marginRight: '15px' }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </ColorButton>
    </StyledHelloUserDiv>
  );
}
