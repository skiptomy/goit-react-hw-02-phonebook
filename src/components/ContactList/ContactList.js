import React from 'react';
import propTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, handleRemove }) => (
  <ul className={styles.contactList}>
    {contacts.map(contact => (
      <li className={styles.contactItem} key={contact.id}>
        <ContactItem contact={contact} handleRemove={() => handleRemove(contact.id)} />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
  handleRemove: propTypes.func.isRequired,
};

export default ContactList;
