import React from "react";
import CrosswordsRiddle from './CrosswordsRiddle.js'
export default class ScienceRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "", answer: "", expected: "", correct: false}
            ],
            solution: "WTVEAMEWD",
            title: "Zagadki ze świata"
        }
    }
}