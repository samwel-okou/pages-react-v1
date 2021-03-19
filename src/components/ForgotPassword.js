import React from 'react'

const ForgotPassword = () => {
    return (
        <div className="container">
                <div className="content-left">
                <div className="logo">
                    <img src="Group 890.svg" alt="logo"/>
                </div>
                <div className="paragraph">
                    Recover your password.
                </div>
        
                <div className="text-1">
                    Check your e-mail for an activation link.
                </div>
                </div>


                <div className="content-right">
                            <span className="a-reset">
                            <a href="#">Resend Mail</a>
                            </span>
                            <div className="content-wrapper">
                            <h1>Reset Password</h1>
                            <h1 className="text--1">We will send you a password reset link connected to your existing account.</h1>

                            <div className="form-input">
                                <label htmlFor="Your email">Your email</label>
                                <input name="name" autoComplete="off" type="text" placeholder="Enter your email"/>

                                <div className="span-reset">
                                    <a href="#">BACK</a>
                                    <button className="subtn">RESET PASSWORD</button>
                                </div>
                            </div>
                    </div>
                    </div>
                            
                    </div>
    )
}

export default ForgotPassword
