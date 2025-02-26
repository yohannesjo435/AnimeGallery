import { useState } from 'react';
import FetchCard from './Components/FetchCard/FetchCard';
import "./Components/FetchCard/FetchCard.css";
import Sidebar from './Components/Sidebar/Sidebar';
import "./Components/Sidebar/Sidebar.css";
import Header from './Components/Header/Header';
import "./Components/Header/Header.css"
import HeroImg from './Components/HeroImg/HeroImg';
import "./Components/HeroImg/HeroImg.css";
import FetchTopAnime from './Components/FetchTopAnime/FetchTopAnime';
import "./Components/FetchTopAnime/FetchTopAnime.css";
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import "./Components/RightSidebar/RightSidebar.css";


function App() {

  const [searchedAnime, setSearchedAnime] = useState("");
  const [animeName, setAnimeName] = useState("");
  const [animeCover, setAnimeCover] = useState("");
  const [loading, setLoading] = useState(false); // Set initial loading to false
  const [wishlist, setWishList] = useState([])
  
  const handleOnChange = (e) => {
    setSearchedAnime(e.target.value);
  };

  const handleWishList = (item) => {
    const localItem = JSON.parse(localStorage.getItem("wishList")) || [];
    const updatedWishList = [...localItem, item];
    setWishList(updatedWishList);
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
  }

  return (
    <main>
      <section className='leftSection'>
        <Sidebar/>  
      </section>

      <section className='middleSection'>
        <Header
          handleOnChange={handleOnChange}
          searchedAnime={searchedAnime}
          setAnimeName={setAnimeName}
          ></Header>
        <HeroImg></HeroImg>

        <section className='FTCardWrapper'>
          {animeName? 
            <FetchCard
              setAnimeCover={setAnimeCover}
              loading={loading}
              animeName={animeName}
              setLoading={setLoading}
              animeCover={animeCover}
            ></FetchCard>: 
            <FetchTopAnime
              handleWishList={handleWishList}
            ></FetchTopAnime>
            }
        </section>
      </section>
{/* 
      <section className='rightSection'>
        <RightSidebar/>  
      </section> */}

    </main>
  )
}

export default App
