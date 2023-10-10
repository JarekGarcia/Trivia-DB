import { generateId } from "../utils/GenerateId.js"

export class Question {
    constructor(data) {
        this.id = generateId()
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers

    }
    get QuestionCardTemplate() {
        return `
        <div class="col-4 m-5 bg-secondary p-2">

        <div class="d-flex justify-content-between">
          <p class="fw-bold">${this.category}</p>
          <p class="fw-bold">${this.difficulty}</p>
        </div>

        <div class="d-flex justify-content-center">
          <p>Question: ${this.question}</p>
        </div>

        <div class="d-flex justify-content-evenly">
          <button onclick="app.QuestionsController.Button('True')" class="btn btn-success">True</button>
          <button onclick="app.QuestionsController.Button('False')" class="btn btn-danger">False</button>
        </div>

      </div>
    `
    }
}



const questionData = {
    "category": "Geography",
    "type": "boolean",
    "difficulty": "medium",
    "question": "The flag of South Africa features 7 colours.",
    "correct_answer": "False",
    "incorrect_answers": "True",
}