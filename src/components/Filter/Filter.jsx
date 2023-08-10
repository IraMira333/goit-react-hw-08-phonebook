import { useDispatch } from 'react-redux';

import { filterForContacts } from 'reduxThunk/contacts';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  function onFilterInput(e) {
    dispatch(filterForContacts(e.target.value));
  }

  return (
    <div className={css.filterInput}>
      <input placeholder="Search name..." onChange={onFilterInput}></input>
    </div>
  );
};

export default Filter;
