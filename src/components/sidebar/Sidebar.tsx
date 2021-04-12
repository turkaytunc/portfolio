import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './sidebar.scss';

const Sidebar = ({ showSidebar }: { showSidebar: boolean }) => {
  const currentClass = showSidebar ? 'sidebar-in' : 'sidebar-out';
  return (
    <aside className={`sidebar-container ${currentClass}`}>
      <section className="mobile-menu-photo flex-col w-full align-middle justify-center text-center">
        <p className="mobile-menu-name text-gray-800 text-3xl font-bold">Türkay Tunç</p>
        <p className="mobile-menu-title text-gray-800 text-sm mt-2">Fullstack Web Developer</p>
      </section>
      <Navbar />
      <Footer />
    </aside>
  );
};

export default Sidebar;
