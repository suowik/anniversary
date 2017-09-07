import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class Riddle2 extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "", answer: "", expected: "", correct: false}
            ],
            solution: "DI",
            title: "Zagadki ze świata"
        }
    }
}