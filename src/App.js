import React, {Component} from 'react'
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'

import Home from './routers/Home.js'
import About from './routers/About.js'
import Detail from './routers/Detail.js'
import Navigation from './components/Navigation.js'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Navigation />
                <Route exact="true" path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/detail" component={Detail} />
            </HashRouter>
        )
    }
}
