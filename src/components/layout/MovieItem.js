import React from 'react'

const MovieItem = ({ movie }) => {
    return (
            <div className="col l6 m6 s12">
                <ul className="collection with-header">
                    <li className="collection-header blue-grey darken-4"><h4>{movie.Title} <small>{movie.Year}</small></h4></li>
                    <li className="collection-item">{movie.Genre}</li>
                    <li className="collection-item">by : {movie.Director}</li>
                    <li className="collection-item">{movie.Awards}</li>
                    <li className="collection-item">imdb Rating: {movie.imdbRating} , votes: {movie.imdbVotes}</li>
                </ul>
            </div>
    )
}

export default MovieItem
