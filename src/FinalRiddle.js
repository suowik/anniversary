import React, {Component} from "react";
import {caesar} from "./common/caesar.js";

export default class FinalRiddle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            expected: "WTVEAMEWD DI NIWXIQ PITWDCQ GDPSAMIOMIQ"
        };
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({answer: e.target.value})
    };

    render() {
        return (
            <div className="row">
                <strong>Skarbie</strong>, dziękuję, Ci za cały rok bycia razem!<br/>
                To już ostatni etap gry :)<br/>
                Wpisz poniżej odpowiedzi poprzednich zagadaek, każde hasło oddziel spacją. Jeśli wszystko poszło dobrze
                to dowiesz się dwóch rzeczy:<br/>
                1. Co będziemy robić w naszą rocznicę. <br/>
                2. Za co jestem Ci najbardziej wdzięczny na świecie<br/>
                <input type="text" name="answer" className="form-control" onChange={this.onChange}/>
                <span style={{fontWeight: 'bold'}}>{caesar(this.state.answer, 4).toUpperCase()}</span>
                {this.state.expected.toLowerCase() === this.state.answer.toLowerCase() &&
                <div>Widoczny</div>}
            </div>
        )
    }
}