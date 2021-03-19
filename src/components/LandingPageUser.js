import React from 'react'

const LandingPageUser = () => {
    return (
                <div className="container">
                <div className="content-left">
                <div className="logo">
                    <img src="Group 890.svg" alt="logo"/>
                </div>
                <div className="paragraph">
                    Welcome to the Simba Portal.
                </div>
        
                <div className="text-1">
                    View recyclic statements,interim statements,loan statements,and query records related to your KCB Bank account.
                </div>
                </div>

                <div className="content-right">
                        <span>
                            Having trouble<a href="#">Get Help</a>
                        </span>
                        <div className="form-wrap">
                        <h1>Sign in</h1>
                        <h1 className="text--1">Please sign in to your account to access the partner portal </h1>
                    <form>
                        <div className="form-input">
                            <label htmlFor="Your username">Your username</label>
                            <input name="name" autoComplete="off" type="text" placeholder="Enter your email or phone number"/>
                        </div>
                        <div className="form-input">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Enter your password"/>
                        </div>
                        
                        <input type="checkbox" className="box"/>
                        <label className="rmbox" htmlFor="checkbox">Remember me</label> <a className="lab-rcp"href="#">Recover Password</a>
                        
                    </form>
                    <div className="">
                            <button className="subtn"type="submit">Sign up</button>
                        </div> 
                    </div> 
                    
                    
                    </div>
                   
                </div>
    )
}

export default LandingPageUser
