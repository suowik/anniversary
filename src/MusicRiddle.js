import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class MusicRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Nagrał muzykę do serialu przyrodniczego, który oglądamy:", answer: "", expected: "Hans Zimmer", correct: false},
                {question: "Będziesz moją damą, będziesz moją panią", answer: "", expected: "Marek Grechuta", correct: false},
                {question: "Kto jest autorem jedynej piosenki, którą przetłumaczyłem w życiu (dla Ciebie)?", answer: "", expected: "Jim Croce", correct: false},
                {question: "My way, Summer, czy This what you came for?", answer: "", expected: "My way", correct: false},
                {question: "So suddenly I'm in love with a stranger I can't believe that she's mine...", answer: "", expected: "Fresh eyes", correct: false},
            ],
            solution: "DI",
            title: "Zagadki muzyczne"
        }
    }
}