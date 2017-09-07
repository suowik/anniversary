import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class Riddle4 extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "", answer: "", expected: "", correct: false}
            ],
            solution: "PITWDCQ",
            title: "Zagadki ze świata"
        }
    }
}