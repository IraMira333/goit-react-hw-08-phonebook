import { useDispatch } from 'react-redux';
import { deleteContact } from 'reduxThunk/operationsThunk';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

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
            <span>{contact.phone}</span>

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
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
