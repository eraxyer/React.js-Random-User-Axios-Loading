import React, { useState, useEffect, Component, } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

export default class App extends Component {

  state = {
    persons: [],
    loading: true,
  }
  
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        setTimeout(() => {
          this.setState({ persons, loading: false });
        }, 1000)
      })
  }
  
  render() {
    return (
      
      <div className="container-fluid bg-dark vh-100 vw-100 d-flex align-items-center">
        {this.state.loading ?
        <ReactLoading type={'bubbles'} color={'green'} height={'100%'} width={'50%'}  />
        :
        <div className="text-white container-fluid text-center">
          <div className="fs-1 fw-lighter ">Random User List</div>
            {this.state.persons.map(person =>
              <li key={person.id}>{person.username} : {person.name}</li>
            )}
        </div>
        }
      </div>

    )
  }
}
