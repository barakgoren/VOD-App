import React from 'react'
import VodItem from './vodItem'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//<VodItem key={item.poster_path} tvItem={item}/>

function VodList(props) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }
  const movies = props.movies;
  const category = props.category;
  return (
    <div className='cat-list mb-4 container-fluid'>
      <div className="h-50">
        <label className='list-label display-6 mb-3 text-white fw-bold'>{category}</label>
        <div className="px-4">
          <Slider {...settings}>
            {movies.map((item) => {
              return (
                <div>
                  <VodItem key={item.poster_path} tvItem={item} />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default VodList