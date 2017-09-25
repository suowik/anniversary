import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro.js';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Layout from './Layout.js'
import RiddleRenderer from './RiddleRenderer.js';
import FinalRiddle from './FinalRiddle.js'

import ScienceRiddle from './ScienceRiddle.js';
import MusicRiddle from './MusicRiddle.js'
import LanguageRiddle from './LanguageRiddle.js'
import RelationshipRiddle from './RelationshipRiddle.js'
import MoviesRiddle from './MoviesRiddle.js'

class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            riddles: [
                {path: "riddle1", activationDate: "02-10-2017 9:00", renderer: ScienceRiddle, label: "Zagadka 1"},
                {path: "riddle2", activationDate: "08-10-2017 9:00", renderer: MusicRiddle, label: "Zagadka 2"},
                {path: "riddle3", activationDate: "10-10-2017 9:00", renderer: LanguageRiddle, label: "Zagadka 3"},
                {path: "riddle4", activationDate: "12-10-2017 9:00", renderer: RelationshipRiddle, label: "Zagadka 4"},
                {path: "riddle5", activationDate: "23-10-2017 9:00", renderer: MoviesRiddle, label: "Zagadka 5"},
                {path: "final", activationDate: "01-11-2017 9:00", renderer: FinalRiddle, label: "Rozwiązanie"},
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
