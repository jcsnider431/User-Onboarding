import React from 'react'

export default function Member({details}) {

    return (
        <div>
            <h1>Name: {details.username}</h1>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>
        
    )
}
