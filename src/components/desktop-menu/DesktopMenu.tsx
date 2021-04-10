import React from 'react';
import './desktop-menu.scss';
import Navbar from '../navbar/Navbar';

const DesktopMenu = () => {
  return (
    <aside className="desktop-menu-container">
      <section className="desktop-menu-photo">Photo - Name</section>
      <section>
        <Navbar />
      </section>
      <footer className="desktop-menu-footer"> Footer </footer>
    </aside>
  );
};

export default DesktopMenu;
