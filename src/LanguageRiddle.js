import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class LanguageRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "", answer: "", expected: "", correct: false},
            ],
            solution: "NIWXIQ",
            title: "Zagadki językowe"
        }
    }
}