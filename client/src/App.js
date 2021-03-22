import NavBar from './component/NavBar'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/screen/Home'
import Login from './component/screen/Login'
import SignUp from './component/screen/SignUp'
import Profile from './component/screen/Profile'
import CreatePost from './component/screen/CreatePost'

function App() {
  return (
    <BrowserRouter>
    <>
    <NavBar/>
    <Route exact path="/" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={SignUp}></Route>
    <Route path="/profile" component={Profile}></Route>
    <Route path="/CreatePost" component={CreatePost}></Route>
    
    </>
    </BrowserRouter>
  );
}

export default App;
