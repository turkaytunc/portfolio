import React from 'react';
import Navbar from '../navbar/Navbar';
import './sidebar.scss';

const Sidebar = ({ showSidebar }: { showSidebar: boolean }) => {
  const currentClass = showSidebar ? 'sidebar-in' : 'sidebar-out';
  return (
    <aside className={`sidebar-container ${currentClass}`}>
      <Navbar />
    </aside>
  );
};

export default Sidebar;
