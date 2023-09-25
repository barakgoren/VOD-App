import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function VodInput() {
  const inputRef = useRef();
  const nav = useNavigate();

  const navigateHome = () => {
    nav('/');
  }
  const navigate = () => {
    let query = inputRef.current.value;
    nav(`/search?s=${query}`);
  }
  return (
    <header className='container-fluid bg-dark p-2'>
      <div className="container">
        <div className=" row justify-content-between align-items-center">
          <div onClick={navigateHome} className='home-btn col-auto'>
            <h2 className='logo'>BARAK VOD</h2>
          </div>
          <nav className='d-flex col-md-auto justify-content-end search-input'>
            <input ref={inputRef} placeholder='search...' type="search" className='' />
            <button onClick={navigate} className=''>Search</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default VodInput