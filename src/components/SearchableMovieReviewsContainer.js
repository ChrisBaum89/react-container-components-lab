import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'OMZSGFWTfs3VZt503Obx1Vyd9rBDDHAl';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: "",
        }
    }
    
    handleInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.searchTerm !== ""){
            let searchURL = URL + `&query=${this.state.searchTerm}`
            fetch(searchURL)
            .then(response => response.json())
            .then(reviews => this.setState({reviews: reviews.results}))
        }
        
    }

    renderReviews = () => {
        //console.log(this.state.reviews)
        if (this.state.reviews.length > 0){
            return <MovieReviews reviews={this.state.reviews}/>
        }
    }

    render(){
        return (
        <div className="searchable-movie-reviews">
            <h1>Searchable Movie Reviews</h1>
            
            <form onSubmit={this.handleSubmit}>
                <input id="search" type="text" onChange={this.handleInputChange} value={this.state.searchTerm}/>
                <input type="submit"/>
            </form>

            {this.renderReviews()}
            
        </div>
        )
    }
}

export default SearchableMovieReviewsContainer

//https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=OMZSGFWTfs3VZt503Obx1Vyd9rBDDHAl&query=<search-term>
