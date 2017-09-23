import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class RelationshipRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Miejsce, w które lubisz być całowana z czułością", answer: "", expected: "czoło", correct: false},
                {question: "Miejsce, w które lubię być masowany :D", answer: "", expected: "główka", correct: false},
                {question: "Gdzie byliśmy na pierwszej kawie?", answer: "", expected: "Jama Michalika", correct: false},
                {question: "Jaki pierwszy prezent dostałaś ode mnie?", answer: "", expected: "kieliszek", correct: false},
                {question: "Czego najbardziej nie lubimy?", answer: "", expected: "seler", correct: false}
            ],
            solution: "PITWDCQ",
            title: "Zagadki związkowe"
        }
    }
}