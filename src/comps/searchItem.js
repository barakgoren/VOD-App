import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function SearchItem(props) {
    const nav = useNavigate();
    const tvItem = props.tvItem;
    const yearString = tvItem.release_date;
    const year = new Date(yearString);
    const moreInfo = () => {
        nav(`/info/${tvItem.id}`);
      }
    return (
        <div onClick={moreInfo} className="search-item col-md-3 mb-4 me-3">
            <div className="card bg-dark text-white">
                <img src={`https://image.tmdb.org/t/p/original/${tvItem.poster_path}`} className="card-img-top" alt="Movie Title" />
                <div className="card-body">
                    <h5 className="card-title">{tvItem.title}</h5>
                    <p className="card-text">Release Date: {year.getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}
