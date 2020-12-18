
import React, { useState, useEffect } from 'react'
import './App.css';
import UserForm from './UserForm'
import schema from './formSchema'
import * as yup from 'yup'

import axios from 'axios'
import Member from './Member'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  
}

const initialUser = [];
const initialDisabled = true;

function App() {

  const [ user, setUser ] = useState(initialUser)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  // const getUser = () => {
  //   axios
  //     .get('https://reqres.in/api/users')
  //     .then((res)=>{
  //       setUser(res.data);
  //     })
  //     .catch((err)=>{
  //       console.log(err)
  //     })
  // }
  const postNewUser = newUser => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then((res)=>{
        setUser([res.data, ...user])
        setFormValues([initialFormValues])
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  const inputChange = (name,value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(()=>{
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch((err)=>{
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // termsOfService: [].filter((service)=> formValues[service])
    }
    postNewUser(newUser)
  }
  // useEffect(()=>{
  //   getUser()
  // },[])

  useEffect(()=>{
    schema.isValid(formValues).then((valid)=>{
      setDisabled(!valid)
    })
  },[formValues])

  return (
    <div className="App">
     <UserForm 
     values={formValues}
     change={inputChange}
     submit={formSubmit}
     disabled={disabled}
     errors={formErrors}
      />
     {
       user.map(person => {
         return (
           <Member key={person.id} details={person} />
         )
       })
     }
    </div>
  );
}

export default App;
