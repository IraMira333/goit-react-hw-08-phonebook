import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
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
  flex: 0 0 auto;
  /* padding-right: 15px; */
  border-bottom: 1px solid #2a363b;
  background-color: #b6c6ec;
  background-image: linear-gradient(
    to top,
    rgba(124, 24, 158, 0.4),
    rgba(124, 24, 158, 0.1)
  );
`;
export const StyledHelloUserDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHelloUserSpan = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #2a363b;
  font-family: Roboto, sans-serif;
  margin-right: 12px;
`;
