import React from 'react'

function VodInput() {
  return (
    <header className='container-fluid bg-dark p-2'>
      <div className="container">
        <div className=" row justify-content-between align-items-center">
          <div className='logo col-auto'>
            <h2 className='text-white'>VOD</h2>
          </div>
          <nav className='d-flex col-md-auto justify-content-end search-input'>
            <input placeholder='search...' type="search" className=''/>
            <button className=''>Search</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default VodInput