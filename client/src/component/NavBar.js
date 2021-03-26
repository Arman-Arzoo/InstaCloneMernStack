import React, { useContext } from "react";
import { Link,useHistory } from "react-router-dom";
import {UserContext} from '../App';


export default function NavBar() {
  
  const history = useHistory();
  let {state,dispatch} = useContext(UserContext);

  const RenderList = ()=>{
    if(state){
      return(
        <>
        <li><Link to="/profile">Profile</Link></li>
        <li> <Link to="/createpost">Create Post</Link> </li>
        <button className ="btn #ef5350 red lighten-1"
        onClick={()=>{
             localStorage.clear();
             dispatch({type:"CLEAR"})
             history.push("/login")
        }}
        >Log out</button>
        </>
      )
    }else{
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
