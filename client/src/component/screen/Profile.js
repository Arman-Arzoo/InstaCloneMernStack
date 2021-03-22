import React from 'react'

export default function Profile() {
    return (
        <div className="profile-container">
        <div className="Profile">

            <div className="profilePic">
                <img src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg" alt="profile"></img>
            </div>
            <div className="profile_info">
                <h4>Asad</h4>
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
            <img  className="gallary-item" src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg" alt="pic"></img>
            <img  className="gallary-item" src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg" alt="pic"></img>
            <img  className="gallary-item" src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg" alt="pic"></img>
            <img  className="gallary-item" src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg" alt="pic"></img>
            <img  className="gallary-item" src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg" alt="pic"></img>
            <img  className="gallary-item" src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg" alt="pic"></img>

        </div>
        </div>
    )
}
