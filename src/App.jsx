import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import Spiner from 'components/Spiner/Spiner';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'reduxThunk/selectors';
import * as contactsOperations from './reduxThunk/operationsThunk';
import { useEffect } from 'react';
import Container from './components/Container/Container';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  const showContacts = !isLoading && !isError && contacts.length > 0;
  const showNoContacts = !isLoading && !isError && contacts.length === 0;

  return (
    // <Container>
    //   <AppBar />

    //   <Switch>
    //     <Route exact path="/" component={HomeView} />
    //     <Route path="/register" component={RegisterView} />
    //     <Route path="/login" component={LoginView} />
    //     <Route path="/contacts" component={ContactsView} />
    //<Route path="/addcontacts" component={addContactsView} />
    //   </Switch>
    // </Container>
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <Spiner />}
      {isError && <p>{isError}</p>}
      {showContacts && (
        <>
          <Filter />
          <ContactList contacts={filteredContacts} />
        </>
      )}
      {showNoContacts && <p>You don't have any contact yet</p>}
    </Container>
  );
}
