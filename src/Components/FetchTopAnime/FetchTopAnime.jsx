import React, { useEffect, useState } from 'react';
import FetchCard from '../FetchCard/FetchCard';

export default function FetchTopAnime({handleWishList}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchTopAnimeData = async () => {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
                const resData = await response.json();
                if (resData.data && resData.data.length > 0) {
                    setData(resData.data);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopAnimeData();
    }, []);

    return (
        <div className='FTCardContainer'>
            {loading ? ( // Show loading message
                <h1>Loading...</h1>
            ) : (
                <>
                    {data.map((anime) => (
                        <div className="FTCard" key={anime.mal_id}>
                            {anime.images.jpg.image_url && 
                            <img className="FTImage" src={anime.images.jpg.image_url} alt={anime.title} />}
                            <div className="FTCardContent">
                                <h3 className="FTCardName">{anime.title}</h3>
                                <h6 className="FTViewCount">{anime.members} </h6>
                                <button 
                                    className="WishlistButton" 
                                    onClick={() => handleWishList(
                                        {
                                            img: anime.images.jpg.image_url, 
                                            animeTitle: anime.title,
                                            animeViews: anime.members
                                        }
                                    )}>
                                        Add to Wishlist
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}