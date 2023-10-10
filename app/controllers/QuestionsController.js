import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuestions() {
    const questions = AppState.questions
    let content = ''
    questions.forEach(question => content += question.QuestionCardTemplate)
    setHTML('questionCards', content)
}

export class QuestionsController {
    constructor() {
        Pop.success('Questions Controller Loaded!')
        this.getQuestions()


        AppState.on('questions', _drawQuestions())
        // console.log('appstate questions', AppState.questions);
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
            _drawQuestions()
            console.log('appstate', AppState.questions);

        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    Button(a) {
        questionsService.Button(a)
    }
}