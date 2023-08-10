import { useDispatch } from 'react-redux';
import { register } from 'reduxThunk/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(register({ name, email, password }));
  };
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="on">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" />
        </label>

        <label style={styles.label}>
          Почта
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
