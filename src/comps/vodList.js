import React from 'react'
import VodItem from './vodItem'

function VodList(props) {
  const movies = props.movies;
  const category = props.category;
  return (
    <div className='container-fluid'>
      <div className="h-50">
        <label className='display-6 mb-3 text-white fw-bold'>{category}</label>
        <div className="d-flex movies-container">
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