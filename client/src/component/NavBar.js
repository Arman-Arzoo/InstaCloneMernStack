import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext} from '../App'

export default function NavBar() {

  const {state,dispatch} = useContext(UserContext);

  const RenderList = ()=>{
    if(state){
      console.log(state)
      return(
        <>
        <li><Link to="/profile">Profile</Link></li>
        <li> <Link to="/createpost">Create Post</Link> </li>
        </>
      )
    }else{
      console.log(state)
      return(
        <>
         <li> <Link to="/login">Login</Link></li>
         <li> <Link to="/signup">Sign up</Link> </li>
        </>
      )
    }
  }
  return (
    <>
      <nav>
        <div className="nav-wrapper white ">
          <Link to={state?"/":"/login"} className="brand-logo left">
            Instagarm
          </Link>
          <ul id="nav-mobile" className="right">
           {RenderList()}
            
          </ul>
        </div>
      </nav>
    </>
  );
}
