import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./comps/home";
import VodInput from "./comps/vodInput";
import Footer from "./comps/footer";
import './App.css';
import Search from "./comps/search";


function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <div className="main-body">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<h1 className="text-warning">Not found!</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
