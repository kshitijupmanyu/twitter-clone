import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import FlipMove from 'react-flip-move';

function Feed() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async() => {
      const response=db.collection('posts');
      const data=await response.get();
      console.log(data)
      let fetchedPosts = [];
      data.docs.forEach(item=>{
        fetchedPosts.push(item.data())
      })
      setPosts(fetchedPosts)
  };

  useEffect(() => {
    fetchPosts()
  }, []);


  return (
    <div className="feed">
        <div className="feed--header">
            <h2>Home</h2>
        </div>
        
        <TweetBox />
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </FlipMove> 
    </div>
  )
}

export default Feed