import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel: React.FC = () => {
  return <div className="storyReel">
    <Story
      image="https://i.pinimg.com/564x/24/a4/3c/24a43c2ab550580997169a9f0ddcacfb.jpg"
      profileSrc="https://avatars3.githubusercontent.com/u/66843246?s=460&u=88f2ccb6a7f2b3b2e211e5314fe7619d29d62441&v=4"
      title="Felipe Secato"
    />
    <Story
      image="https://i.pinimg.com/564x/12/12/38/12123834fe31fe510507d28832f74700.jpg"
      profileSrc="https://avatars2.githubusercontent.com/u/28585270?s=460&u=4520e278d1cc59fbda5b5fac7131d09a63eaf460&v=4"
      title="Heitor Saldanha"
    />
    <Story
      image="https://i.pinimg.com/564x/dd/8b/f4/dd8bf4c0b3c7b47e57ea41e144b41a0a.jpg"
      profileSrc="https://avatars1.githubusercontent.com/u/7747175?s=460&u=dae826e486a4a5f49b5e285786c3da50fc9969fc&v=4"
      title="Gilberto Moraes"
    />
    <Story
      image="https://i.pinimg.com/564x/46/f7/e8/46f7e80912923effaf7dd27811864000.jpg"
      profileSrc="https://avatars1.githubusercontent.com/u/3640901?s=460&u=1321efd4e8b96d06d33c7b7eba5cbbae32d50713&v=4"
      title="Rafael Ruiz"
    />
    <Story
      image="https://i.pinimg.com/564x/55/1f/b3/551fb3bc34c284e1b35b80e075cd0190.jpg"
      profileSrc="https://avatars1.githubusercontent.com/u/849137?s=460&u=627bcf2a55467b11c367856f37c70a2c22878215&v=4"
      title="Jackson Silva"
    />
  </div>;
}

export default StoryReel;
