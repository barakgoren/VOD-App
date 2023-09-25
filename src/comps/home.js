import React, { useEffect, useState } from 'react'
import Footer from './footer'
import VodInput from './vodInput'
import VodList from './vodList'
import VodStrip from './vodStrip'
import { generes_arr } from './catData';

import "./home.css"
import VodSearch from './vodSearch'
import Search from './search'

function Home() {
  const [movies, setMovies] = useState([]);
  const [comedy_arr, setComedy] = useState([]);
  const [action_arr, setAction] = useState([]);
  const [family_arr, setFamily] = useState([]);
  const [drama_arr, setDrama] = useState([]);
  useEffect(() => {
    doApi();
    findByGenere(35).then(data => setComedy(data));
    findByGenere(28).then(data => setAction(data));
    findByGenere(10751).then(data => setFamily(data));
    findByGenere(18).then(data => setDrama(data));
  }, [])

  const findByGenere = async (genereId) => {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genereId}&api_key=865f8942558b315bef4a11200750484d`;
      const resp = await fetch(url);
      const data = await resp.json();
      return data.results;
    } catch (error) {
      throw error;
    }
  }

  const doApi = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=865f8942558b315bef4a11200750484d';
    const resp = await fetch(url);
    const data = await resp.json();
    setMovies(data.results);
  }
  return (
    <React.Fragment>
      <VodStrip movies={movies} />
      <div className='body'>
        <VodList movies={comedy_arr} category={"Comedy"}/>
        <VodList movies={action_arr} category={"Action"}/>
        <VodList movies={family_arr} category={"Family"}/>
        <VodList movies={drama_arr} category={"Drama"}/>
      </div>
    </React.Fragment>
  )
}

export default Home