import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};
export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const privateInfo = (
    <>
      <NavLink
        to="/contacts"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Contacts
      </NavLink>

      <NavLink
        to="/addcontacts"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Add Contact
      </NavLink>
    </>
  );
  return (
    <nav>
      <NavLink to="/" style={styles.link} activestyle={styles.activeLink}>
        HomePage
      </NavLink>

      {isLoggedIn && privateInfo}
    </nav>
  );
}
