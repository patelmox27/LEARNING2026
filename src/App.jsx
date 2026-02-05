// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from "react";


//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { Header1 } from "./components/Header1";
import { FooterComponent } from "./components/FooterComponent";
import { Footer1 } from "./components/Footer1";
import ContentComponent from "./components/ContentComponent";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { MapDemo4 } from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { Route,Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';

import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Home } from "./components/Home";
import { Watch } from "./components/Watch";
import { Teams } from "./components/Teams";
import { Playing } from "./components/Playing";

function App() {
   useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };

    handleChange(media);
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  
  return(
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<NetflixHome/>}/>
        <Route path='/netflixshows' element={<NetflixShows/>}/>
        <Route path='/netflixmovies' element={<NetflixMovies/>}/>
       <Route path="/portfolio" element={<ContentComponent/>}/>
       <Route path="/mapdemo1" element={<MapDemo1/>}/>
       <Route path="/mapdemo2" element={<MapDemo2/>}/>
       <Route path="/mapdemo3" element={<MapDemo3/>}/>
       <Route path="/mapdemo4" element={<MapDemo4/>}/>
       <Route path="/mapdemo5" element={<MapDemo5/>}/>
       <Route path="/teams" element={<Teams/>}/>
       <Route path="/*" element={<Error/>}/>



       <Route path="watch/:movieName" element={<Watch/>}/>
       <Route path="playing/:TeamName" element={<Playing/>}/>

      </Routes>
    
    </div>

  );
    
  
}
export default App
