import React, {Component} from "react";
import {hashHistory} from 'react-router';
import moment from 'moment';

class Intro extends Component {

    navigateToRiddle = (riddle, _activationDate) => {
        return (e) => {
            e.preventDefault();
            let now = moment();
            let from = moment(_activationDate, "DD-MM-YYYY HH:mm");
            let to = moment(_activationDate, "DD-MM-YYYY HH:mm").add(12, "h");
            if (!now.isBetween(from, to)) {
                alert('jeszcze nie czas :)');
                return;
            }
            hashHistory.push(riddle);
        }
    };

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1>Moja Piękna!</h1>
                    Jeszcze o tym nie wiesz, ale czeka Cię przygoda. Przed Tobą pięć zagadek do rozwiązania.<br/>
                    Każda zagadka stanie się aktywna w dzień ważnej dla nas daty i pozostanie w tym stanie przez
                    12 godzin, więc masz ograniczony czas na jej rozwiązanie :)<br/>
                    Rozwiązaniem każdej zagadki jest hasło - zanotuj je sobie, przyda się później...<br/>
                    Zastanawiasz się pewnie jaka jest nagroda - cierpliwości :)<br/>
                    <br />
                    <br/>
                    <div className="btn-group">
                        {this.props.riddles.map(riddle =>
                            <button key={riddle.path} className="btn btn-primary"
                                    onClick={this.navigateToRiddle(riddle.path, riddle.activationDate)}>
                                {riddle.label}
                            </button>)}
                    </div>
                    <br/>
                    PS. Do rozwiązania zagadek możesz używać Google, encyklopedii, intuicji... wszelkie chwyty dozwolone :)
                </div>
            </div>
        );
    }
}

export default Intro;
