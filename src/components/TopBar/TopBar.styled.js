import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  transition: color cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.active {
    color: rebeccapurple;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2a363b;
  background-color: #b6c6ec;
  background-image: linear-gradient(
    to top,
    rgba(124, 24, 158, 0.4),
    rgba(124, 24, 158, 0.1)
  );
`;