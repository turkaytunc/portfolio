import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './sidebar.scss';

const Sidebar = ({ showSidebar }: { showSidebar: boolean }) => {
  const currentClass = showSidebar ? 'sidebar-in' : 'sidebar-out';
  return (
    <aside className={`sidebar-container ${currentClass}`}>
      <section className="mobile-menu-photo flex-col">
        <p className="mobile-menu-name text-gray-800">Türkay Tunç</p>
        <p className="mobile-menu-title text-gray-800">Fullstack Web Developer</p>
      </section>
      <Navbar />
      <Footer />
    </aside>
  );
};

export default Sidebar;
