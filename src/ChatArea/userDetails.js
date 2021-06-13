import React, { Component } from "react";
import "../styles/chatArea.css";
class UserDetails extends Component
{
    render()
    {
        return(
            <div className="userDetails">   
                {/* userName */}
                <h1>User Name : kumar</h1>
            </div>
        )
    }
}

export default UserDetails;