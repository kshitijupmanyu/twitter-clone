import {Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css';
import db from "./firebase"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: 'Kshitij Upmanyu',
      username: 'kshitij.upmanyu',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1255206406464008192/HexqtU2X_400x400.jpg"
    });

    setTweetMessage('')
    setTweetImage('')
  }


  return (
    <div className="tweetbox">
        <form>
            <div className="tweetbox--input">
                <Avatar src="https://pbs.twimg.com/profile_images/1255206406464008192/HexqtU2X_400x400.jpg" />
                <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"></input>
            </div>
            <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetbox--imageInput" placeholder="Optional: Enter image URL" type="text"></input>
            <Button onClick={sendTweet} type="submit" className="tweetbox--button">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox