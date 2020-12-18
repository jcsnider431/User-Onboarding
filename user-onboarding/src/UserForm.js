import React from 'react'

export default function UserForm(props) {
    const {values, submit, change, disabled, errors,} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
    
    return (
        <form onSubmit={onSubmit} >
        

        
        <br></br>
       <div>      
         <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termOfService}</div>
        </div>
        </div> 
        <div className='container'>
        <br></br>
        <label>Name
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          ></input>
        </label>
        <label>Email 
            <input 
                type='text' 
                name='email' 
                value={values.email} 
                onChange={onChange} ></input>
        </label>
        <label>Password
            <input
                type='text'
                name='password'
                value={values.password}
                onChange={onChange}
             ></input>
        </label>
        <h2>Do you accept terms of service?</h2>
        <label>Yes
            <input
                type='checkbox' 
                name='termsOfService' 
                checked={values.termOfService} 
                onChange={onChange}

            ></input>
        </label>
        <br></br>
        <button id='submitBtn' disabled={disabled}>submit</button>
        <br></br>
        
        </div>
        </form>
    )
}
