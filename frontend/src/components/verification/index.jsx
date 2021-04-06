import React from 'react'

const verification = () => {

    return (
        <>

                    <h1>Set your password and username</h1>
                    <input name='username' type='text' placeholder='Username' required/>
                    <input name='password' type='text' placeholder='Password' required/>
                    <input name='r_password' type='text' placeholder='Repeat Password' required/>
                    <button>Continue</button>
        </>
    )
}

export default verification;