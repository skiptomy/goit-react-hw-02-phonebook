/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  existContact = name => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  };

  saveContact = ({ name, number }) => {
    if (this.existContact(name)) {
      alert(`Already in contacts ${name}`);
      return;
    }

    const checkLength = string => string.length < 1;

    if (checkLength(`${name}`) || checkLength(`${number}`)) {
      alert('Please, fill in all required entry fields');
      return;
    }

    const contact = {
      name,
      number,
      id: shortid.generate(),
    };

    this.setState(state => ({
      contacts: state.contacts.concat(contact),
    }));
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleRemove = id => {
    this.setState(state => {
      const contacts = state.contacts.filter(contact => contact.id !== id);
      const filter = contacts.length > 1 ? state.filter : '';
      return { contacts, filter };
    });
  };

  applyFilter() {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  }

  render() {
    const visibleContacts = this.applyFilter();
    const { contacts } = this.state;

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm saveContact={this.saveContact} />

        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter filter={this.state.filter} handleFilterChange={this.handleFilterChange} />}
        {visibleContacts.length > 0 && <ContactList contacts={visibleContacts} handleRemove={this.handleRemove} />}
      </div>
    );
  }
}

export default App;
