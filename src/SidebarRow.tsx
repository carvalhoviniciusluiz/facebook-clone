import React from 'react';

import "./SidebarRow.css";
import { Avatar } from '@material-ui/core';

interface SidebarRowProps {
  src?: string;
  icon?: React.ComponentType;
  title: string;
}

const SidebarRow: React.FC<SidebarRowProps> = ({ src, icon: Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
