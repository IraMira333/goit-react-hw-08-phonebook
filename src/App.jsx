// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';

// import Spiner from 'components/Spiner/Spiner';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   selectContacts,
//   selectError,
//   selectFilteredContacts,
//   selectIsLoading,
// } from 'reduxThunk/selectors';
// import * as contactsOperations from './reduxThunk/operationsThunk';
// import { useEffect } from 'react';
import Container from './components/Container/Container';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import AddContactsPage from 'pages/AddContactsPage';
import AppBar from 'components/AppBar';

export default function App() {
  // const contacts = useSelector(selectContacts);
  // const filteredContacts = useSelector(selectFilteredContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);
  // const showContacts = !isLoading && !isError && contacts.length > 0;
  // const showNoContacts = !isLoading && !isError && contacts.length === 0;

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="addcontacts" element={<AddContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>

    // <Container>
    //   <h2>Phonebook</h2>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   {isLoading && <Spiner />}
    //   {isError && <p>{isError}</p>}
    //   {showContacts && (
    //     <>
    //       <Filter />
    //       <ContactList contacts={filteredContacts} />
    //     </>
    //   )}
    //   {showNoContacts && <p>You don't have any contact yet</p>}
    // </Container>
  );
}
