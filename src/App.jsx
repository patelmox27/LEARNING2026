/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from "react";


import './App.css'
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
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';

import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Home } from "./components/Home";
import { Watch } from "./components/Watch";
import { Teams } from "./components/Teams";
import { Playing } from "./components/Playing";
import { Routecomponent } from "./components/Routecomponent";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo1 } from './components/UseStateDemo1';
import { UseStateDemo2 } from './components/UseStateDemo2';
import { UseStateDemo3 } from './components/UseStateDemo3';
import { Employees } from './components/Employees';
import { InputDemo1 } from './components/input/inputDemo1';
import { InputDemo2 } from './components/input/InputDemo2';
import { FormDemo1 } from './components/form/FormDemo1';
import { FormDemo2 } from './components/form/FormDemo2';
import { FormDemo3 } from './components/form/FormDemo3';
import { FormDemo4 } from './components/form/FormDemo4';
import { Country } from './components/input/Country';
import { PasswordForm } from './components/form/PasswordForm';
import { ApiDemo1 } from './components/api/ApiDemo1';
import { ApiDemo2 } from './components/api/ApiDemo2';
import { ApiDemo3 } from './components/api/ApiDemo3';
import { Omdb } from './components/api/Omdb';
import { Imdb } from './components/api/Imdb';
import { MovieDetails } from './components/api/MovieDetail';
import { Apidemo4 } from './components/api/Apidemo4';


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


  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<NetflixHome />} />
        <Route path='/netflixshows' element={<NetflixShows />} />
        <Route path='/netflixmovies' element={<NetflixMovies />} />
        <Route path="/portfolio" element={<ContentComponent />} />
        <Route path="/mapdemo1" element={<MapDemo1 />} />
        <Route path="/mapdemo2" element={<MapDemo2 />} />
        <Route path="/mapdemo3" element={<MapDemo3 />} />
        <Route path="/mapdemo4" element={<MapDemo4 />} />
        <Route path="/mapdemo5" element={<MapDemo5 />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/*" element={<Error />} />
        <Route path="/routecomponent" element={<Routecomponent />} />
        <Route path="/Functiondemo1" element={<FunctionDemo1 />} />
        <Route path='/UseStateDemo1' element={<UseStateDemo1 />} />
        <Route path='/UsestateDemo2' element={<UseStateDemo2 />} />
        <Route path='/UsestateDemo3' element={<UseStateDemo3 />} />
        <Route path='/Employees' element={<Employees />} />
        <Route path='/InputDemo1' element={<InputDemo1 />} />
        <Route path='/InputDemo2' element={<InputDemo2 />} />
        <Route path='/FormDemo1' element={<FormDemo1 />} />
        <Route path='/FormDemo2' element={<FormDemo2 />} />
        <Route path='/FormDemo3' element={<FormDemo3 />} />
        <Route path='FormDemo4' element={<FormDemo4 />} />
        <Route path='/Country' element={<Country />} />
        <Route path='/PasswordForm' element={<PasswordForm />} />
        <Route path='/ApiDemo1' element={<ApiDemo1 />} />
        <Route path='/ApiDemo2' element={<ApiDemo2 />} />
        <Route path='/ApiDemo3' element={<ApiDemo3 />} />
        <Route path='/Omdb' element={<Omdb />} />
        <Route path='/Imdb' element={<Imdb />} />
        <Route path='/Apidemo4' element={<Apidemo4 />} />
        <Route path="/movie/:id" element={<MovieDetails />} />









        <Route path="watch/:movieName" element={<Watch />} />
        <Route path="playing/:TeamName" element={<Playing />} />

      </Routes>

    </div>

  );


}
export default App
