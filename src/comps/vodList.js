import React from 'react'
import VodItem from './vodItem'

function VodList(props) {
  const movies = props.movies;
  return (
    <div className='container-fluid py-5'>
      <div className="container">
        <div className="row">
          {movies.map((item) => {
            return(
              <VodItem key={item.poster_path} tvItem={item}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default VodList