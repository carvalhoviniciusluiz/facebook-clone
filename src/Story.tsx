import React from 'react';
import "./Story.css";
import { Avatar } from '@material-ui/core';

interface StoryProps {
  image: string;
  profileSrc: string;
  title: string;
}

const Story: React.FC<StoryProps> = ({ image, profileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{ title }</h4>
    </div>
  );
}

export default Story;
