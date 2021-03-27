import React,{useContext, useState ,useEffect} from 'react';
import {UserContext} from '../../App';

export default function Profile() {

    const [myPost, setMyPost] = useState([]);
    const {state}=useContext(UserContext);

    useEffect(() => {
      async function getMyPost(){
         const res = await fetch('/mypost',{
             headers:{
                 "auth":"Bearer "+localStorage.getItem("jwt")
             }
         });

         const myPosts = await res.json()
        //  console.log(myPost.mypost)
        setMyPost(myPosts.mypost)
       } 
       getMyPost()
       
    }, []);

    console.log("my post is ",myPost)
    console.log("state",state)
    return (
        <div className="profile-container">
        <div className="Profile">

            <div className="profilePic">
                <img src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg" alt="profile"></img>
            </div>
            <div className="profile_info">
                <h4>{state? state.name:"loading"}</h4>
                <div  className="items">
                    <h6>20 post</h6>
                    <h6>20 Follower</h6>
                    <h6>20 Following</h6>
                </div>
                <br></br>
                
               <span>Hi my name is Asad from pakistan</span>
            </div>
        </div>
        <div className="gallary">
            {
               myPost.map(pics =>{
                return(
                    <img  className="gallary-item" src={pics.photo} alt={pics.tittle}></img>
                )
              
               }) 
            }

        </div>
        </div>
    )
}
