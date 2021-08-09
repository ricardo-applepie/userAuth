import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '.././App.css';

const Profile =()=>{
   const {user}= useAuth0;
    return(
        <div>
            <p >
                {JSON.stringify(user, null, 2)}
                {user?.name}
                
            </p>
        
        </div>
    )
}
export default Profile;
