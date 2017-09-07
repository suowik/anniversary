import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class RelationshipRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "", answer: "", expected: "", correct: false}
            ],
            solution: "PITWDCQ",
            title: "Zagadki związkowe"
        }
    }
}