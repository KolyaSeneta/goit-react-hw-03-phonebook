
import propTypes from 'prop-types';
import React, { Component } from 'react';
// import css from './Contacts/contacts.module.css'



export class Contacts extends Component { 

    state = {
    name: '',
    number: ''
    }
   


       handleOnChange = (e) => {
    const { name, value } = e.target;
           this.setState({ [name]: value.trim().toLowerCase() });
           console.log(value);
    };
    handleOnSubmit = (e) => {
    e.preventDefault();
        this.props.handleOnSubmit(this.state)
        this.setState({name:"",number:"" })
  };


    render() { 
         const { name, number } = this.state;

        return (
            <>
                <h1 >PhoneBook</h1>
                <form onSubmit={this.handleOnSubmit} >
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleOnChange}
                        value={name}
                        minLength={3}
                        // id={this.nameId}
                        
                    />
                    <label>Number</label>
                    <input
                         type="tel"
                         name="number"
                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleOnChange}
                        value={number}
                        minLength={8}
                        // id={this.numberId}

                    />
                    <button type="submit">Add contact</button>
                </form>
            </>
        )
    }
}

Contacts.propTypes = {
    handleOnSubmit: propTypes.func.isRequired,
}