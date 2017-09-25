import CrosswordsRiddle from './CrosswordsRiddle.js'

export default class LanguageRiddle extends CrosswordsRiddle {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {question: "Ile znamy języków miłości?", answer: "", expected: "5", correct: false},
                {question: "fjelltopp sammen", answer: "", expected: "Starorobociański Wierch", correct: false},
                {question: "Ваш любимый музыкальный инструмент.", answer: "", expected: "skrzypce", correct: false},
                {question: "Jaki jest język urzędowy Dominikany?", answer: "", expected: "hiszpański", correct: false},
                {question: "Mój główny język programowania", answer: "", expected: "Java", correct: false},
            ],
            solution: "NIWXIQ",
            title: "Zagadki językowe"
        }
    }
}