import React, { useEffect, useState } from 'react';
import './Feed.css';
import db from './firebase';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    const [posts, setPosts] = useState([]);

    // This is a very powerful piece of code and what this does is by putting 
    // keeping [] empty, what it does is it only runs the code once the feed 
    // component loads 
    useEffect(() => {
        // snapshot is basically like a real time snapshot which means when 
        // basically anything is updated, added, changed. Anything inside
        // this collection it will give us the real time sort of snapshot
        // Example: you got a camera, you take a picture of it at that
        // real time point and then actually go ahead and pull it into the code
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
            // When I get the snapshot, update the post to whatever the snapshot is
            // I will get an array of docs and map through every single one
            // and for each doc, I want to return a custom object with an id which
            // is the document id and some data and the data is going to be the doc data
            //  doc.data is the data in the firebase collection 
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id, data: doc.data()
            })))
        ));
    }, []);


    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            {posts.map(({id, data: {profilePic, message, timestamp, username, image}}) => (
                    <Post
                        key={id}
                        id={id}
                        profilePic={profilePic}
                        message={message}
                        timestamp={timestamp}
                        username={username}
                        image={image}
                    />
                ))}
        </div>
    )
}

export default Feed
