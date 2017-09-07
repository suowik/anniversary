import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class Riddle5 extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "", answer: "", expected: "", correct: false}
            ],
            solution: "GDPSAMIOMIQ",
            title: "Zagadki ze świata"
        }
    }
}