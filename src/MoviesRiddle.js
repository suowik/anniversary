import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class MoviesRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Na jednym ze zdjęć w albumie 'My' są dokładnie 3 postaci - jak nazywa się ta trzecia?", answer: "", expected: "Smerfetka", correct: false},
            ],
            solution: "GDPSAMIOMIQ",
            title: "Zagadki filmowe"
        }
    }
}