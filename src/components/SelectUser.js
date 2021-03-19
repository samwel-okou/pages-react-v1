import React from 'react'

export const SelectUser = () => {
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
       What type of user are you?
        </div>


        <div className="btnn-ol">
       <button className="btnn-1">
           <div className="img-btnn1">
           <img className="img-btnn1" src="003-innovation.svg" alt="logo"/>
           </div>
            
            <div className="btnn-text">
                COPERATE USER
            <div className="sml-text">
                View statements
            </div>
            </div>
            
        </button>
        <button className="btnn-2">
            <div className="img-btnn2">
            <img className="img-btnn2"src="001-add-group.svg" alt="logo"/>
            </div>
           
            <div className="btnn-text">
                BANK USER
            <div className="sml-text--2">
                Manage coperate user
            </div>
            </div>
            
        </button>
       </div>
        </div>

        

       </div>

    )
}
