import React, { useEffect, useState } from 'react';

export default function FetchCard({setAnimeCover, loading, animeName, setLoading,  animeCover}) {

    useEffect(() => {
        const fetchAnimeData = async () => {
            if (animeName) {
                setLoading(true);
                try {
                    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`);
                    const resData = await response.json();
                    if (resData.data && resData.data.length > 0) {
                        setAnimeCover(resData.data[0].images.jpg.image_url);
                    } else {
                        setAnimeCover(""); 
                    }
                } catch (error) {
                    console.log("Error fetching data:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchAnimeData();
    }, [animeName]);



    return (
        <div>

            {loading ? ( // Show loading message or spinner
                <h1>Loading...</h1>) : 
            (
                animeCover && 
                <div className='card'>
                    {animeCover && <img className='card-image' src={animeCover} alt={animeName} /> }
                    <div className="card-content">
                        <div>    
                            <h2 className="card-name">Naruto</h2>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
                            <h3 className="view-count">1000 People Watched</h3>
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
                </div>
            )}
        </div>
    );
}