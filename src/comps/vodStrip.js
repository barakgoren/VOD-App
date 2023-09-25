// import React, { useState } from 'react'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function VodStrip(props) {
  const movies = props.movies;
  return (
      <Carousel className='mb-4'>
        {movies.map((item) => {
          return (
            <Carousel.Item key={item.backdrop_path}>
              <div className='img-container'>
                <img
                  className="d-block"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="First slide"
                  height="500px"
                  width='100%'
                />
              </div>
              <Carousel.Caption>
                <div style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                  <h2>{item.original_title}</h2>
                  <p>{item.overview}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
  )
}
