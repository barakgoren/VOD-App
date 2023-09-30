import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReviewItem from './reviewItem';

export default function MovieInfo() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [genre, setGenre] = useState("");
  const [rate, setRate] = useState(0);
  const movieId = params["id"];
  useEffect(() => {
    doApi()
    getReviews()
  }, [])

  const doApi = async () => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=865f8942558b315bef4a11200750484d`
    let resp = await fetch(url);
    let data = await resp.json();
    setMovie(data);
    setGenre(data.genres[0].name);
    setRate(data.vote_average);
  }
  const getReviews = async () => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=865f8942558b315bef4a11200750484d`
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results)
    setReviews(data.results);
  }
  return (
    <div className='info'>
      <div className='info-page' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
      </div>
      <div className='testing py-4 text-white'>
        <div className='container'>
          <div className='mb-4 display-2 fw-bold'>{movie.title}</div>
          <div className='info-content'>
            <div><strong>Release Date:</strong><br /> {movie.release_date}</div>
            <div><strong>Rating:</strong><br />{rate.toFixed(1)} </div>
            <div><strong>Genere:</strong><br /> {genre}</div>
            <div className='info-plot'><strong>Plot:</strong><br />{movie.overview}</div>
            <br/>
            <hr/>
            <br/>
            <div>
              <div className='mb-4 display-5'>Reviews</div>
              {reviews.map((item) => {
                return (
                  <ReviewItem key={item.id} review={item}/>
                )
              })}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
