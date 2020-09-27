import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import "./Feed.css";
import db from './firebase';

interface PostData {
  image: string;
  message: string;
  profilePic: string;
  timestamp: any;
  username: string;
}

interface Post {
  id: string;
  data: PostData
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data() as PostData
      })))
    ))
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender/>
      {posts.map(post => (
        <Post key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}

export default Feed;
