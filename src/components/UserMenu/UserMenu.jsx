import { useDispatch, useSelector } from 'react-redux';

import styles from './UserMenu.module.css';
import { authSelectors, logOut } from 'reduxThunk/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Hello, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
}
