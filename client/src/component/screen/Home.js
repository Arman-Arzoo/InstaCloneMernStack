import React,{useEffect, useState}from 'react'

export default function Home() {
    const [post , setPost] = useState([]);

    useEffect(() => {
        async function getPost(){
            const res = await fetch('/getposts',{
                headers:{"auth":"Bearer "+localStorage.getItem("jwt")},
             });
             console.log(res)
             const allPosts = await res.json();
             setPost(allPosts.posts)
          
        }
        getPost()
      
    }, [])
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
