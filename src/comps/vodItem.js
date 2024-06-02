import React from 'react';
import { useNavigate } from 'react-router-dom';

function VodItem(props) {
  const nav = useNavigate();
  const tvItem = props.tvItem;
  const yearString = tvItem.release_date;
  const year = new Date(yearString);
  const moreInfo = () => {
    nav(`/info/${tvItem.id}`);
  }
  return (
    <div onClick={moreInfo} className="item mb-4 me-3">
      <div className="card bg-dark text-white">
        <img src={`https://image.tmdb.org/t/p/original/${tvItem.poster_path}`} className="card-img-top" alt="Movie Title" />
        <div className="card-body">
          <h5 className="card-title">{tvItem.title.length > 30 ? `${tvItem.title.slice(0, 30)}...` : tvItem.title}</h5>
          <p className="card-text">Release Date: {year.getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}
export default VodItem