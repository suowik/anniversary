import React, {Component} from "react";
import {caesar} from "./common/caesar.js";

export default class FinalRiddle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            expected: "OSGLEQ GMI"
        };
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({answer: e.target.value})
    };

    render() {
        return (
            <div className="row">
                <strong>Skarbie</strong>, dziękuję, Ci za trzy lata wspaniałego małżeństwa! :)<br/>
                Poniżej wpisz odpowiedź.
                <input type="text" name="answer" className="form-control" onChange={this.onChange}/>
                <span style={{fontWeight: 'bold'}}>{caesar(this.state.answer, 4).toUpperCase()}</span>
                {this.state.expected.toLowerCase() === this.state.answer.toLowerCase() &&
                <div>Laurka jest Twoim biurku w drugiej szufladzie od dołu</div>}
            </div>
        )
    }
}