import React, { Component } from 'react';
import { validateForm, submitForm } from './helperFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Signup.scss';

export default class Signup extends Component {

  state = {
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      role: '',
    },
    errors: {},
    submitted: false
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(() => ({
      fields: {
        ...this.state.fields,
        [name]: value
      }
    }));
  }

  handleClick = (event) => {
    event.preventDefault();

    this.setState({
      errors: validateForm(this.state.fields)
    }, () => {

      if (!Object.keys(this.state.errors).length) {
        submitForm(this.state.fields).then(data => {
          if (data.status === 200) {
            this.setState({submitted: true});
          }
        });
      }
    });
  }

  render() {
    return (
      this.state.submitted
      ?
        <div className="Signup-success">
          <span><FontAwesomeIcon className="icon" icon={faCheck} /> You are registered for Seattle Startup Week</span>
          <h4>Glad you're joining us {this.state.fields.firstName}!</h4>
          <p>We think meeting other like-minded entrepreneurs is a great step towards gaining new perspectives and insights. Remember to bring a tablet of paper to take notes, and some business cards. See you there!</p>
        </div>
      :
        <form className="Signup">
          <label htmlFor="firstname">First Name:
          <input
            type="text"
            id="firstname"
            name="firstName"
            value={this.state.fields.firstName}
            onChange={this.handleChange}
            className={'firstName' in this.state.errors ? 'error' : ''} />
            {'firstName' in this.state.errors ? <span className="error-message">{this.state.errors.firstName}</span> : ''}
          </label>
          <label htmlFor="lastname">Last Name:
            <input
              type="text"
              id="lastname"
              name="lastName"
              value={this.state.fields.lastName}
              onChange={this.handleChange}
              className={'lastName' in this.state.errors ? 'error' : ''} />
              {'firstName' in this.state.errors ? <span className="error-message">{this.state.errors.firstName}</span> : ''}
          </label>
          <label htmlFor="email">Email:
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.fields.email}
              onChange={this.handleChange}
              className={'email' in this.state.errors ? 'error' : ''} />
            {'email' in this.state.errors ? <span className="error-message">{this.state.errors.email}</span> : ''}
          </label>
          <label htmlFor="company">Company Name:
            <input
              type="text"
              id="company"
              name="company"
              value={this.state.fields.company}
              onChange={this.handleChange}
              className={'company' in this.state.errors ? 'error' : ''} />
            {'company' in this.state.errors ? <span className="error-message">{this.state.errors.company}</span> : ''}
          </label>
          <label htmlFor="role">Your Role:
            <select
              type="text"
              id="role"
              name="role"
              defaultValue={this.state.fields.role}
              onChange={this.handleChange}
              className={'role' in this.state.errors ? 'error' : ''}>
                <option value="" disabled></option>
                <option value="Investor">Investor</option>
                <option value="Mentor">Mentor</option>
                <option value="Founder">Founder</option>
                <option value="Network Member">Network Member</option>
            </select>
            {'role' in this.state.errors ? <span className="error-message">{this.state.errors.role}</span> : ''}
          </label>
          <button onClick={this.handleClick}>Sign-up</button>
        </form>
    );
  }
}
