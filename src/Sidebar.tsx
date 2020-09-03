import React from 'react';

import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

const Sidebar: React.FC = () => {
  return <div className="sidebar">
    <SidebarRow src="https://avatars0.githubusercontent.com/u/22005684?s=460&u=b950a6cf4e12e66a7187f33407abb88389e5250d&v=4" title="Vinicius Carvalho" />
    <SidebarRow icon={LocalHospitalIcon} title="COVID-19 Information Center" />
    <SidebarRow icon={EmojiFlagsIcon} title="Pages" />
    <SidebarRow icon={PeopleIcon} title="Friends" />
    <SidebarRow icon={ChatIcon} title="Messager" />
    <SidebarRow icon={StorefrontIcon} title="Marketplace" />
    <SidebarRow icon={VideoLibraryIcon} title="Videos" />
    <SidebarRow icon={ExpandMoreOutlined} title="Marketplace" />
  </div>
}

export default Sidebar;
