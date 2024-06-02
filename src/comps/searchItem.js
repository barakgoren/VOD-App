import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchItem(props) {
    const nav = useNavigate();
    const tvItem = props.tvItem;
    const yearString = tvItem.release_date;
    const year = new Date(yearString);
    const moreInfo = () => {
        nav(`/info/${tvItem.id}`);
    }
    return (
        <div onClick={moreInfo} className="search-item m-1">
            <div className="card bg-dark text-white">
                <img src={`https://image.tmdb.org/t/p/original/${tvItem.poster_path}`} className="card-img-top" alt="Movie Title" />
                <div className="card-body">
                    {window.innerWidth < 768 ?
                        <h5 className="card-title">{tvItem.title.length > 10 ? `${tvItem.title.slice(0, 10)}...` : tvItem.title}</h5> :
                        <h5 className="card-title">{tvItem.title.length > 15 ? `${tvItem.title.slice(0, 15)}...` : tvItem.title}</h5>
                    }
                    <p className="card-text">Release Date: {year.getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}
