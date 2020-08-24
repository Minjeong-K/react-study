import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
            </div>
        )
    }
}
