import React, { useEffect, useState } from 'react'
import SearchItem from './searchItem';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
    const [movies, setMovies] = useState([]);
    const [query] = useSearchParams();
    useEffect(() => {
        doApi();
    }, [query])

    const doApi = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query.get("s")}&api_key=865f8942558b315bef4a11200750484d`;
        const resp = await fetch(url);
        const data = await resp.json();
        setMovies(data.results);
    }
    return (
        <React.Fragment>
            <div className='body p-5 row'>
                {movies.map((item) => {
                    if(item.poster_path === null){
                        return;
                    }
                    return (
                        <SearchItem key={item.poster_path} tvItem={item} />
                    )
                })}
            </div>
        </React.Fragment>
    )
}
