import React,{useEffect, useState}from 'react'

export default function Home() {
    const [post , setPost] = useState([]);

    useEffect(() => {
        async function getPost(){
            const res = await fetch('/getposts',{
                headers:{"auth":"Bearer "+localStorage.getItem("jwt")},
             });
             const allPosts = await res.json();
             console.log("form home" ,allPosts)
             setPost(allPosts.posts)
            //  console.log("form second ",allPosts.posts._id)

       
        }
        getPost()
      
    }, [])

   
  
    const likePost = async (id) =>{
       try {
        const res = await fetch('/like',{
            method:'put',
            headers:{
                "Content-Type":"application/json",
                "auth":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        });
        
        const postLike = await res.json();
        console.log(postLike)
           
       } catch (error) {
           console.log(error)
       }

    }


    const unLikePost = async (id) =>{
        try {
         const res = await fetch('/unlike',{
             method:'put',
             headers:{
                 "Content-Type":"application/json",
                 "auth":"Bearer "+localStorage.getItem("jwt")
             },
             body:JSON.stringify({
                 postId:id
             })
         });
         
         const postUnLike = await res.json();
         console.log(postUnLike)
            
        } catch (error) {
            console.log(error)
        }
 
     }
    return (
        <div >
           {post.map(posts =>{
               return(

                <div className="card home-card" key={posts._id}>
                <h5 className="home-content post_img">{posts.postedBy.name}</h5>
                <div className="home-content">
                    <img src ={posts.photo} alt="post"></img>
                </div>
                <div className="card-contents home-content">
                <i className="material-icons">favorite</i>
                <i className="material-icons"
                   onClick={()=>{
                       likePost(posts._id)
                   }}
                >thumb_up</i>
                <i className="material-icons"
                  onClick={()=>{
                    unLikePost(posts._id)
                }}
                >thumb_down</i>    
                    <h6>{posts.like.length} likes</h6>
                    <h6>{posts.tittle}</h6>
                    <p>{posts.body}</p>
                    <input type="text" placeholder="add a comment"></input>
                </div>
                          

                          
            </div>
               )
           })}
        
        </div>
    )
}
