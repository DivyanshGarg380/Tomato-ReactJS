import React, { useState } from 'react'
import './Home.css'
import Header from '../../Componenets/Header/Header'
import ExploreMenu from '../../Componenets/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Componenets/FoodDisplay/FoodDisplay'
import AppDownload from '../../Componenets/AppDownload/AppDownload'
const Home = () => {
  
   const [category,setCategory] = useState("All");
  
    return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
