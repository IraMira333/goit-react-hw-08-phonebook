import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #212121;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #4a148c;
    font-weight: 700;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  border-bottom: 1px solid #2a363b;
  background-color: #b6c6ec;
  background: linear-gradient(to right bottom, #5275e9, #d08dd3);
`;
export const StyledHelloUserDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHelloUserSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #212121;
  font-family: Roboto, sans-serif;
  margin-right: 12px;
`;

export const StyledUserNameSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #4a148c;
  font-family: Lobster;
  margin-right: 12px;
`;
