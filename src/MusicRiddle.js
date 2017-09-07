import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class MusicRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Nagrał muzykę do serialu przyrodniczego, który oglądamy:", answer: "", expected: "Hans Zimmer", correct: false},
            ],
            solution: "DI",
            title: "Zagadki muzyczne"
        }
    }
}