import React,{useContext, useEffect, useState}from 'react'
import {UserContext} from '../../App';

export default function Home() {
    const [post , setPost] = useState([]);
    const {state} = useContext(UserContext);

    // get post 
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

//    like the post
  
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
        const newData = post.map(item =>{
            if(item._id === postLike._id){
                return postLike
            }
            else{
                return item
            }
        })
        setPost(newData)
           
       } catch (error) {
           console.log(error)
       }

    }

// unlike the post
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

         const newData = post.map(item =>{
             if(item._id === postUnLike._id){
                 return postUnLike
             }
             else{
                 return item
             }
         })
         setPost(newData)
            
        } catch (error) {
            console.log(error)
        }
 
     }

    //  comment on a post
    const makeComment = (text,postId)=>{
        fetch('/comment',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "auth":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId,
                text
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = post.map(item=>{
              if(item._id===result._id){
                  return result
              }else{
                  return item
              }
           })
          setPost(newData)
        }).catch(err=>{
            console.log(err)
        })
  }
// delete post
  const deletePost = (postid)=>{
    fetch(`/deletepost/${postid}`,{
        method:"delete",
        headers:{
            "auth":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        const newData =post.filter(item=>{
            return item._id !== result._id
        })
        setPost(newData)
    })
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
                {posts.like.includes(state._id)
                ?
                <i className="material-icons"
                onClick={()=>{
                  unLikePost(posts._id)
              }}
              >thumb_down</i>
              :
              <i className="material-icons"
              onClick={()=>{
                  likePost(posts._id)
              }}
              >thumb_up</i>
                }
               
                   
                    <h6>{posts.like.length} likes</h6>
                    <h6>{posts.tittle}</h6>
                    <p>{posts.body}</p>
                    {
                                    posts.comments.map(record=>{
                                        return(
                                        <h6 key={record._id}><span style={{fontWeight:"500"}}><b>{record.postedBy.name}</b></span> {record.text}</h6>
                                        )
                                    })
                                }
                    <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    makeComment(e.target[0].value,posts._id)
                                }}>
                    <input type="text" placeholder="add a comment"></input>
                    </form>
                </div>
                          

                          
             </div>
               )
           })}
        
        </div>
    )
}
