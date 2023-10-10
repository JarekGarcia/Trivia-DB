import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { Pop } from "../utils/Pop.js"

class QuestionsService {
    async getQuestions() {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=15&type=boolean')

        console.log('GOT QUESTIONS', response.data)

        const newQuestions = response.data.results.map(question => new Question(question))

        AppState.questions = newQuestions

    }

    Button(a) {
        Pop.success('button works ' + a)

    }
}

export const questionsService = new QuestionsService()