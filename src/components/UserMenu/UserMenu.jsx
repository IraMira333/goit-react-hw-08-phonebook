import { useDispatch, useSelector } from 'react-redux';

//import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css';
import { authSelectors, logOut } from 'reduxThunk/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      {/* <img src={avatar} alt="" width="32" className={styles.avatar} /> */}
      <span className={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
