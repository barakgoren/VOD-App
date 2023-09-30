import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./comps/home";
import VodInput from "./comps/vodInput";
import Footer from "./comps/footer";
import './App.css';
import Search from "./comps/search";
import MovieInfo from "./comps/movieInfo";


function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <div className="main-body">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/info/:id" element={<MovieInfo/>} />
          <Route path="/*" element={<div className="not-found"><h1 className="text-white text-center display-1">Page not found!</h1></div>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
