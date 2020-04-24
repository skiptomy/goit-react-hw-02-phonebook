/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    saveContact: propTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveContact({ ...this.state });
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input className={styles.inputField} name="name" value={this.state.name} onChange={this.handleChange} />
        </label>

        <label>
          Number
          <input className={styles.inputField} name="number" value={this.state.number} onChange={this.handleChange} />
        </label>

        <button className={styles.submitBtn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
