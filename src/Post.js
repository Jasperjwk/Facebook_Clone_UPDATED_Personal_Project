import { Avatar } from '@material-ui/core';
import React, { useEffect } from 'react';
import "./Post.css";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import db from './firebase';
import { useStateValue } from './StateProivder';

function Post({ profilePic, image, username, timestamp, message, id}) {

    const [{ user }, dispatch] = useStateValue();
    let array = [];

    async function deletePost(e)  {
        array = array.filter(i => i.id !== id);

        await db.collection("posts")
        .doc(id)
        .delete()
        .then(() => {
            e.preventDefault();
            
        }).catch(err => alert(err));
    }



    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src = {profilePic} />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpAltOutlinedIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineOutlinedIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeOutlinedIcon/>
                    <p>Share</p>
                </div>
                <div onClick={(e)=>{deletePost(e)}} className="post__option">
                    <DeleteOutlineOutlinedIcon/>
                    <p>Delete</p>
                </div>
            </div>
        </div>
    )
}

export default Post
