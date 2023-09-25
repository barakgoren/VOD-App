import React from 'react'
import {ReactComponent as TMBD} from '../tmbdicon.svg'

function Footer() {
  return (
    <div className='container-fluid bg-dark p-2 text-white text-center'>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className='d-flex align-items-center logo col-auto'>
            By Barak Goren {new Date().getFullYear()}&copy;
          </div>
          <div className='d-flex col-md-2 col align-items-center justify-content-end search-input'>
            <span className='me-2'>Using TMBd API</span>
            <TMBD width={30} height={40}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer