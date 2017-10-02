import React, {Component} from "react";
import moment from 'moment';

export default class RiddleRenderer extends Component {

    constructor(props) {
        super(props);
        this.dateFormat = "DD-MM-YYYY HH:mm"
    }

    render() {
        let canRender = moment().isBetween(
            moment(this.props.activationDate, this.dateFormat),
            moment(this.props.activationDate, this.dateFormat).add(24, 'h')
        );
        let Riddle = this.props.renderer;
        return (
            <div className="container">
                {canRender && <Riddle/>}
                {!canRender && <h1>Jeszcze nie czas :)</h1>}
            </div>
        )
    }
}