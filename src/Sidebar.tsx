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
import { useStateValue } from './StateProvider';

const Sidebar: React.FC = () => {
  const [state] = useStateValue();

  return <div className="sidebar">
    <SidebarRow src={state.user.photoURL}  title={state.user.displayName}  />
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
