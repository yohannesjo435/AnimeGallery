import React from 'react';
import { TbMovie } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
export default function Header({handleOnChange, searchedAnime, setAnimeName}) {
  return (
    <header className='mainHeader'>
        <div className='inputWrapper'>
            <input
                type="text"
                onChange={handleOnChange}
                value={searchedAnime}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setAnimeName(e.target.value);
                    }
                }}
            />            
            <CiSearch className='searchIcon' />
        </div>

        <div className='watchListWrapper'>
            <TbMovie />
            <Link to="wishlist">
                Favourite
            </Link>
        </div>
    </header>
  )
}
