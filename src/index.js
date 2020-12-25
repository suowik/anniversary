import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro.js';
import registerServiceWorker from './registerServiceWorker';
import { hashHistory, IndexRoute, Route, Router } from 'react-router'
import Layout from './Layout.js'
import RiddleRenderer from './RiddleRenderer.js';
import FinalRiddle from './FinalRiddle.js'

import ScienceRiddle from './ScienceRiddle.js';

class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            riddles: [
                {path: "riddle1", activationDate: "25-12-2020 7:00", renderer: ScienceRiddle, label: "Zagadki"},
                {path: "final", activationDate: "25-12-2020 7:00", renderer: FinalRiddle, label: "Rozwiązanie"},
            ]
        }
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={() => <Intro riddles={this.state.riddles}/>}/>
                    {this.state.riddles.map(riddle =>
                        <Route key={riddle.path} path={"/" + riddle.path}
                               component={() => <RiddleRenderer activationDate={riddle.activationDate}
                                                                renderer={riddle.renderer}/>}/>
                    )}
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
