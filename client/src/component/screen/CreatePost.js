import React, { useEffect } from 'react';
import M from 'materialize-css';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';

export default function CreatePost() {
    const [tittle ,setTittle] = useState()
    const [body ,setBody] = useState()
    const [image ,setImage] = useState()
    const history = useHistory();

    
    const PostRes = async(e)=>{
        e.preventDefault()
        try {
            const data = new FormData();
            data.append("file",image);
            data.append('upload_preset','insta-clone');
            data.append('cloud_name','armanali');

            const res = await fetch("https://api.cloudinary.com/v1_1/armanali/image/upload",{
                method:"post",
                body:data
            });

            const pic = await res.json();
            setImage(pic.url)
            // console.log(pic.url);

        } catch (error) {
            console.log(error)

        }
    }
    
    useEffect(() => {
       
     async function postData(){
       if(image){
        try {
            const PostResponse = await fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "auth":"Bearer "+localStorage.getItem("jwt")
            },
                body:JSON.stringify({
                  tittle,
                  body,
                  pic:image
                })
              });
              const UserPost = await PostResponse.json();

              if(UserPost.msg){
                M.toast({html:UserPost.msg , classes:"#e57373 red lighten-2"})
              }else{
                M.toast({html:"Post Successfuly created" , classes:"#66bb6a green lighten-1"})
                console.log(UserPost)
                 history.push("/")
              }
        } catch (error) {   
            // console.log(error)
        }
       }
     }
     postData()
    /* eslint-disable */
    }, [image])

   

    return (
        <div className="card input-filed"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
        >  <h4>Create Post</h4>
            <form onSubmit={PostRes} >
            <input 
            type="text"
             placeholder="title"
             onChange={(e)=>setTittle(e.target.value)}
             />
            <input
             type="text"
              placeholder="body"
              onChange={(e)=>setBody(e.target.value)}
           
              />
            <div className="file-field input-field">
             <div className="btn #64b5f6 blue darken-1">
                 <span>Uplaod Image</span>
                 <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
             </div>
             <div className="file-path-wrapper">
                 <input className="file-path validate" type="text" />
             </div>
             </div>
             <button  type="submit" className="btn waves-effect waves-light #64b5f6 blue darken-1"
             >
                 Submit post
             </button>
            </form>
 
        </div>
    )
}
