import React from 'react'
import './Register.css';

export default function Register() {
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className="loginLeft">
                    <h3 className="loginlogo">ChatLounge</h3>
                    <span className="loginDesc">Connect with the friends or the world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder='Username' className="loginInput" />
                        <input type="email" placeholder='Email' className="loginInput" />
                        <input type="password" placeholder='Password' className="loginInput" />
                        <input type="password" placeholder='Confirm Password' className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
