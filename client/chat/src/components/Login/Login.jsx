import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <h3 className="loginlogo">ChatLounge</h3>
                    <span className="loginDesc">Connect with the friends or the world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder='Email' className="loginInput" />
                        <input type="password" placeholder='password' className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
