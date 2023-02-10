import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {Contacts} from './Contacts/Contacts'
import { Filter } from './Filter/Filter'
import {ContactDelete} from './Deleted/ContactDelete'


export class App extends Component {
 
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],

  filter: '',
  }
  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleOnSubmit = (e) => {
    const id = nanoid();
    const number = e.number;
    const name = e.name;
    const nameContacts = this.state.contacts

    
    if (nameContacts.findIndex(contact => name === contact.name) !== -1) {
     alert(`${name} is already in contacts.`);
    } else {
      // this.setState({contacts: [...this.state.contacts, nameContacts]})
       this.setState({ contacts: nameContacts});
     
   }
     nameContacts.push({ name, id, number });
    console.log(nameContacts);
  }

    getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };
   handleOnDelete = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  render() {
      const { filter } = this.state;
      
      return (
        <div>

          <Contacts handleOnSubmit = {this.handleOnSubmit} />
        
          <h2>Contacts</h2>
         <Filter  filter={filter} handleOnChange={this.handleOnChange}/>
        <ContactDelete
          contacts={this.getFilteredContacts()}
          handleOnDelete={this.handleOnDelete}
        />
        </div>
      );

    
    }
  
}
