import ContactForm from 'components/ContactForm/ContactForm';
import Container from '@mui/material/Container';
import { minBoxHeightPx } from 'support/support';

export default function AddContactsPage() {
  return (
    <Container
      sx={{
        bgcolor: '#cfe8fc',
        marginLeft: '0',
        marginRight: '0',
        paddingTop: '10px',
        minHeight: minBoxHeightPx,
        textAlign: 'center',
      }}
    >
      <ContactForm />
    </Container>
  );
}
