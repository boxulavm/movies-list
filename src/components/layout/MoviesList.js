import React, { Component } from 'react'
import MovieItem from './MovieItem'
import Loader from './Loader'
import { CSSTransition, TransitionGroup} from 'react-transition-group'

class MoviesList extends Component {
    state = {
        movies: [],
        movies2: [],
        loaded : false
    }

    data = 
    [
        { 
            "id": "1", 
            "Title": "Inception",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "16 Jul 2010",
            "Runtime": "148 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Christopher Nolan",
            "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Language": "English, Japanese, French",
            "Country": "USA, UK",
            "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.8",
            "imdbVotes": "1,446,708",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Response": "True"
        },
        {  
            "id": "2", 
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "910,366",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True"
        },
        { 
            "id": "3", 
            "Title": "The Dark Knight",
            "Year": "2008",
            "Rated": "PG-13",
            "Released": "18 Jul 2008",
            "Runtime": "152 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "Metascore": "82",
            "imdbRating": "9.0",
            "imdbVotes": "1,652,832",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Response": "True"
        },
        {  
            "id": "4", 
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            "Language": "English, Urdu, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            "Metascore": "70",
            "imdbRating": "8.3",
            "imdbVotes": "972,584",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Response": "True"
        },
        { 
            "id": "5",
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "876,575",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True"
        }
    ]

    componentDidMount(){
        this.setState({  loaded: true, movies: this.data, movies2: this.data })
    }

    // // Calculations ... 
    averageRating = () => this.state.movies
        .map(movies => Number(movies.imdbRating))
        .reduce((a, b) => ( a + b))
        / this.state.movies
        .map(movies => movies).length ; 

    
    nolanMovies = (e) => {
        const data = [...this.state.movies]
        const nolan = data.filter(movie => movie.Director === 'Christopher Nolan')
        this.setState({ movies: nolan})
        }

    allMovies = (e) => {
        const all = [...this.state.movies2]
        this.setState({ movies: all})
    }


    sortByNewest = (e) => {
        const data = [...this.state.movies]
        const sorted = data.sort((movie1, movie2) => (movie1.Year > movie2.Year ? -1 : 1 ))
        this.setState({ movies: sorted })
    }

    sortByOldest = (e) => {
        const data = [...this.state.movies]
        const sorted = data.sort((movie1, movie2) => (movie1.Year > movie2.Year ? 1 : -1 ))
        this.setState({ movies: sorted })
    }


    render() {
        if(this.state.loaded){
        return (
            <div className="container movie-list">
                <h4 className='center'>Average IMDB rating: {this.averageRating()} </h4>
                <div className="row filters center">
                    <button className='waves-effect waves-light btn z-depth-1 blue' onClick={this.allMovies}>Original Data</button>
                    <button className='waves-effect waves-light btn z-depth-1  purple' onClick={this.nolanMovies}>Nolan Movies</button>
                    <button className='waves-effect waves-light btn z-depth-1  light-blue' onClick={this.sortByNewest}>Newest</button>
                    <button className='waves-effect waves-light btn z-depth-1  light-blue' onClick={this.sortByOldest}>Oldest</button>
                </div>
                <div className="row movie-items">
                <TransitionGroup>
                {
                    this.state.movies.map(movie => 
                    
                    <CSSTransition key={movie.id} timeout={500} classNames='item'>
                        <MovieItem  movie={movie} />
                    </CSSTransition>
                    
                    )
                }
                </TransitionGroup> 
                </div>
            </div>  
        )} else{
            return(
                <Loader />
            )
        }
    }
}

export default MoviesList;