import React, { useEffect, useState } from 'react'
import Footer from './footer'
import VodInput from './vodInput'
import VodList from './vodList'
import VodStrip from './vodStrip'

import "./home.css"

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=865f8942558b315bef4a11200750484d';
    const resp = await fetch(url);
    const data = await resp.json();
    setMovies(data.results);
  }
  return (
    <React.Fragment>
      <VodInput />
      <VodStrip movies={movies}/>
      <VodList movies={movies}/>
      <Footer />
    </React.Fragment>
  )
}

export default Home