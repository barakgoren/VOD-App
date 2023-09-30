import React from 'react'
import SearchItem from './searchItem';

export default function VodSearch(props) {
    const movies = props.movies;
  return (
    <div className='container-fluid'>
      <div className="container">
        <div className="row">
          {movies.map((item) => {
            return(
              <SearchItem key={item.poster_path} tvItem={item}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}
