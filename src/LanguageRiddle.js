import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class LanguageRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Ile znamy języków miłości?", answer: "", expected: "5", correct: false},
                {question: "", answer: "", expected: "", correct: false},
                {question: "", answer: "", expected: "", correct: false},
                {question: "", answer: "", expected: "", correct: false},
                {question: "", answer: "", expected: "", correct: false},
            ],
            solution: "NIWXIQ",
            title: "Zagadki językowe"
        }
    }
}