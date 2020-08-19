import React, { Component } from 'react';
import Button from './Button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: ''
    }
  }
  render() {
    return (
      <div>
        <h4>Enter your Contact Details:</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name"/>
          <input type="email" name="email" placeholder="Your Email"/>
          <input type="text" name="street" placeholder="Street"/>
          <input type="text" name="postCode" placeholder="PostCode"/>
          <Button buttonType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
