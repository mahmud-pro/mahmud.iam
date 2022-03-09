import React from 'react'
import { useLocation, useParams, useHistory } from 'react-router-dom';

export default function User({match}) {
    const {extension, ext2} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return (
    <>
        {/* <h1>Hi This is User/{match.params.extension} Page </h1> */}

        
         <h1>Welcome to the page '{extension} {ext2}'</h1>
         <h3>Your URL is: <span style={{color:"red"}}> http://localhost:3000/user/{extension}/{ext2} </span></h3>

         <p>My current location is: <span style={{color:"blue"}}>{location.pathname}</span></p>
         {location.pathname === `/user/mahmud/khan` ? <button onClick={()=>{history.goBack()}}> Back Button </button> : null}
         {location.pathname === `/user/mahmud/khan` ? <button onClick={()=>{history.goForward()}}> Forward Button </button> : null}
         {location.pathname === `/user/mahmud/khan` ? <button onClick={()=>{history.push('/')}}> By Default About page </button> : null}
    </>
  )

}
// const User = () =>{
//     const fname = useParams();
//     return <h1>user {match.params.page}</h1>
// }
