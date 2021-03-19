import React from 'react'


const LogAdmin = () => {
    return (
        <div className="container">
       <div className="content-left">
          <div className="logo">
              <img src="Group 890.svg" alt="logo"/>
          </div>
          <div className="paragraph">
              Just a few clicks away from accessing the Simba Portal.
          </div>

          <div className="text-1">
              View recyclic statements,interim statements,loan statements,and query records related to your KCB Bank account.
          </div>
       </div>


       <div className="content-right">
       <span>
         Having trouble?<a href="#">Get Help</a>
        </span>
        <div className="h-1">
       What would like to do today?
        </div>

       <div className="btn-ol">
       <button className="btn-1">
            <img className="img-btn1" src="003-innovation.svg" alt="logo"/>
            <div className="btn-text">
            LOGIN
            </div>
            
        </button>
        <button className="btn-2">
            <img className="img-btn2"src="001-add-group.svg" alt="logo"/>
            <div className="btn-text">
            CREATE USER
            </div>
            
        </button>
       </div>
       
        
       </div>
        </div>
    )
}

export default LogAdmin
