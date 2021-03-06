import React from 'react'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types' // 추가

import '../css/Movie.css'

const Movie = (props) => {
    const {genres, title, year, rating, summary, poster} = props
    return (
        <div className="movie__">
            <img
                src={props.poster}
                alt={props.title}
                title={props.title}
                width="130px"
            ></img>
            <div className="movie__data">
                <Link
                    to={{
                        pathname: '/detail',
                        state: {
                            genres,
                            title,
                            year,
                            rating,
                            summary,
                            poster,
                        },
                    }}
                >
                    <h3 className="movie__name">
                        {props.title} ( {props.year} )
                    </h3>
                    <h5 className="movie__rating">
                        RATING: {props.rating}
                    </h5>
                    <h5 className="movie__genres">
                        GENRES:{' '}
                        {genres.map((genre) => {
                            return genre + ' '
                        })}
                    </h5>
                    <p className="movie__ummary">
                        {props.summary.slice(0, 180)}...
                    </p>
                </Link>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
