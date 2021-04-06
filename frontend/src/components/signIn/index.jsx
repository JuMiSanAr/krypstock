import React from 'react'

const signIn = () => {

    return (
        <>
            <p>Logo</p>
            <input name='username' type='text' placeholder='Username' required/>
            <input name='password' type='text' placeholder='Password' required/>
            <input type="checkbox" id="remember_me"/>
                <label htmlFor="remember_me">Remember Me</label>
                <p>Forgot your password?</p>
                <button>SignIn</button>
        </>
    )
}

export default signIn;