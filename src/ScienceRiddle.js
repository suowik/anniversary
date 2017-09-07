import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class ScienceRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Ile wynosi liczba atomowa pierwiastka, którego nazwa ukryta jest w nazwisku piosenkarza homoseksualisty przeze mnie poważanego?", answer: "", expected: "80", correct: false},
                {question: "Ile ton waży największy ssak morski?", answer: "", expected: "190", correct: false},
                {question: "Jaki hormon wydziela mój mózg ilekroć Cię widzę? :)", answer: "", expected: "endorfina", correct: false},
                {question: "Autor 'Krótkiej historii czasu'", answer: "", expected: "Stephen Hawking", correct: false},
                {question: "Gdy będę Cię przenosił przez próg, który mięsień będzie najbardziej obciążony?", answer: "", expected: "biceps", correct: false},
            ],
            solution: "WTVEAMEWD",
            title: "Zagadki ze świata"
        }
    }
}