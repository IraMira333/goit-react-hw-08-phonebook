import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Spiner from 'components/Spiner/Spiner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'reduxThunk/selectors';
import * as contactsOperations from '../reduxThunk/operationsThunk';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const showContacts = !isLoading && !isError && contacts.length > 0;
  const showNoContacts = !isLoading && !isError && contacts.length === 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      {isLoading && <Spiner />}
      {isError && <p>{isError}</p>}{' '}
      {showContacts && (
        <>
          <Filter />
          <ContactList contacts={filteredContacts} />
        </>
      )}
      {showNoContacts && <p>You don't have any contact yet</p>}
    </>
  );
}
