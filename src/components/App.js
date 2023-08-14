import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import AddContactsPage from 'pages/AddContactsPage';
import AppBar from 'components/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelectors, getCurrentUser } from 'reduxThunk/auth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export default function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !currentUser && (
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
          <Route
            path="addcontacts"
            element={
              <PrivateRoute component={AddContactsPage} redirectTo="/login" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    )
  );
}
