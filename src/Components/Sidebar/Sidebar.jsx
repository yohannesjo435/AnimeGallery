import React from 'react';
import { GoHome } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { RiGamepadLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { MdFindInPage } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidebar() {
  return (
    <nav className='leftSidebar'>
      <div className="logo">
        AnimeGallery
      </div>

      <ul>
        <li className='active'>
            <GoHome className='sidebarIcons' />
            <p>Home</p>
        </li>
        <li>
            <FaRegStar />
            <p>
                Trending
            </p>
        </li>
        <li>
            <RiGamepadLine />
            <p>Suggestion</p>
        </li>
        <li>
            <TbCategory />
            <p>Category</p>    
        </li>
        <li>
            <MdFindInPage />
            <p>
                Discovery
            </p>
        </li>
        <li>
            <FaCalendarAlt />
            <p>
                Schedule
            </p>
        </li>
        <li>
            <IoSettingsOutline />
            <p>
                 Settings
            </p>
        </li>
      </ul>

      <a href='/'>
        Logo out
      </a>
    </nav>
  )
}
