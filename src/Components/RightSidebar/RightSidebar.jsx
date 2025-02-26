import React from 'react';
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

export default function Sidebar() {
  return (
    <nav className='rightSidebar'>

      <header className='rightSidebarHeader'>
        <FaRegBell />
        <MdOutlineMessage />
        <div className="logo">
          AnimeGallery
        </div>
      </header>

      <input type="text" className='rightSideSearch' />
      <div>
        <h4>Top This Week</h4>

        <ul>
          <div className='rightSidebarContainer'>
          </div>  
        </ul>

      </div>

    </nav>
  )
}
