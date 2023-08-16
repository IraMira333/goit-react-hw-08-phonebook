import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@mui/material/Container';

import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Spiner from 'components/Spiner/Spiner';
import {
  getContacts,
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts';
import { minBoxHeightPx } from 'support/support';

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
    <Container
      sx={{
        bgcolor: '#cfe8fc',
        marginLeft: '0',
        marginRight: '0',
        minHeight: minBoxHeightPx,
      }}
    >
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
    </Container>
  );
}
