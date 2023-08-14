import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'reduxThunk/contacts';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  function SortArray(x, y) {
    return x.name.localeCompare(y.name);
  }
  const sortContacts = contacts.sort(SortArray);

  return (
    <ul className={css.listBox}>
      {sortContacts.map(contact => {
        return (
          <li className={css.liContact} key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>

            <button
              className={css.listBtn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
