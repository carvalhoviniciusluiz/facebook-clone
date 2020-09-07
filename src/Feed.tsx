import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import "./Feed.css";

const Feed: React.FC = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender/>

      <Post
        profilePic="https://avatars0.githubusercontent.com/u/22005684?s=460&u=b950a6cf4e12e66a7187f33407abb88389e5250d&v=4"
        message="WOW this works!"
        timestamp="This is a timestamp.."
        username="carvalhoviniciusluiz"
        image="https://www.wernerpatels.com/wp-content/uploads/2020/06/social-media.jpg"
      />
      <Post
        profilePic="https://avatars0.githubusercontent.com/u/22005684?s=460&u=b950a6cf4e12e66a7187f33407abb88389e5250d&v=4"
        message="WOW this works!"
        timestamp="This is a timestamp.."
        username="carvalhoviniciusluiz"
        image="https://www.wernerpatels.com/wp-content/uploads/2020/06/social-media.jpg"
      />
      <Post
        profilePic="https://avatars0.githubusercontent.com/u/22005684?s=460&u=b950a6cf4e12e66a7187f33407abb88389e5250d&v=4"
        message="WOW this works!"
        timestamp="This is a timestamp.."
        username="carvalhoviniciusluiz"
        image="https://www.wernerpatels.com/wp-content/uploads/2020/06/social-media.jpg"
      />
    </div>
  )
}

export default Feed;
