import React, {Component} from 'react'

export default class Detail extends Component {
    componentDidMount() {
        const {location, history} = this.props
        if (location.undefined) {
            history.push('/')
        }
    }

    render() {
        const {location} = this.props
        if (location.state) {
            return (
                <div>
                    <div>{location.state.title}</div>
                    <div>{location.state.year}</div>
                    <div>
                        {location.state.genres.map((genre) => {
                            return (
                                <ul>
                                    <li>{genre}</li>
                                </ul>
                            )
                        })}
                    </div>
                    <img
                        src={location.state.poster}
                        alt={location.state.title}
                    />
                    <div>{location.state.summary}</div>
                </div>
            )
        } else {
            return null
        }
    }
}
