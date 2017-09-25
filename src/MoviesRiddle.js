import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class MoviesRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Na jednym ze zdjęć w albumie 'My' są dokładnie 3 postaci - jak nazywa się ta trzecia?", answer: "", expected: "Smerfetka", correct: false},
                {question: "Mój ulubiony bohater z serii Avengers", answer: "", expected: "Iron Man", correct: false},
                {question: "", answer: "", expected: "", correct: false},
                {question: "", answer: "", expected: "", correct: false},
                {question: "", answer: "", expected: "", correct: false},
            ],
            solution: "GDPSAMIOMIQ",
            title: "Zagadki filmowe"
        }
    }
}