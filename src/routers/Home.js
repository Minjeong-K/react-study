import React, {Component} from 'react'
import axios from 'axios'
import Movie from '../components/Movie'

export default class Home extends Component {
    state = {
        isloading: true,
        movies: [],
    }

    getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get(
            'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
        )

        console.log(movies)

        this.setState({
            movies: movies,
            isloading: false,
        })
    }

    componentDidMount() {
        this.getMovies()
    }

    render() {
        const {isloading, movies} = this.state
        return (
            <section className="container">
                {isloading ? (
                    <div className="loader">
                        <span className="loader__text">
                            loading...
                        </span>
                    </div>
                ) : (
                    <div className="movies">
                        {' '}
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                rating={movie.rating}
                                genres={movie.genres}
                            ></Movie>
                        ))}
                    </div>
                )}
            </section>
        )
    }
}
