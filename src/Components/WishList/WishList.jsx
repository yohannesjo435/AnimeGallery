import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WishList() {

    const [wishList, setWishList] = useState([]);

    useEffect(
        ()=> {
            const localStorageWishList = JSON.parse(localStorage.getItem("wishList"))
                setWishList(localStorageWishList)
    }, []
    )
    return (
    <>
        <Link to="/" style={{padding: "50px 0 0 50px"}}>HOME</Link>
        <div className='wishListBody'>
            {wishList &&
            wishList.map((wishes, index)=> {
                return (
                    <div className="wishListCard" key={index}>
                        {wishes.img &&  <img className="wishListImage" src={wishes.img} alt={wishes.animeTitle} />}
                        <div className="wishListCardContent">
                            <h3 className="wishListCardName">{wishes.animeTitle}</h3>
                            <h6 className="wishListViewCount">{wishes.animeViews} </h6>
                        </div>
                    </div>
                )
            })
            }
        </div>
    </>
    )
}
