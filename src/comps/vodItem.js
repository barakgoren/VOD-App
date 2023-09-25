import React from 'react'

function VodItem(props) {
  const tvItem = props.tvItem;
  const yearString = tvItem.release_date;
  const year = new Date(yearString);

  console.log(tvItem);
  return (
    <div class="item col-md-2 mb-4">
      <div class="card bg-dark text-white">
        <img src={`https://image.tmdb.org/t/p/original/${tvItem.poster_path}`} class="card-img-top" alt="Movie Title" />
        <div class="card-body">
          <h5 class="card-title">{tvItem.title}</h5>
          <p class="card-text">Release Date: {year.getFullYear()}</p>
        </div>
      </div>
    </div>

  )
}
export default VodItem