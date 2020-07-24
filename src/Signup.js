import React, { Component } from 'react';
import { validateForm, submitForm } from './helperFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Form, Success, Label, Input, Select, Button, Error } from './styled';

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
      // Check if any errors exist
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
    let { fields, submitted, errors } = this.state
    let { handleChange, handleClick } = this
    return (
      submitted
      ?
        <Success>
          <span><FontAwesomeIcon className="icon" icon={faCheck} /> You are registered for Seattle Startup Week</span>
          <h4>Glad you're joining us {fields.firstName}!</h4>
          <p>We think meeting other like-minded entrepreneurs is a great step towards gaining new perspectives and insights. Remember to bring a tablet of paper to take notes, and some business cards. See you there!</p>
        </Success>
      :
        <Form>
          <Label htmlFor="firstname">First Name:
          <Input
            type="text"
            id="firstname"
            name="firstName"
            value={fields.firstName}
            onChange={handleChange}
            className={'firstName' in errors ? 'error' : ''} />
            {'firstName' in errors ? <Error>{errors.firstName}</Error> : ''}
          </Label>
          <Label htmlFor="lastname">Last Name:
            <Input
              type="text"
              id="lastname"
              name="lastName"
              value={fields.lastName}
              onChange={handleChange}
              className={'lastName' in errors ? 'error' : ''} />
              {'lastName' in errors ? <Error>{errors.lastName}</Error> : ''}
          </Label>
          <Label htmlFor="email">Email:
            <Input
              type="text"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              className={'email' in errors ? 'error' : ''} />
            {'email' in errors ? <Error>{errors.email}</Error> : ''}
          </Label>
          <Label htmlFor="company">Company Name:
            <Input
              type="text"
              id="company"
              name="company"
              value={fields.company}
              onChange={handleChange}
              className={'company' in errors ? 'error' : ''} />
            {'company' in errors ? <Error>{errors.company}</Error> : ''}
          </Label>
          <Label htmlFor="role">Your Role:
            <Select
              type="text"
              id="role"
              name="role"
              defaultValue={fields.role}
              onChange={handleChange}
              className={'role' in errors ? 'error' : ''}>
                <option value="" disabled></option>
                <option value="Investor">Investor</option>
                <option value="Mentor">Mentor</option>
                <option value="Founder">Founder</option>
                <option value="Network Member">Network Member</option>
            </Select>
            {'role' in errors ? <Error>{errors.role}</Error> : ''}
          </Label>
          <Button onClick={handleClick}>Sign-up</Button>
        </Form>
    );
  }
}
