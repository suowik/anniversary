import React, {Component} from "react";
import {hashHistory} from 'react-router';
import moment from 'moment';

class Intro extends Component {

    navigateToRiddle = (riddle, _activationDate) => {
        return (e) => {
            e.preventDefault();
            let now = moment();
            let from = moment(_activationDate, "DD-MM-YYYY HH:mm");
            let to = moment(_activationDate, "DD-MM-YYYY HH:mm").add(24, "h");
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
                    <h1>Słońce moje!</h1>
                    Huncwot Paweł ukrył przed Tobą laurkę :( <br/>
                    Musisz rozwiązać kilka prostych zagadek, aby uzyskać do niej dostęp. <br/>
                    Baw się dobrze!!!
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
