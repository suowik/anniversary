import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class ScienceRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Znajdź miejsca zerowe (oddziel je przecinkiem) funkcji kwadratowej: `x^2-38x+312=0`", answer: "", expected: "12,26", correct: false},
                {question: "W którym roku zbiór dyni w Polsce wyniósł 45 tysięcy ton?", answer: "", expected: "2017", correct: false},
                {question: "Jak jest? (Ślepnąć od Świateł)", answer: "", expected: "sztywniutko", correct: false},
            ],
            solution: "OSGLEQ GMI",
            title: ":* :* :*"
        }
    }
}