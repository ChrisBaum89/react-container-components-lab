// Code MovieReviews Here
import React from "react"

const MovieReviews = ({reviews}) => (
    <div className="review-list">{reviews.map(MovieReview)}</div>
)

const MovieReview = ({headline, multimedia, summary_short, link}) => (
    <div className="review">
        <h4><a href={link.url}>{headline}</a></h4>
        <p>{summary_short}</p>
    </div>
)
    
export default MovieReviews