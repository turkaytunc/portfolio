import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './sidebar.scss';

const Sidebar = ({ showSidebar }: { showSidebar: boolean }) => {
  const currentClass = showSidebar ? 'sidebar-in' : 'sidebar-out';
  return (
    <aside className={`sidebar-container ${currentClass}`}>
      <Navbar />
      <Footer />
    </aside>
  );
};

export default Sidebar;
