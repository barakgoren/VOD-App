import React from 'react'
import {AiFillStar} from 'react-icons/ai'

export default function ReviewItem(props) {
    const review = props.review;
    const date = new Date(review.created_at);
  return (
    <div className='review-container border p-3 rounded-4'>
        <div className=''><strong>{review.author}</strong><br/><span className='review-date'>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}<br/><AiFillStar/>{review.author_details.rating} </span><br/><br/><span className='review-content'>{review.content}</span></div>
    </div>
  )
}
