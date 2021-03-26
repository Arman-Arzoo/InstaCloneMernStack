import NavBar from "./component/NavBar";
import "./App.css";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Home from "./component/screen/Home";
import Login from "./component/screen/Login";
import SignUp from "./component/screen/SignUp";
import Profile from "./component/screen/Profile";
import CreatePost from "./component/screen/CreatePost";
import { useEffect, createContext,useReducer, useContext} from "react";
import {reducer,initialState} from './reducer/userReducer'

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  let {state,dispatch} = useContext(UserContext)
  useEffect(() => {
   
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    } 
    else{
      history.push('/login')
    }  
    /* eslint-disable */
  }, [])
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/CreatePost" component={CreatePost}></Route>
    </>
  );
};

function App() {
  let [state,dispatch] = useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <>
        <NavBar />
        <Routing/>
      </>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
