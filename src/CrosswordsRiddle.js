import React, {Component} from "react";

export default class CrosswordsRiddle extends Component {

    onChange = (index) => {
        return (e) => {
            e.preventDefault();
            let questions = this.state.questions;
            let question = questions[index];
            question.answer = e.target.value.toLowerCase();
            question.correct = e.target.value.toLowerCase() === question.expected;
            this.setState({
                questions: questions
            })
        }
    };

    render() {
        return (
            <div className="row">
                <h1>{this.state.title}</h1>
                <table className="table table-bordered table-striped">
                    <tbody>
                    {this.state.questions.map((question, i) => {
                        return <tr key={i} className={question.correct ? 'success' : 'warning'}>
                            <td>{i + 1}. {question.question}</td>
                            <td>
                                <input type="text"
                                       className="form-control"
                                       onChange={this.onChange(i)}/>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
                <h2>Odpowiedź:</h2>
                {this.state.questions.filter(q => !q.correct).length === 0
                && <strong>{this.state.solution}</strong>}
            </div>
        )
    }
}