import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReviewItem from './reviewItem';
import { AiFillStar } from 'react-icons/ai'

export default function MovieInfo() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState("");
  const [reviews, setReviews] = useState([]);
  const [genre, setGenre] = useState("");
  const [rate, setRate] = useState(0);
  const movieId = params["id"];
  useEffect(() => {
    doApi()
    getReviews()
    console.log(movie);
  }, [])

  const doApi = async () => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=865f8942558b315bef4a11200750484d`
    let url2 = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=865f8942558b315bef4a11200750484d`
    let resp = await fetch(url);
    let trailerResp = await fetch(url2);
    let data = await resp.json();
    let trailerData = await trailerResp.json();
    setMovie(data);
    if (data.genres.length !== 0) {
      setGenre(data.genres[0].name);
    } else {
      setGenre("No specific genere.")
    }
    setRate(data.vote_average);
    for (let i = 0; i < trailerData.results.length; i++) {
      let item = trailerData.results[i];
      if (item.type == "Teaser") {
        setTrailer(`https://www.youtube.com/embed/${item.key}?autoplay=1&loop=1&playlist=${item.key}`);
        console.log(item.key);
        break;
      }
    }

  }
  const getReviews = async () => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=865f8942558b315bef4a11200750484d`
    let resp = await fetch(url);
    let data = await resp.json();
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
            <div><strong>Release Date:</strong><br />{movie.release_date}</div>
            <div><strong>Rating:</strong><br /><AiFillStar />{rate.toFixed(1)} </div>
            <div><strong>Genere:</strong><br /> {genre}</div>
            <div className='info-plot'><strong>Plot:</strong><br />{movie.overview}</div>
            {trailer && <div className="d-flex justify-content-center">
              <iframe
                width="65%"
                height="415"
                src={trailer}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Player"
              ></iframe>
            </div>}
            <br />
            <hr />
            <br />
            <div>
              <div className='mb-4 display-5'>Reviews</div>
              {reviews.map((item) => {
                return (
                  <ReviewItem key={item.id} review={item} />
                )
              })}
              {reviews.length === 0 ? <h1 className='text-center review-container border rounded-4 display-6'>No reviews yet</h1> : null}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
