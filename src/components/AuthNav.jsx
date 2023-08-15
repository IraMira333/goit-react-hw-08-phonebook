import React from 'react';
import { StyledNavLink } from './TopBar/TopBar.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">LogIn</StyledNavLink>
    </div>
  );
}
