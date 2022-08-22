import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'OMZSGFWTfs3VZt503Obx1Vyd9rBDDHAl';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
        }
    }
    
    componentDidMount(){
        fetch(URL)
        .then(response => response.json())
        .then(reviews => this.setState({reviews: reviews.results}))
    }


    render(){
       return(
        <div className="latest-movie-reviews">
            <h1>Latest Movie Reviews:</h1>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
        )
    }
}



export default LatestMovieReviewsContainer

// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=OMZSGFWTfs3VZt503Obx1Vyd9rBDDHAl