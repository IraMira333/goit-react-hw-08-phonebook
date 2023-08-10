import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Spiner from 'components/Spiner/Spiner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'reduxThunk/contacts';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const showContacts = !isLoading && !isError && contacts.length > 0;
  const showNoContacts = !isLoading && !isError && contacts.length === 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
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
