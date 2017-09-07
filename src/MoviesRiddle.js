import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class MoviesRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "", answer: "", expected: "", correct: false},
            ],
            solution: "GDPSAMIOMIQ",
            title: "Zagadki filmowe"
        }
    }
}