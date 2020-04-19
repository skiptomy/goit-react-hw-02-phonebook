import React from 'react';
import propTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, handleRemove }) => (
  <div>
    <div>
      <span className={styles.name}>{contact.name}: </span>
      <span className={styles.number}>{contact.number}</span>
      <button className={styles.removeBtn} type="button" onClick={handleRemove}>
        Delete
      </button>
    </div>
  </div>
);

ContactItem.propTypes = {
  contact: propTypes.exact({
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }).isRequired,
  handleRemove: propTypes.func.isRequired,
};

export default ContactItem;
